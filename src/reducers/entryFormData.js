const initialState = {
    cycle_number: 0,
    cycle_day: 0,
    notes: ""
}

export default (state = initialState, action) => {

  switch(action.type){
    case 'UPDATED_DATA':
      return action.entryFormData;

    case 'RESET_ENTRY_FORM':
      return initialState;

    default:
      return state;
  }
}
