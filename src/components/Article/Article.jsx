import React, { Fragment } from 'react';
import PreloaderBlock from '../PreloaderBlock/PreloaderBlock.jsx';
import SliderSimple from '../SliderSimple/SliderSimple.jsx';
import moment from 'moment';

class Article extends React.Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		let { id }= this.props.match.params;
		this.props.init(id);
	}

	componentWillReceiveProps(nextProps){
		let { id }= nextProps.match.params;
		if(this.props.match.params.id != id){
			this.props.init(id);
		}
	}
	
	componentWillUnmount(){
		this.props.clear();
	}

	render(){
		let { clsMod, data }= this.props;
		clsMod= clsMod ? `Article_${clsMod}` : '';

		let {
			images= [], 
			dates= [],
			title= '', 
			description= '', 
			is_free= '', 
			price= '', 
			place
		}= data;
	place= place ? { title: place.title, address: place.address } : { title: '', address: '' };
		let template= !data ? <PreloaderBlock/> :
			<Fragment>
				<h1 className="Article__title"> { title } </h1>
				<div className="Article__description" dangerouslySetInnerHTML={{ __html: description }} /> 
				<div className="Article__box-slider">
					<SliderSimple data={ images } clsMod="article"/>
				</div>
			<div className="Article__text" dangerouslySetInnerHTML={{ __html: data.body_text }} /> 

			<ul className="Article__list-info">
				<li className="Article__list-info-item">
					<span className="Article__list-info-name">Дата окончания:</span>
					{
						dates[dates.length - 1] ?
						dates[dates.length - 1].end == '253370754000' ? 'Безсрочно' : moment.unix(dates[dates.length - 1].end).format("MM.DD.YYYY") :
						''
					}
				</li>
				<li className="Article__list-info-item">
					<span className="Article__list-info-name">Адрес:</span>
					{ place.title }, { place.address }
				</li>
				<li className="Article__list-info-item">
					<span className="Article__list-info-name">Цена:</span>
					{ !is_free ? price : 'Бесплатно' }
				</li>
			</ul>

		</Fragment>
		return(
			<div className={ `Article ${clsMod}` }>
				{ template }
			</div>
		)
	}
}

export default Article;