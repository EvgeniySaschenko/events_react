import BtnToggle from './BtnToggle.jsx';
import { connect } from 'react-redux';

class BtnToggle_listEventsFree extends BtnToggle{
	constructor(props){
		super(props);
	}
}

export default connect(
	store =>{
		return{
			data: store.btnToggle_listEventsFree
		}
	},
	dispatch => {
		return{
			toggle: function(){
				dispatch({
					type: 'BtnToggle.listEventsFree_TOGGLE'
				})
			},
			clear: function(id) {
				dispatch({
					type: 'BtnToggle.listEventsFree_CLEAR',
				})
			},
		}
	}
)(BtnToggle_listEventsFree);