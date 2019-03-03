import React from 'react';

class BtnToggle extends React.Component{
	constructor(props){
		super(props);
		this.toggle= ()=>{
			this.props.toggle();
		}
	}

	componentWillUnmount(){
		this.props.clear();
	}
	
	render(){
		let { clsMod, text, data= false }= this.props;
		let status= data ? 'active' : '';
		clsMod= clsMod ? `BtnToggle_${clsMod}` : '';

		return(
			<div className={ `BtnToggle ${clsMod} ${status}` } onClick={ this.toggle }>
				{ text ? text : '' }
			</div>
		)
	}
}

export default BtnToggle;