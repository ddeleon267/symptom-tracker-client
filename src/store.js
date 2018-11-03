import {
  createStore,
  applyMiddleware, // use to make asynchronous calls to backend
  combineReducers
} from 'redux';
import thunk from 'redux-thunk'; // make asynchronous calls to backend

import entries from './reducers/entries'

// let entries = entries(undefined, {type: '@@INIT'});
// console.log(entry)

//reducer is a function that runs that returns the state of what you want
 const reducers = combineReducers({
   entries: entries
 });
 const middleware = [thunk];

 export default createStore(
   reducers,
   window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUXDEVTOOLS_EXTENSION_(),
   applyMiddleware(...middleware)
 );
