import React, { Component } from 'react';
import { connect } from 'react-redux'; // key for connecting component to redux
// react-redux is a Redux binding for React. It’s a small library for connecting Redux and React in
// an efficient way. What does react-redux’s connect do? Unsurprisingly it connects a React
// component with the Redux store.

import { updateEntryFormData } from '../actions/entryFormData';
import { createEntry } from '../actions/entries'

class EntryForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentEntryFormData = Object.assign({}, this.props.entryFormData, {
      [name]: value
    })
    this.props.updateEntryFormData(currentEntryFormData) //calling an action
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createEntry(this.props.entryFormData) //calling an action
  }

  render() {
    const { cycle_number, cycle_day, notes } = this.props.entryFormData;
    return (
      <div>Add an Entry
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="cycle_day">Cycle Day</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="cycle_day"
              value={cycle_day}
            />
          </div>
          <div>
            <label htmlFor="cycle_number">Cycle Number</label>
            <input
              type="number"
              onChange={this.handleOnChange}
              name="cycle_number"
              value={cycle_number}
            />
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="notes"
              value={notes}
            />
          </div>

          <button type="submit">Add Entry</button>
        </form>
      </div>
    )
  }
}

//connects part of the redux state (entryFormData) to the props of react component (entryform)
//so it has it available as props
const mapStateToProps = state => {
  // can place a debugger here
  return {
    entryFormData: state.entryFormData
  }
}

export default connect(mapStateToProps, {
  updateEntryFormData,
  createEntry
})(EntryForm);

// You will use connect with two or three arguments depending on the use case. The fundamental
// things to know are:
// the mapStateToProps function
// the mapDispatchToProps function
//
// What does mapStateToProps do in react-redux? mapStateToProps does exactly what its name suggests:
// it connects a part of the Redux state to the props of a React component. By doing so a connected
// React component will have access to the exact part of the store it needs.
//
// What does mapDispatchToProps do in react-redux? mapDispatchToProps does something similar, but
// for actions. mapDispatchToProps connects Redux actions to React props. This way a connected React
// component will be able to dispatch actions.

//mapStateToProps() method is executed with each change to the store's state.

//  whatever function we pass to the connect() function will be called each time the state changes,
//  and the first argument to that function, whatever it's name, will be the state of the store.

// We also know that connect() takes whatever the return value is of the mapStateToProps() function
// and passes it to the component that is in those last set of parentheses (in this case, App). Because normally, what we are doing is taking a part of the store's state and porting it to become props of the relevant component, we say that we are taking part of the state, and mapping them as props to the component, thus the name mapStateToProps.
