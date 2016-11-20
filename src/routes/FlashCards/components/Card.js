/**
 * Created by ragnarhardarson on 20/11/2016.
 */
import React, {PropTypes} from 'react'

const Card = ({ onClick, flipped, text}) => (
  <div
    onClick={onClick}
    style={{
      color: flipped? 'green' : 'red'
    }}
    >
    {text}
    </div>
)

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Card
