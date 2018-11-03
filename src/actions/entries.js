const API_URL = process.env.REACT_APP_API_URL;

// Action Creators (functions that actually go to our reducer)
const setEntries = entries => {
  return {
    type: 'GET_ENTRIES_SUCCESS',
    entries
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
