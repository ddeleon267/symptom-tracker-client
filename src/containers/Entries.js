import React, { Component } from 'react';
import { connect } from 'react-redux';

import EntryCard from '../components/EntryCard';
import EntryForm from './EntryForm';
import { getEntries, getEntry } from '../actions/entries'


class Entries extends Component {

  componentDidMount() {
    this.props.getEntries()
  }

  handleOnClick = (event) => {
    // changed to an achor tag below but had it as a button before
    console.log(this)
  }


  render() {
    return (
      <div className="EntriesContainer">
        <EntryForm />
        <h3>Entries</h3>
        { this.props.entries.map(entry => (
          <div>
            <EntryCard key={entry.id} entry={entry} />
            <a href={`/api/entries/${entry.id}`}>View this Entry</a>
            <button onClick={this.props.getEntry(entry)}>Click</button>
          </div>
        )
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    entries: state.entries
  })
}

export default connect(mapStateToProps, { getEntries, getEntry })(Entries);
