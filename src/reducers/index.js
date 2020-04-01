import { combineReducers } from 'redux';
import { reducer as Form } from 'redux-form';

import HeaderNavbar from "./headernavbarReducer";

const rootReducer = combineReducers({
  Form, 
  HeaderNavbar
});

export default rootReducer;