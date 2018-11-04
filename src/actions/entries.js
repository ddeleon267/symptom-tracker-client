import { resetEntryForm } from './entryFormData';

const API_URL = process.env.REACT_APP_API_URL;
// Action Creators (functions that actually go to our reducer)
const setEntries = entries => {
  return {
    type: 'GET_ENTRIES_SUCCESS',
    entries
  }
}

const addEntry = entry => {
  return {
    type: 'CREATE_ENTRY_SUCCESS',
    entry
  }
}

// Async Actions
export const getEntries = () => {
  return dispatch => {
    return fetch(`${API_URL}/entries`)
    .then(response => response.json())
    .then(entries => dispatch(setEntries(entries)))
    .catch(error => console.log(error));
  }
}

export const createEntry = entry => {
  return dispatch => {
    return fetch(`${API_URL}/entries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({entry: entry})
    })
      .then(response => response.json())
      .then(entry => {
        dispatch(addEntry(entry))
        dispatch(resetEntryForm())
      })
      .catch(error => console.log(error));
  }
}
