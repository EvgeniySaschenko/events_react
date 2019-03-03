import React from 'react';
import Article_event from '../components/Article/Article_event.jsx';
import Sidebar_article from '../components/Sidebar/Sidebar_article.jsx';


class Page_article extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="Page Page_article">
				<div className="container"> 
					<div className="Page__row">
						<div className="Page__col Page__col_content">
							<Article_event clsMod="event" />
						</div>
						<div className="Page__col Page__col_sidebar">
							<Sidebar_article/>
						</div>
					</div>
				 </div>
			</div>
		)
	}
}

export default Page_article;