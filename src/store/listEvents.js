let queryString = require('query-string');
let init= [];

let listEvents= {
	main: (store= init, action) => {
		switch(action.type){
			case('ListEvents.main_INIT'): {
				let { results, next, count }= action.payload;
				let parsed = queryString.parse(next);
				return { 
					list: results, 
					count: count,
					prevPage: parsed.page - 1,
					nextPage: parsed.page
				};
			}
			
			case('ListEvents.main_LOADING-DATA-NEXT-PAGE'): {
				let { results, next }= action.payload;
				let { prevPage, list, count }= store;
				let parsed = queryString.parse(next);
				return { 
					list: [...list, ...results], 
					count: count,
					prevPage: parsed.page > prevPage ? prevPage + 1 : prevPage,
					nextPage: parsed.page 
				};
			}

			case('ListEvents.main_CLEAR'): {
				return init;
			}
			
			default:
				return store;
		}
	},
}

export default listEvents;