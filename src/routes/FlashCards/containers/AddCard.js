/**
 * Created by ragnarhardarson on 20/11/2016.
 */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../modules/cards'

// noinspection Eslint
let AddCard = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addCard(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type='submit'>
          Add Card
        </button>
      </form>
    </div>
  )
}

AddCard.PropTypes = {
  dispatch: PropTypes.func.isRequired
}

AddCard = connect()(AddCard)

export default AddCard
