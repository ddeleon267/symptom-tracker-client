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
    this.props.updateEntryFormData(currentEntryFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createEntry(this.props.entryFormData)
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

const mapStateToProps = state => {
  return {
    entryFormData: state.entryFormData
  }
}

export default connect(mapStateToProps, {
  updateEntryFormData,
  createEntry
})(EntryForm);
