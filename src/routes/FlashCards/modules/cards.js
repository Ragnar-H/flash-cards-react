/**
 * Created by ragnarhardarson on 20/11/2016.
 */
import { addSide, side, TOGGLE_EDIT_MODE, FORCE_EDIT_MODE, UPDATE_TEXT } from './sides'
// ------------------------------------
// Constants
// ------------------------------------

let nextCardId = 0
export const ADD_CARD = 'ADD_CARD'
export const TOGGLE_CARD = 'TOGGLE_CARD'

// ------------------------------------
// Actions
// ------------------------------------
export const addCard = (text) => {
  return {
    type: ADD_CARD,
    id: nextCardId++,
    text,
    front : addSide(text),
    back : addSide('')
  }
}

export const toggleCard = (id) => {
  return {
    type: TOGGLE_CARD,
    id
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const card = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        id: action.id,
        flipped: false,
        front: side(undefined, action, action.text),
        back: side(undefined, action, '')
      }

    case TOGGLE_CARD:
      if (state.id !== action.id) {
        return state
      }

      // Are one of the sides in edit mode? Then we do not want to flip the card
      if (state.front.isEdit || state.back.isEdit) {
        return state
      }

      return Object.assign({}, state, {
        flipped: !state.flipped
      })

    case TOGGLE_EDIT_MODE:
      return side(state, action)

    case FORCE_EDIT_MODE:
      return side(state, action)

    case UPDATE_TEXT:
      return side(state, action)

    default:
      return state
  }
}

const cards = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        card(undefined, action),
        ...state
      ]

    case TOGGLE_CARD:
      return state.map(t =>
        card(t, action)
      )

    case TOGGLE_EDIT_MODE:
      return state.map(t =>
        card(t, action)
      )

    case FORCE_EDIT_MODE:
      return state.map(t =>
        card(t, action)
      )

    case UPDATE_TEXT:
      return state.map(t =>
        card(t, action)
      )
    default:
      return state
  }
}

export default cards
