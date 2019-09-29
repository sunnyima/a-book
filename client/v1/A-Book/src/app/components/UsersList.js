import React, {Component} from 'react';
import axios from 'axios';
import User from './User';

export default class UsersList extends Component {
	constructor(props) {
		super(props);
		this.state ={
			users:[]
		}
	}
	
	render(){
		if(!this.state.users){
			return null;
		}
		
		const users = this.state.users.map(user => {
			return <User key={user.id} {...user} />
		})
		
		
		return(
		<ul className="grid">	
			{users}
		</ul>	
		)
	}
	
	componentDidMount(){		axios.get('http://jsonplaceholder.typicode.com/users/').then(response=>{
			this.setState({users: response.data})
		})
	}
}