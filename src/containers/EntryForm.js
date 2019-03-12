import React, { Component } from 'react';
import { connect } from 'react-redux';
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

// We also know that connect() takes whatever the return value is of the mapStateToProps() function
// and passes it to the component that is in those last set of parentheses (in this case, App).
// Because normally, what we are doing is taking a part of the store's state and porting it to
// become props of the relevant component, we say that we are taking part of the state, and mapping
// them as props to the component, thus the name mapStateToProps.
