//could move this to components folder but would need to adjust imports
import { BrowserRouter as Router, Route, Switch /*NavLink*/ } from 'react-router-dom';
import React, { Component } from 'react'; // destructure, grab component
import './App.css'
import Entries from './Entries'
import Navbar from '../components/Navbar'

class App extends Component {
  render() {
    // console.log(this.state)
    // debugger;
    return (
      <Router>
      <div className="App">
      <Navbar />
        <Switch>
           <Route exact path = "/api/entries" component={Entries}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App;
