import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import API from '../../api';
import DropDownMenuLocation from './DropDownMenuLocation.jsx';

const config = require('../../../config.json');

class DropDownMenuLocation_main extends DropDownMenuLocation {
  constructor(props) {
    super(props);
  }
}

export default withRouter(connect(
  (store) => ({
			data: store.dropDownMenuLocation_main
		}),
  (dispatch) => ({
			init: function (slug) {
				this.init.errCounter = this.init.errCounter ? this.init.errCounter : 0;
				API.cities.getCities()
					.then((res) => {
						this.init.errCounter = 0;
						dispatch({
							type: 'DropDownMenuLocation.main_INIT',
							payload: {
								data: res.data,
								currentSlug: slug
							}
						})
					})
					.catch((err) => {
						if (this.init.errCounter <= config.countQueryErr) {
							this.init.errCounter++;
							this.init(slug);
						}
						console.log(err)
					})
			},
			changeCity: function (name, slug) {
				dispatch({
					type: 'DropDownMenuLocation.main_CHANGE-CITY',
					payload: {
						currentName: name,
						currentSlug: slug
					}
				})
			}
		}),
)(DropDownMenuLocation_main));
