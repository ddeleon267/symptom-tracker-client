export default (state = [], action) => {
  console.log(action.type)
  switch(action.type) {
    case 'GET_ENTRIES_SUCCESS':
      console.log(action)
      return action.entries;

    default:
      return state;
  }
}
