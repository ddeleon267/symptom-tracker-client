import {
  createStore,
  applyMiddleware, // use to make asynchronous calls to backend
  combineReducers
} from 'redux';
import thunk from 'redux-thunk'; // make asynchronous calls to backend

const entriesReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_ENTRIES_SUCCESS':
      return action.entries;

    default:
      return state;
  }
}

// let entries = entriesReducer(undefined, {type: '@@INIT'});
// console.log(entry)

//reducer is a function that runs that returns the state of what you want
 const reducers = combineReducers({
   entries: entriesReducer
 });
 const middleware = [thunk];

 export default createStore(
   reducers,
   applyMiddleware(...middleware),
   window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUXDEVTOOLS_EXTENSION_()
 );
