import { resetEntryForm } from './entryFormData'; //more actions
const API_URL = process.env.REACT_APP_API_URL;

const setEntries = entries => { // this is an action creator
  return {
    type: 'GET_ENTRIES_SUCCESS',
    entries //You can specify a payload as well.
  }
}

// ***** trying things!
const setEntry = entry => { //or just entryId ?
  return {
    type: 'GET_ENTRY_SUCCESS',
    entry //or just entryId ?
  }
}
//

// ***** trying things!
const removeEntry = entry => { //or just entryId ?
  return {
    type: 'DELETE_ENTRY_SUCCESS',
    entry  //or just entryId ?
  }
}
//

const addEntry = entry => { // this is an action creator
  return {
    type: 'CREATE_ENTRY_SUCCESS',
    entry
  }
}

export const getEntries = () => {
  return dispatch => {
    return fetch(`${API_URL}/entries`)
    .then(response => response.json())
    .then(entries => dispatch(setEntries(entries))) // what happens here?
    .catch(error => console.log(error));
  }
}

// ***** trying things!
export const getEntry = (entry) => {
  //gets here
  return dispatch => {
    return fetch(`${API_URL}/entries/${entry.id}`)
    .then(response => response.json())
    .then(entry => dispatch(setEntry(entry))) //breaks here
    .catch(error => console.log(error));
  }
}
//

// ***** trying things!
export const deleteEntry = (entry) => {
  return dispatch => {
    return fetch(`${API_URL}/entries/${entry.id}`)
    .then(response => response.json())
    .then(entry => dispatch(deleteEntry(entry)))
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
        dispatch(addEntry(entry))  // dispatching one of the actions above
        dispatch(resetEntryForm()) // dispatching one the imported actions
      })
      .catch(error => console.log(error));
  }
}
