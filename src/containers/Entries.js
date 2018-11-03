import React, { Component } from 'react';
import { connect } from 'react-redux';

import EntryCard from '../components/EntryCard';
import EntryForm from './EntryForm';
import { getEntries } from '../actions/entries'


class Entries extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {}
  // }

  componentDidMount() {
    this.props.getEntries()
    // this.props.dispatch({
    //   type: 'GET_ENTRIES_SUCCESS',
    //   entries: [{ cycle_number: 5, cycle_day: 5, notes: "Testing."
    //     }]
    // })
  }

  render() {
    return (
      <div className="EntriesContainer">
        <h3>Entries</h3>
        { this.props.entries.map(entry => <EntryCard key={entry.id} entry={entry}/>)  }
        <EntryForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    entries: state.entries
  })
}

export default connect(mapStateToProps, { getEntries })(Entries);
