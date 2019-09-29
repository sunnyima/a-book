import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Menu extends Component {
	render(){
		return(
				<div className="card-header">
					<ul className="nav nav-tabs card-header-tabs">
					{this.props.children}
					</ul>
				</div>
    	)
	}
}