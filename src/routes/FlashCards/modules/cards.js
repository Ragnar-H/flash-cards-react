/**
 * Created by ragnarhardarson on 20/11/2016.
 */
import { addSide, side, EDIT_MODE } from './sides'
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

      return Object.assign({}, state, {
        flipped: !state.flipped
      })

    case EDIT_MODE:
      return side(state, action)

    default:
      return state
  }
}

const cards = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        card(undefined, action)
      ]

    case TOGGLE_CARD:
      return state.map(t =>
        card(t, action)
      )

    case EDIT_MODE:
      return state.map(t =>
        card(t, action)
      )

    default:
      return state
  }
}

export default cards
