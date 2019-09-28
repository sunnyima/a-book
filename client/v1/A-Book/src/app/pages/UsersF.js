import React, {Component} from 'react';
import UsersFList from '../components/UsersFList';

export default class UsersF extends Component {
	render(){
		return(	<>
			{
				(!this.props.children) ? (<UsersFList />) 
				:
				(this.props.children)
			}
		</>
		);
	}
}