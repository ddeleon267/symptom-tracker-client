import React, { Component } from 'react';
import { connect } from 'react-redux'; // key for connecting component to redux
// react-redux is a Redux binding for React. It’s a small library for connecting Redux and React in
// an efficient way. What does react-redux’s connect do? Unsurprisingly it connects a React
// component with the Redux store.

import EntryCard from '../components/EntryCard';
import EntryForm from './EntryForm';
import { getEntries } from '../actions/entries'


class Entries extends Component {

  componentDidMount() {
    this.props.getEntries()
  }

  render() {
    return (
      <div className="EntriesContainer">
        <EntryForm />
        <h3>Entries</h3>
        { this.props.entries.map(entry => (
          <EntryCard key={entry.id} entry={entry}/>)
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

//what's happening here?
// dispatch is automatically provided by connect if it is missing a second argument. T
export default connect(mapStateToProps, { getEntries })(Entries);
