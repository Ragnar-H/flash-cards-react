/**
 * Created by ragnarhardarson on 20/11/2016.
 */
import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import './Card.scss'

const ANIMATION_OPTIONS = { stiffness: 60, damping: 15 }

const getStyles = function (flipped) {
  if (!flipped) {
    return {
      z: spring(0, ANIMATION_OPTIONS),
      front: spring(0, ANIMATION_OPTIONS),
      back: spring(180, ANIMATION_OPTIONS),
      scale: spring(1.0, ANIMATION_OPTIONS)
    }
  } else {
    return {
      z: spring(200, ANIMATION_OPTIONS),
      front: spring(180, ANIMATION_OPTIONS),
      back: spring(360, ANIMATION_OPTIONS),
      scale: spring(1.4, ANIMATION_OPTIONS)
    }
  }
}

const getInitialStyles = function () {
  return {
    z: 0,
    front: 0,
    back: 180,
    scale: 1
  }
}

const Card = ({ onClick, flipped, text }) => (
  <Motion
    defaultStyle={getInitialStyles()}
    style={getStyles(flipped)}>{value =>
      <div
        className='card-component'
        onClick={onClick}
      >
        <div
          className='front'
          style={{
            transform: `translateZ(-${value.z}px)
            rotateX(${value.front}deg)
            scale(${value.scale})`
          }}>
          <h1>{text}</h1>
        </div>
        <div
          className='back'
          style={{
            transform: `translateZ(-${value.z}px)
            rotateX(${value.back}deg)
            scale(${value.scale})`
          }}>
        </div>
      </div>
    }
  </Motion>
)

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Card
