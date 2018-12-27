import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// react-redux is a Redux binding for React. It’s a small library for connecting Redux
// and React in an efficient way.
// To start off connecting Redux with React we’re going to use Provider.
// Provider is an high order component coming from react-redux.
// P is a wrapper of a react component
// Using layman’s terms, Provider wraps up your React application and makes it aware of
// the entire Redux’s store.
// Why so? We saw that in Redux the store manages everything. React must talk to the store
// for accessing the state and dispatching actions.
// Provider wraps up your entire React application. Moreover it gets the store as a prop.
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// we want the store to look something like this
// const store = {
//    entries: [
//      {...}
//    ],
//    entryFormData: [
//      {
//        cycle_number: 0,
//        cycle_day: 0,
//        notes: ''
//      }
//    ],
//    currentEntry: {
//
//    }
// }
