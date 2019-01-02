// reducers produce the state. The state is not something you create by hand.
// in Redux the state must return entirely from reducers.
// A reducer is just a Javascript function. A reducer takes two parameters: the
// current state and an action (more about actions soon).
// The third principle of Redux says that the state is immutable and cannot change in place.
// This is why the reducer must be pure. A pure function is one that returns the exact same
// output for the given input.

// There are two key points for avoiding mutations in Redux:
// Using concat(), slice(), and …spread for arrays
// Using Object.assign() and …spread for objects

// the reducer will grow as your app will become bigger. You can split a big reducer into
// separate functions and combine them with combineReducers

export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ENTRIES_SUCCESS':
      console.log(action)
      return action.entries;

    case 'GET_ENTRY_SUCCESS': // testing
      return action.entry; // no idea if this is gonna work

    case "DELETE_ENTRY_SUCCESS":
      // idx = state.indexOf(action.id);
      // return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'CREATE_ENTRY_SUCCESS':
      return state.concat(action.entry)
    default:
      return state;
  }
}
