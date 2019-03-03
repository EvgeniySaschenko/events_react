const config= require('../config.json');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import store from './store/index.js';
import App from './components/App.jsx';

window.baseUrlData= config.baseUrlData;

ReactDOM.render(
	<Provider store={ store }>
		<BrowserRouter history={ browserHistory }>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('container')
);