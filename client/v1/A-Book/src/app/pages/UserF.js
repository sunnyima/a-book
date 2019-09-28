import React, {Component} from 'react';
import axios from 'axios';
import UserFProfile from '../components/UserF';

export default class UserF extends Component {
	constructor(props){
		super(props);
		this.state = {
			user: null
		}
	}
	
	render(){
		return(
		<div>
			{this.state.user && <UserFProfile {...this.state.user} />}
		</div>
		)
	}
	componentDidMount(){
		axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userFId}`).then(response =>{
			this.setState({user: response.data});
		})
	}
}