import React from 'react';

const Entries = (props) => (
  <div>
    <h3>Entries</h3>
    {props.entries.map(entry =>
      <div key={entry.id} className="EntryCard">
        <h3>Cycle: {entry.cycle_number}, Day: {entry.cycle_day}</h3>
        <p>Notes: {entry.notes}</p>
      </div>
    )}
  </div>
)

export default Entries;
