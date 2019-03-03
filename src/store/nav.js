let init= [];

let nav= {
	/** Header */
	hrader: (store= init, action) => {
		switch(action.type){
			case('Nav.header_INIT'): {
				let { payload }= action;
				return payload;
			}

			case('Nav.header_CLEAR'): {
				return init;
			}

			default:
				return store;
		}
	},
}

export default nav;