let init = {
	currentName: "",
	list: []
};

let dropDownMenuLocation = {
	main: (store = init, action) => {
		switch (action.type) {
			case ('DropDownMenuLocation.main_INIT'): {
				let { data, currentSlug } = action.payload;
				let currentName, list;
				list = data.map((e) => {
					e.link = e.slug;
					if (e.slug == currentSlug) {
						currentName = e.name;
					}
					return e;
				})

				store = {
					currentSlug: currentSlug,
					currentName: currentName,
					list: list
				}
				return store;
			}

			case ('DropDownMenuLocation.main_CHANGE-CITY'): {
				let { name, currentName, currentSlug } = action.payload;
				return { currentName: currentName, list: store.list, currentSlug: currentSlug };
			}

			default:
				return store;
		}
	},
}

export default dropDownMenuLocation;