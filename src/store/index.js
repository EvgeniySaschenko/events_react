import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import nav from './nav';
import listEvents from './listEvents';
import dropDownMenuLocation from './dropDownMenuLocation';
import btnToggle from './btnToggle';
import article from './article';
import listTeaser from './listTeaser';
import search from './search';


let reducers= combineReducers({
	routing: routerReducer,
	nav_header: nav.hrader,
	listEvents_main: listEvents.main,
	dropDownMenuLocation_main: dropDownMenuLocation.main,
	btnToggle_listEventsFree: btnToggle.listEventsFree,
	article_event: article.event,
	listTeaser_sidebar: listTeaser.sidebar,
	search: search
});

let store= createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;