import axios from 'axios';

let cities= {
	getCities: ()=> {
		return axios.get(`${window.baseUrlData}/locations`)
	}
}

export default cities;