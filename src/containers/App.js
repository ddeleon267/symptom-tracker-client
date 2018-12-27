//coult move this to components folder but would need to adjust imports

import React, { Component } from 'react'; // destructure, grab component
import './App.css'
import Entries from './Entries'
// import { getEntries } from '../actions/entries'

// const API_URL = process.env.REACT_APP_API_URL; //react app env key

// Class components should always call the base constructor with props.
class App extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     entries: []
  //   }
  // }
  // don't need this anymore!

  // componentDidMount() {
  //   fetch(`${API_URL}/entries`)
  //   .then(response => response.json())
  //   .then(entries => this.setState({ entries }))
  // }

  render() {
    // console.log(this.state)
    // debugger;
    return (
      <div className="App">
        App Container
        <Entries />
      </div>
    )
  }
}

export default App;
