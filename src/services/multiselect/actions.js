import { UPDATE_SELECT } from './actionTypes'

export const updateMultiSelect = multiselect => ({
  type: UPDATE_SELECT,
  payload: multiselect
})
