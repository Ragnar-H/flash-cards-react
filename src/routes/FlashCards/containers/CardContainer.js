/**
 * Created by ragnarhardarson on 20/11/2016.
 */
import { connect } from 'react-redux'
import { toggleCard } from '../modules/cards'

/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */

import Cards from '../components/CardList'

/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */
const getCards = (cards, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return cards

    default:
      return cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (id) => {
      dispatch(toggleCard(id))
    }
  }
}

const mapStateToProps = (state) => ({
  cards: getCards(state.cards, state.visibilityFilter)
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

 import { createSelector } from 'reselect'
 const counter = (state) => state.counter
 const tripleCount = createSelector(counter, (count) => count * 3)
 const mapStateToProps = (state) => ({
 counter: tripleCount(state)
 })

 Selectors can compute derived data, allowing Redux to store the minimal possible state.
 Selectors are efficient. A selector is not recomputed unless one of its arguments change.
 Selectors are composable. They can be used as input to other selectors.
 https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapDispatchToProps)(Cards)