import React from 'react';
import Slider from "react-slick";
import Image from '../Image/Image.jsx';

class SliderSimple extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let { clsMod, data= [] }= this.props;
		clsMod= clsMod ? `SliderSimple_${clsMod}` : '';
		let settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return(
			<div className={ `SliderSimple ${clsMod}` } >
				<Slider {...settings}>
					{
						data.map((e, i)=>{
				
							return(
							<div className="SliderSimple__item" key={ i }>
								<div className="SliderSimple__box-img">
									<Image cls="SliderSimple__img" src={ e.image } />
								</div>
							</div>
							)

						})
					}
				</Slider>
			</div>
		)
	}
}

export default SliderSimple;