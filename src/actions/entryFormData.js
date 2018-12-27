// ** Action Creators **

export const updateEntryFormData = entryFormData => { //action creator
  return {
    type: 'UPDATED_DATA',
    entryFormData
  }
}

export const resetEntryForm = () => {
  return {
    type: 'RESET_ENTRY_FORM'
  }
}
