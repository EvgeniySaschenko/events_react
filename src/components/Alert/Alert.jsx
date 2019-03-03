import React from 'react';

class Alert extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		let { clsMod, text }= this.props;
		clsMod= clsMod ? `Alert_${clsMod}` : '';

		return(
			<div className={ `Alert ${ clsMod }` }>
				{ text ? text : '' }
			</div>
		)
	}
}

export default Alert;