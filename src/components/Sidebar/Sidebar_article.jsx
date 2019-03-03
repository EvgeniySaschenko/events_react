import React from 'react';
import ListTeaser_sidebar from '../ListTeaser/ListTeaser_sidebar.jsx'

class Sidebar_article extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		let { clsMod }= this.props;
		clsMod= clsMod ? `Sidebar_${clsMod}` : '';
		return(
			<aside className={ `Sidebar ${clsMod}` }>
				<ListTeaser_sidebar title="События в городе" />
			</aside>
		)
	}
}

export default Sidebar_article;