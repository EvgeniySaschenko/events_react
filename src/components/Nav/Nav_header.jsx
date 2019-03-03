import { connect } from 'react-redux';
import Nav from './Nav.jsx';
import API from '../../api';
import { withRouter } from 'react-router';
const config= require('../../../config.json');

class Nav_header extends Nav{
	constructor(props){
		super(props);
	}
}

export default withRouter(connect(
	store => {
		return{
			data: store.nav_header
		}
	},
	dispatch => {
		return{
			init: function() {
				this.init.errCounter= this.init.errCounter ? this.init.errCounter : 0;
				API.nav.getNav('main')
					.then((res)=>{
						this.init.errCounter= 0;
						dispatch({
							type: 'Nav.header_INIT',
							payload: res.data
						})
					})
					.catch((err)=>{
						if(this.init.errCounter <= config.countQueryErr){
							this.init();
						}
						console.log( err )
					})
			},
			clear: function(id) {
				dispatch({
					type: 'Nav.header_CLEAR',
				})
			},
		}
	}, 
	null, 
	{ pure: false }
)(Nav_header));