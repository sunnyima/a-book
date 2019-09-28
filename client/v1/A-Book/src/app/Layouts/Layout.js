import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

export default class Layout extends React.Component{
	constructor(props){
		super();
		this.brand = "A-Book";
	}
	isActive(href){
		return window.location.pathname === href;
	}
	
	render(){
		return(
			<>
				<header className="header container">
					<p className="logo"><a  href="/" active = {this.isActive('/')}>{this.brand}</a></p>
				</header>
<main className="main">
	<div className="card text-center">
				<Menu>
				<MenuItem href="users" active = {this.isActive('/users')}>Мои контакты</MenuItem>
				<MenuItem href="usersF" active = {this.isActive('/usersF')}>Избранные</MenuItem>
				<MenuItem href="groups" active = {this.isActive('/groups')}>Группы</MenuItem>
				</Menu>
			<div className="card-body">
				{this.props.children}
			</div>
  	</div>
</main>
			<footer className="footer">
			<div className="footer-copyright">
				<p>© 2019 "A-Book"</p>
				<p>Все права защищены</p>
			</div>

			</footer>
			</>
		);
	}
}