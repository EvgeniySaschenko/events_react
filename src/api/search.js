import axios from 'axios';

let search= {
	getLiveSearch: (city, text, countRecords= 10)=> {
		return axios.get(`${window.baseUrlData}/search/?text=${text}&page_size=${countRecords}&location=${city}`)
	}
}

export default search;