/**
 * Created by ragnarhardarson on 27/11/2016.
 */
import { ADD_CARD } from './cards'
// ------------------------------------
// Constants
// ------------------------------------

let nextSideId = 0
export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE'
export const FORCE_EDIT_MODE = 'FORCE_EDIT_MODE'
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

export const toggleEditMode = (id) => {
  return {
    type: TOGGLE_EDIT_MODE,
    id
  }
}

export const forceEditMode = (id, forceState) => {
  return {
    type: FORCE_EDIT_MODE,
    id,
    forceState
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

    case FORCE_EDIT_MODE:
      if (state.front.id === action.id) {
        return Object.assign({}, state, {
          front: Object.assign({}, state.front, { isEdit : action.forceState })
        })
      }
      if (state.back.id === action.id) {
        return Object.assign({}, state, {
          back: Object.assign({}, state.back, { isEdit : action.forceState })
        })
      }

      return state

    case TOGGLE_EDIT_MODE:
      console.log('in teh switchy')
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

