import axios from 'axios';

let nav= {
	getNav: (type)=>{
		return axios.get(`${window.baseUrlData}/nav/?type=${type}`)
	}
}

export default nav;