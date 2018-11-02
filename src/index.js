import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store.js'

ReactDOM.render(
  <App store={store}/>,
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
