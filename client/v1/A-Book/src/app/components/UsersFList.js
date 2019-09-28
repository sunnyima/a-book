import React, {Component} from 'react';
import axios from 'axios';
import UserF from './UserF';

export default class UsersFList extends Component {
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
			return <UserF key={user.id} {...user} />
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