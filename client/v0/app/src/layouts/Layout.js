import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import MenuItem from '../components/Menu/MenuItem';
import Main from '../pages/Main';
import Contacts from '../pages/Contacts';
import Contact from '../pages/Contact';



export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.brand = "A-Book Brand";
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return (
      <div>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.isActive('/')}>          
            Главная
          </MenuItem>
          <MenuItem href="/users" active={this.isActive('/contacts')}>
            Контакты
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Switch>                        
                <Route exact path="/"component={Main}/>              
                <Route exact path="/contacts"component={Contacts}/>
                <Route path="/contact/:contactId" component={Contact}/>
              </Switch>     
            </div>
          </div>
        </div>
        <footer className="card-footer text-center">
          &copy; 2019
        </footer>
      </div>
    );
  }
}