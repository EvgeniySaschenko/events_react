import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component{
	constructor(props){
		super(props);
		this.props= this.state;
	}

	render(){
		let { clsMod }= this.props;
		clsMod= clsMod ? 'Logo_' + clsMod : '';
		
		return(
			<Link to={`/${window.currentCity}`} className={ `Logo ${ clsMod }` }>
				<img src={ require('./logo.png') } className="Logo__img" alt="Logo" />
			</Link>
		)
	}
}

export default Logo;