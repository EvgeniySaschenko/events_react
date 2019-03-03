import React from 'react';
let imgPreloder= require('../../assets/img/preloader.gif');
let imgStub= require('../../assets/img/stub.png');

class Image extends React.Component{
	constructor(props){
		super(props);
		this.loadImg= (target, src)=>{
			target.src= src;
		}
	}
	
	render(){
		let { cls, src }= this.props;
		return(
			<img 	className={ cls } 
						src={ imgPreloder } 
						onLoad={ (ev) => this.loadImg(ev.target, src) }/>
		)
	}
}

export default Image;