import { combineReducers } from 'redux';
import { reducer as Form } from 'redux-form';

import headerNavbar from "./headernavbarReducer";
import user from "./userReducer";


const rootReducer = combineReducers({
  Form, 
  headerNavbar,
  user,
});

export default rootReducer;