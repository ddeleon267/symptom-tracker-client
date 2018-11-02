import React, { Component } from 'react';
import './App.css'
import Entries from './Entries'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/entries`)
    .then(response => response.json())
    .then(entries => this.setState({ entries }))
  }

  render() {
    // console.log(this.state)
    debugger;
    return (
      <div className="App">
        App Container
        <Entries entries={this.state.entries}/>
      </div>
    )
  }
}

export default App;

// const entries = [
//   {
//     cycle_number: 1,
//     cycle_day: 10,
//     notes: "Felt less fatigued today."
//   },
//   {
//     cycle_number: 2,
//     cycle_day: 3,
//     notes: "Felt more positive and upbeat today."
//   }
// ]
// was using this to stub the data
