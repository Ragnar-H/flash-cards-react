/**
 * Created by ragnarhardarson on 20/11/2016.
 */
import React, { PropTypes } from 'react'
import Card from './Card'
import AddCard from '../containers/AddCard'

const CardList = ({ cards, onCardClick }) => (
  <div className='card-list'>
    <AddCard />
    {cards.map(card =>
      <Card
        key={card.id}
        {...card}
        onClick={() => onCardClick(card.id)}
      />
    )}
  </div>
)

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onCardClick: PropTypes.func.isRequired
}

export default CardList
