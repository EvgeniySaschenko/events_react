import { connect } from 'react-redux';
import Article from './Article.jsx';
import API from '../../api';
import { withRouter } from 'react-router';

const config = require('../../../config.json');


class Article_event extends Article {
  constructor(props) {
    super(props);
  }
}


export default withRouter(connect(
  store => ({
    data: store.article_event,
  }),
  dispatch => ({
    init (id) {
			this.init.errCounter = this.init.errCounter ? this.init.errCounter : 0;

			API.events.getEventById(id)
				.then((res) => {
					this.init.errCounter = 0;
					dispatch({
						type: 'Article.event_INIT',
						payload: res.data
					})
				})
				.catch((err) => {
					if (this.init.errCounter <= config.countQueryErr) {
						this.init.errCounter++;
						this.init(id);
					}
					console.log(err)
				})
		},
    clear (id) {
			dispatch({
				type: 'Article.event_CLEAR',
			})
		},
  }),
)(Article_event));
