import React from 'react';
import { Link } from 'react-router-dom';

class DropDownMenuLocation extends React.Component{
	constructor(props) {
		super(props);
		this.changeCity= (slug, name)=>{
			if(slug !== window.currentCity){
				window.currentCity= slug;
				this.props.changeCity(name, slug);
			}
		}
	}

	componentDidMount(){
		this.props.init(window.currentCity);
	}

	render(){
		let { clsMod, data, location }= this.props;
		let partUrl= location.pathname.split('/');

		clsMod= clsMod ? `DropDownMenuLocation_${clsMod}` : '';

		return(
			<div className={`DropDownMenuLocation ${clsMod}`}>
				<button className="DropDownMenuLocation__btn"> 
					<i className="DropDownMenuLocation__btn-icon fa fa-map-marker"></i>
					{ data.currentName } 
				</button>
				<ul className="DropDownMenuLocation__list">
					{
						data.list.map((e, i)=>{
							return(
							<li className="DropDownMenuLocation__list-item" key={i} onClick={ this.changeCity.bind(this, e.link, e.name) }>
								<Link to={`/${e.link}`} className="DropDownMenuLocation__list-link">{ e.name }</Link>
							</li>)
						})
					}
				</ul>
			</div>
		)
	}
}

export default DropDownMenuLocation;