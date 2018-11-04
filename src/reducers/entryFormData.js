export default (state = {
    cycle_number: 0,
    cycle_day: 0,
    notes: ""
}, action) => {

  switch(action.type){
    case 'UPDATED_DATA':
      return action.entryFormData

    default:
      return state;
  }
}
