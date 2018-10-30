import React from 'react';
import EntryCard from '../components/EntryCard';

const Entries = (props) => (
  <div className="EntriesContainer">
    <h3>Entries</h3>
    { props.entries.map(entry => <EntryCard key={entry.id} entry={entry}/>)  }
  </div>
)

export default Entries;
