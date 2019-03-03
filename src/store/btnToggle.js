let init= false;

let btnToggle= {
	listEventsFree: (store= init, action) => {
		switch(action.type){
			case('BtnToggle.listEventsFree_TOGGLE'): {
				store= store ? false : true;
				return store;
			}
			case('BtnToggle.listEventsFree_CLEAR'): {
				return init;
			}
			default:
				return store;
		}
	},
}

export default btnToggle;