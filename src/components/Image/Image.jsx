import React from 'react';
import LazyLoad from 'react-lazy-load';

class Image extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			load: true
		}
		this.loadImg= (target, src)=>{
			this.setState({
				load: false
			})
		}
	}
	
	render(){
		let { cls, src }= this.props;
		let { load }= this.state;
		return(
			<div className={`Image ${load ? 'load' : ''}`}>
				<LazyLoad offsetVertical={600}>
					<img  className={ `${cls} Image__img ${load ? 'load' : ''}` } 
								src={ src } 
								onLoad={ (ev) => this.loadImg(ev.target, src) }/>
				</LazyLoad>
			</div>
		)
	}
}

export default Image;