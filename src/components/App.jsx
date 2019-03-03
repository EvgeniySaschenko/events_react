import React from 'react';
import { Switch, Route } from 'react-router';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Page_listEvents from '../pages/Page_listEvents.jsx';
import Page_article from '../pages/Page_article.jsx';
import { withRouter } from 'react-router';
const config= require('../../config.json')
let imgStub= require('../assets/img/stub.png')
require('./App.sass')

class App extends React.Component{
	constructor(props){
		super(props);
		// Заглушка
		window.imgStub= imgStub;
		// При инициализации устанавливаем правильный url и window.currentCity
		let { location, history }= this.props;
		if(location.pathname == '/'){
			window.currentCity= config.baseCity;
			history.push(config.baseCity);
		} else {
			let partUrl= location.pathname.split('/');
			window.currentCity= partUrl[1];
		}
	}
	
	render(){
		return(
			<div className="app">
				<Header />
					<Switch>
						<Route path="/:city" component={Page_listEvents} exact/>
						<Route path="/:city/events" component={Page_listEvents} exact/>
						<Route path="/:city/event/id/:id" component={Page_article} exact/>
					</Switch>
				<Footer />
			</div>
		)
	}
}

export default withRouter(App);