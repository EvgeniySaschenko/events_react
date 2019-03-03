let init= [];

let search= (store= init, action) => {
	switch(action.type){
		case('Search_LIVE-SEARCH'): {
			let { results }= action.payload;
			return results;
		}

		case('Search_CLEAR'): {
			return init;
		}
		
		default:
			return store;
	}
}

export default search;