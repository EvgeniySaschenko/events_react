import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PreloaderBlock from '../PreloaderBlock/PreloaderBlock.jsx';
import Image from '../Image/Image.jsx';

class ListTeaser extends React.Component{
	constructor(props){
		super(props);
		// Прелоадер
		this.loader= true;

		this.clickLink= ()=>{
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}

	componentDidMount(){
		this.props.init(window.currentCity);
	}

	componentWillUnmount(){
		this.props.clear();
	}

	componentWillReceiveProps(nextProps){
		let { list= [] }= nextProps.data;
		if(list.length){
			this.loader= false;
		}
	}


	render(){
		let { clsMod, data: { list= [], count }, title: titleBlock= '' }= this.props;
		clsMod= clsMod ? `ListTeaser_${clsMod}` : '';
		let template= list.map((e, i)=>{
			let {
				images,
				title= '',
				id
			}= e;
			let link= `/${window.currentCity}/event/id/${id}`;
			let img= images[0].image ? images[0].image : window.imgStub
			return(
				<div className="ListTeaser__item" key={i}>
					<Link to={ link } 
								className="ListTeaser__item-box-img"
								onClick={ this.clickLink }>
						<Image cls="ListTeaser__item-img" src={ img }/>
					</Link>
					<Link to={ link } 
								className="ListTeaser__item-title"
								onClick={ this.clickLink }>
						{ title }
					</Link>
				</div>
			)
		});

		return(
			<div className={ `ListTeaser ${clsMod}`}>
				<div className="ListTeaser__title"> { titleBlock } </div>
				{ this.loader ? <PreloaderBlock /> : template }
			</div>
		)
	}
}

export default ListTeaser;