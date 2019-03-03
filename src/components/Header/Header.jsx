import React from 'react';
import { withRouter } from 'react-router';
import Logo_header from '../Logo/Logo_header.jsx';
import DropDownMenuLocation_main from '../DropDownMenuLocation/DropDownMenuLocation_main.jsx';
import Search from '../Search/Search.jsx';
import BtnToggle_listEventsFree from '../BtnToggle/BtnToggle_listEventsFree.jsx';

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<header className="Header">
				<div className="container">
					<div className="Header__row row">
						<div className="Header__col Header__col_1">
							<Logo_header clsMod="header" />
						</div>
						<div className="Header__col Header__col_2">
							<DropDownMenuLocation_main clsMod="header" />
							<BtnToggle_listEventsFree clsMod="listEventsFree" text="Только бесплатные" />
						</div>
						<div className="Header__col Header__col_3">
							<Search clsMod="header" />
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default withRouter(Header);