import { combineReducers } from 'redux';
import contactsReducer from './contacts/contactsReduser';

export default combineReducers ({
  contactsState: contactsReducer 
});