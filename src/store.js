// state lives in the store -- is immutable
// as soon as the store receives an action it triggers a reducer
// the reducer returns the next state
import {
  createStore, // function for creating a store
  applyMiddleware, // used to make asynchronous calls to backend
  combineReducers // allows you to combine reducers
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'; // make asynchronous calls to backend

// importing my reducers
import entries from './reducers/entries'
import entryFormData from './reducers/entryFormData'

//reducer is a function that runs that returns the state of what you want
//A store is not a class. It's just an object with a few methods on it. To create it,
//pass your root reducing function to createStore.
 const reducers = combineReducers({
   entries,
   entryFormData
 });
 const middleware = [thunk]; // as an array in case we want to add more

//creating the store !
 export default createStore( //takes reducer as first arg
   reducers, composeWithDevTools(applyMiddleware(...middleware))
   //window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUXDEVTOOLS_EXTENSION_(),// lets redux store access thunk
 );
