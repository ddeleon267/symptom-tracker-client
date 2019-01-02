import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store.js'

import './index.css';
import App from './containers/App';
import EntryCard from './components/EntryCard';

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

// <Route exact path="/api/entries" component={EntryCard} />
