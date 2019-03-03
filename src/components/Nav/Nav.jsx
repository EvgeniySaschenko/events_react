import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.init();
	}

	componentWillUnmount(){
		this.props.clear();
	}

	render(){
		let { clsMod, data= [] }= this.props;
		clsMod= clsMod ? 'Nav_' + clsMod : '';
		return(
			<nav className={ `Nav ${ clsMod }` }>
				{
					data.map((e, i) => {
						return(
							<NavLink className="Nav__item" activeClassName="active" key={ i }
								to={`/${window.currentCity}${e.link}`}>
								<span className="Nav__name">{ e.name }</span>
							</NavLink>
						)
					})
				}
			</nav>
		)
	}
}

export default Nav;