let init= false;

let article= {
	event: (store= init, action) => {
		switch(action.type){
			case('Article.event_INIT'): {
				return action.payload;
			}
			case('Article.event_CLEAR'): {
				return init;
			}
			default:
				return store;
		}
	},
}

export default article;