import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
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

// Provider ensures that our entire React application can potentially access data from the store.
// Then connect(), allows us to specify which data we are listening to (through mapStateToProps),
// and which component we are providing the data.
import './index.css';
import App from './containers/App';
import EntryCard from './components/EntryCard';
import * as serviceWorker from './serviceWorker';
import store from './store.js'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
  </div>;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Navbar />
        <Route path="/" component={App} />
      </React.Fragment>
    </Router>
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
