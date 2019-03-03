import axios from 'axios';

let events= {
	getListEventsCity: (location, page= 1, is_free= false)=> {
		return axios.get(`${window.baseUrlData}/events/?location=${location}&page=${page}&is_free=${is_free}&type_query=events_city`)
	},
	getListEventsCityCountRecords: (location, countRecords= 5)=> {
		return axios.get(`${window.baseUrlData}/events/?location=${location}&page_size=${countRecords}&type_query=events_city_countRecords`)
	},
	getEventById: (id)=>{
		return axios.get(`${window.baseUrlData}/events/?id=${id}&type_query=event_id`)
	}
}

export default events;