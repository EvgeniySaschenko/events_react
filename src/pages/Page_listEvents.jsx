import React from 'react';
import ListEvents_main from '../components/ListEvents/ListEvents_main.jsx';

class Page_listEvents extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="Page Page_listEvents">
				<div className="container"> 
					<ListEvents_main clsMod="main"/>
				 </div>
			</div>
		)
	}
}

export default Page_listEvents;