import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PreloaderBlock from '../PreloaderBlock/PreloaderBlock.jsx';
import Alert from '../Alert/Alert.jsx';
import Image from '../Image/Image.jsx';
import moment from 'moment';

class ListEvents extends React.Component{
	constructor(props){
		super(props);
		// Прелоадер
		this.loader= true;
		// Подгрузка данных при скролинге (false пока компонент не обновится)
		this.loadingData= false;
		// Обработчик scroll
		this.handlerScroll= (e)=>{
			let scrolTopBody= document.querySelector('body').getBoundingClientRect().y;
			let heightBody= document.querySelector('body').offsetHeight;
			let heightWindow= window.innerHeight;
			let point= heightBody - (scrolTopBody * -1) - heightWindow;
			if(point <= 500 && !this.loadingData){
				this.loadingData= true;
				this.loadingDataNextPage();
			}
		}
		// Подгрузка данных при скроллинге
		this.loadingDataNextPage= ()=>{
			let { nextPage, prevPage }= this.props.data;
			let { isFreeEvents }= this.props;
			if(nextPage != prevPage && nextPage > 1){
				this.props.loadingDataNextPage(window.currentCity, nextPage, isFreeEvents);
			}
		}
		// Прокрутка вверх при нажатии на ссылку (для мобильных)
		this.clickLink= ()=>{
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}

	componentDidMount(){
		let page= 1;
		let { isFreeEvents }= this.props;

		this.props.init(window.currentCity, page, isFreeEvents);
		document.addEventListener('scroll', this.handlerScroll);
	}

	componentWillReceiveProps(nextProps){
		// Если меняется город - поменять данные
		if((nextProps.cities.currentSlug != this.props.cities.currentSlug || nextProps.isFreeEvents != this.props.isFreeEvents) 
			&& this.props.cities.currentSlug){
			this.loader= true;
			let { cities, isFreeEvents }= nextProps;
			let page= 1;
			this.props.init(cities.currentSlug, page, isFreeEvents);
		} else{ 
			let { list= [] }= nextProps.data;
			this.loader= list.length ? false : true;
		}
	}

	componentDidUpdate(prevProps, prevState){
		let { list : listPrev= [] }= prevProps.data;
		let { list= [] }= this.props.data;
		
		if(listPrev.length != list.length){
			this.loadingData= false;
		}
	}

	componentWillUnmount(){
		document.removeEventListener('scroll', this.handlerScroll);
		this.props.clear();
	}

	render(){
		let { clsMod, data: { list= [], count }, }= this.props;
		
		clsMod= clsMod ? `ListEvents_${clsMod}` : '';
		let template= 
			list.map((e, i)=>{
					let link= `/${window.currentCity}/event/id/${e.id}`;
					let { images= images[0].image ? images : [{image: window.imgStub}], 
								dates= [],
								title= '', 
								description= '', 
								is_free= '', 
								price= '', 
								place
							}= e;
							place= place ? { title: place.title, address: place.address } : { title: '', address: '' };

					return(
						<div className={ `ListEvents__item` } key={i}>
							
								<div className="ListEvents__row ListEvents__row_1">
									<Link className={ `ListEvents__item-box-img` } 
												to={ link }
												onClick={ this.clickLink }>
										<Image cls="ListEvents__item-img" src={ e.images[0].image } />
									</Link>
								</div>

								<div className="ListEvents__row ListEvents__row_2">
									<h3 className="ListEvents__item-title">
										<Link className="ListEvents__item-link-title"
													to={ link }
													onClick={ this.clickLink }>
											{ title }
										</Link>
									</h3>
									<div className="ListEvents__item-description" dangerouslySetInnerHTML={{ __html: description }}/>
									<div className="ListEvents__item-date-end">
										Дата окончания: 
										<span className="ListEvents__item-date-end-value">
											{
												dates[dates.length - 1] ?
												dates[dates.length - 1].end == '253370754000' ? 'Безсрочно' : moment.unix(dates[dates.length - 1].end).format("MM.DD.YYYY") :
												''
											}
										</span>
									</div>
									<div className="ListEvents__item-place">{ place.title }, { place.address }</div>

								</div>

								<div className="ListEvents__row ListEvents__row_3">
									<div className={`ListEvents__item-price ${ !e.is_free ? '' : 'ListEvents__item-price_free' }`}>
										{ !is_free ? price : 'Бесплатно' }
									</div>
								</div>

						</div>
					)
				})

		return(
			<div className={ `ListEvents ${clsMod}` } ref="ListEvents">
				<h1 className="ListEvents__title"> События в городе: {this.props.cities.currentName}</h1>
				<div className="ListEvents__list">
					{
						count === 0 ?
						<Alert text="По данному запросу ничего не найдено!" /> :
						!this.loader ? template : <PreloaderBlock />
					}
					{
						this.loadingData && count != list.length ? <PreloaderBlock /> : ''
					}
				</div>
			</div>
		)
	}
}

export default ListEvents;