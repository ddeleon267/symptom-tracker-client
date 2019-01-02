import React from 'react';
import { Link } from 'react-router-dom';

const EntryCard = ({ entry }) => (
  <div key={entry.id} className="EntryCard">
    <h3>Cycle: {entry.cycle_number}, Day: {entry.cycle_day}</h3>
    <p>Notes: {entry.notes}</p>
  </div>
)

export default EntryCard;
