//The second principle of Redux says the only way to change the state is by sending a signal to the
//store.This signal is an action. “Dispatching an action” is the process of sending out a signal.

import { resetEntryForm } from './entryFormData'; //more actions

const API_URL = process.env.REACT_APP_API_URL;

// Action Creators (functions that actually go to our reducer)
// Every action needs a type property for describing how the state should change.
// It is a best pratice to wrap every action within a function. Such function is an action creator.
// Since strings are prone to typos and duplicates it’s better to have action types declared as constants.
// This approach helps avoiding errors that will be difficult to debug.
const setEntries = entries => { // this is an action creator
  return {
    type: 'GET_ENTRIES_SUCCESS',
    entries //You can specify a payload as well.
  }
}

// ***** trying things!
const setEntry = entry => {
  return {
    type: 'GET_ENTRY_SUCCESS',
    entry
  }
}
//

// ***** trying things!
const removeEntry = entry => {
  return {
    type: 'DELETE_ENTRY_SUCCESS',
    entry
  }
}
//

const addEntry = entry => { // this is an action creator
  return {
    type: 'CREATE_ENTRY_SUCCESS',
    entry
  }
}

// Async Actions
// Dispatching an action means notifying the store that we want to change the state.
// To change the state in Redux we need to dispatch an action. To dispatch an action you have
// to call the dispatch method.

export const getEntries = () => { // this is an action creator
  return dispatch => {
    return fetch(`${API_URL}/entries`)
    .then(response => response.json())
    .then(entries => dispatch(setEntries(entries))) // what happens here?
    .catch(error => console.log(error));
  }
}

// ***** trying things!
export const getEntry = (entry) => {
  return dispatch => {
    return fetch(`${API_URL}/entries/${entry.id}`)
    .then(response => response.json())
    .then(entry => dispatch(setEntry(entry)))
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
//

//We prefer wrapping our actions in a function, because oftentimes our actions have some parts
// that will need to change, and a function comes in handy.
export const createEntry = entry => { // this is an action creator
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
