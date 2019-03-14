export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ENTRIES_SUCCESS':
      console.log(action)
      return action.entries;

    case 'GET_ENTRY_SUCCESS': // testing
      debugger
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
