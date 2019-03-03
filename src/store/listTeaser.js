let init= [];

let listTeaser= {
	sidebar: (store= init, action) => {
		switch(action.type){
			case('ListTeaser.sidebar_INIT'): {
				let { results, count }= action.payload;
				return { 
					list: results, 
					count: count
				};
			}
			
			case('ListTeaser.sidebar_CLEAR'): {
				return init;
			}
			
			default:
				return store;
		}
	},
}

export default listTeaser;