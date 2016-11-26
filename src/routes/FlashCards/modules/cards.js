/**
 * Created by ragnarhardarson on 20/11/2016.
 */
// ------------------------------------
// Constants
// ------------------------------------

let nextCardId = 0
export const ADD_CARD = 'ADD_CARD'
export const TOGGLE_CARD = 'TOGGLE_CARD'
export const EDIT_MODE = 'EDIT_MODE'

// ------------------------------------
// Actions
// ------------------------------------
export const addCard = (text) => {
  return {
    type: ADD_CARD,
    id: nextCardId++,
    text,
    backText: 'wonderful backside'
  }
}

export const toggleCard = (id) => {
  return {
    type: TOGGLE_CARD,
    id
  }
}

export const enterEditMode = (id) => {
  return {
    type: EDIT_MODE,
    id
  }
}

export const actions = {
  addCard,
  toggleCard
}

// ------------------------------------
// Reducer
// ------------------------------------

const card = (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        id: action.id,
        text: action.text,
        flipped: false,
        backText: action.backText
      }

    case TOGGLE_CARD:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        flipped: !state.flipped
      })

    case EDIT_MODE:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        isEdit: !state.isEdit
      })

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
