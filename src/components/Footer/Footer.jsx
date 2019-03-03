import React from 'react';

class Footer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		let now = new Date();
		return(
			<div className="Footer">
				<div className="container">
					©{ now.getFullYear() }
				</div>
			</div>
		)
	}
}

export default Footer;