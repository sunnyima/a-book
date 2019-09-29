import React, {Component} from 'react';
import {Link} from 'react-router';

export default class UserF extends Component {
	render(){
		return(
		<li className="card card-item">
			<div className="card-body">
				<h5 className="card-title"><Link to={`/users/${this.props.id}`}>
				{this.props.username}
				</Link></h5>
			
			<ul className="info-list"> 
				<li><p  className="card-text">{this.props.name}</p></li>
				<li><p  className="card-text">{this.props.email}</p></li>
				<li><p  className="card-text">{this.props.phone}</p></li>
				<li><p  className="card-text">{this.props.website}</p></li>
			</ul>
</div>
		</li>
		)
	}
}

