import React, { Component } from 'react';
import EntryCard from '../components/EntryCard';

class Entries extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {}
  // }

  render() {
    return (
      <div className="EntriesContainer">
        <h3>Entries</h3>
        { this.props.entries.map(entry => <EntryCard key={entry.id} entry={entry}/>)  }
      </div>
    )
  }
}

export default Entries;
