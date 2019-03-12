import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'; // make asynchronous calls to backend

import entries from './reducers/entries'
import entryFormData from './reducers/entryFormData'

 const reducers = combineReducers({
   entries,
   entryFormData
 });
 const middleware = [thunk]; // as an array in case we want to add more

//creating the store !
 export default createStore( 
   reducers, composeWithDevTools(applyMiddleware(...middleware))
   //window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUXDEVTOOLS_EXTENSION_(),// lets redux store access thunk
 );
