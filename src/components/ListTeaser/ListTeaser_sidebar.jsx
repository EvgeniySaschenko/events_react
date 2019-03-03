import { connect } from 'react-redux';
import ListTeaser from './ListTeaser.jsx';
import API from '../../api';
const config= require('../../../config.json');


class ListTeaser_sidebar extends ListTeaser{
	constructor(props){
		super(props);
	}
}

export default connect(
	store => {
		return{
			data: store.listTeaser_sidebar
		}
	},
	dispatch => {
		return{
			init: function(city) {
				this.init.errCounter= this.init.errCounter ? this.init.errCounter : 0;

				API.events.getListEventsCityCountRecords(city)
				.then((res)=>{
					this.init.errCounter= 0;
					dispatch({
						type: 'ListTeaser.sidebar_INIT',
						payload: res.data
					})
				})
				.catch((err)=>{
					if(this.init.errCounter <= config.countQueryErr){
						this.init(city);
					}
					console.log( err )
				})
			},

			clear: function(id) {
				dispatch({
					type: 'ListTeaser.sidebar_CLEAR',
				})
			},
		}
	}
)(ListTeaser_sidebar);