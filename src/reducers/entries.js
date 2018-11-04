export default (state = [], action) => {
  console.log(action.type)
  switch(action.type) {
    case 'GET_ENTRIES_SUCCESS':
      console.log(action)
      return action.entries;

    case 'CREATE_ENTRY_SUCCESS':
      return state.concat(action.entry)
    default:
      return state;
  }
}
