import React from 'react';
let imgPreloder= require('../../assets/img/preloader.gif');

class PreloaderBlock extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="PreloaderBlock">
				<img src={ imgPreloder } alt="preloader"/>
			</div>
		)
	}
}

export default PreloaderBlock;