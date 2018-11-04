// ** Action Creators **

export const updateEntryFormData = entryFormData => {
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
