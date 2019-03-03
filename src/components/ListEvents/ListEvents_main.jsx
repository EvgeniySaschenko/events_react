import { connect } from 'react-redux';
import ListEvents from './ListEvents.jsx';
import API from '../../api';
const config= require('../../../config.json');


class ListEvents_main extends ListEvents{
	constructor(props){
		super(props);
	}
}

export default connect(
	store => {
		return{
			data: store.listEvents_main,
			cities: store.dropDownMenuLocation_main,
			isFreeEvents: store.btnToggle_listEventsFree
		}
	},
	dispatch => {
		return{
			init: function(city, page, isFreeEvents) {
				this.init.errCounter= this.init.errCounter ? this.init.errCounter : 0;

				API.events.getListEventsCity(city, page, isFreeEvents)
				.then((res)=>{
					this.init.errCounter= 0;
					dispatch({
						type: 'ListEvents.main_INIT',
						payload: res.data
					})
				})
				.catch((err)=>{
					if(this.init.errCounter <= config.countQueryErr){
						this.init(city, page, isFreeEvents);
					}
					console.log( err )
				})
			},
			loadingDataNextPage: function(city, page, isFreeEvents){
				this.loadingDataNextPage.errCounter= this.loadingDataNextPage.errCounter ? this.loadingDataNextPage.errCounter : 0;

				API.events.getListEventsCity(city, page, isFreeEvents)
				.then((res)=>{
					this.loadingDataNextPage.errCounter= 0;
					dispatch({
						type: 'ListEvents.main_LOADING-DATA-NEXT-PAGE',
						payload: res.data
					})
				})
				.catch((err)=>{
					this.loadingDataNextPage.errCounter++;
					if(this.loadingDataNextPage.errCounter <= config.countQueryErr){
						this.loadingDataNextPage(city, page, isFreeEvents);
					}
					console.log( err )
				})
			},
			clear: function(id) {
				dispatch({
					type: 'ListEvents.main_CLEAR',
				})
			},
		}
	}
)(ListEvents_main);