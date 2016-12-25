/**
 * Created by ragnarhardarson on 20/11/2016.
 */
import React, { PropTypes } from 'react'
import Card from './Card'
import AddCard from '../containers/AddCard'

const CardList = ({ cards, onCardClick, onEditClick }) => (
  <div className='card-list'>
    <AddCard />
    <div className='card-container'>
      {cards.map((card, idx) =>
        <Card
          idx={idx}
          key={card.id}
          {...card}
          onClick={() => onCardClick(card.id)}
      />
    )}
    </div>
  </div>
)

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    front: PropTypes.object.isRequired,
    back: PropTypes.object.isRequired
  }).isRequired).isRequired,
  onCardClick: PropTypes.func.isRequired
}

export default CardList
