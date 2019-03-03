import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import API from '../../api';
const config= require('../../../config.json');

class Search extends React.Component{
	constructor(props){
		super(props);
		// Ввод в строку поиска
		this.changeField= ()=>{
			let text= this.refs.Search__field.value;
			if(text.length >= 3){
				this.props.liveSearch(window.currentCity, text);
			}
		}
		// При клике закрыть список
		document.addEventListener('click', ()=>{
			let { data }= this.props;
			if(data.length){
				this.props.clear();
			}
		})
	}

	render(){
		let { clsMod, data }= this.props;
		clsMod= clsMod ? 'Search_' + clsMod : '';

		let template= data.map((e, i)=>{
			let link= `/${window.currentCity}/event/id/${e.id}`;
			return(
				<li className="Search__list-item" key={i}>
					<Link className="Search__list-link" to={link}>{ e.title }</Link>
				</li>
			)
		})
		
		return(
			<div className={ `Search ${ clsMod } ${data.length ? 'active' : ''}` }>
				<input type="text" className="Search__field" ref="Search__field" placeholder="Поиск" onInput={ this.changeField }/>
				<ul className="Search__list">
					{ template }
				</ul>
			</div>
		)
	}
}

export default connect(
	store =>{
		return{
			data: store.search
		}
	},
	dispatch =>{
		return{
			liveSearch: function(city, text) {
				API.search.getLiveSearch(city, text, 10)
				.then((res)=>{
					dispatch({
						type: 'Search_LIVE-SEARCH',
						payload: res.data
					})
				})
				.catch((err)=>{
					console.log( err )
				})
			},
			clear: function(){
				dispatch({
					type: 'Search_CLEAR'
				})
			}
		}
	}
)(Search);