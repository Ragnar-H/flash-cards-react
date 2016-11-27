/**
 * Created by ragnarhardarson on 27/11/2016.
 */
import { ADD_CARD } from './cards'
// ------------------------------------
// Constants
// ------------------------------------

let nextSideId = 0
export const EDIT_MODE = 'EDIT_MODE'
export const ADD_SIDE = 'EDIT_SIDE'

// ------------------------------------
// Actions
// ------------------------------------
export const addSide = (text) => {
  return {
    type: ADD_CARD,
    id: nextSideId++,
    text,
    isEdit: false
  }
}

export const enterEditMode = (id) => {
  return {
    type: EDIT_MODE,
    id
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

export const side = (state = {}, action, text) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        id: nextSideId++,
        text: !text ? '' : text,
        isEdit: action.isEdit ? action.isEdit : false
      }

    case EDIT_MODE:
      if (state.front.id === action.id) {
        return Object.assign({}, state, {
          front: Object.assign({}, state.front, { isEdit : !state.front.isEdit })
        })
      }
      if (state.back.id === action.id) {
        return Object.assign({}, state, {
          back: Object.assign({}, state.back, { isEdit : !state.back.isEdit })
        })
      }

      return state

    default:
      return state
  }
}

export default side

