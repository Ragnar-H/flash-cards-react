/**
 * Created by ragnarhardarson on 20/11/2016.
 */
import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import Side from '../containers/SideContainer'
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
    scale: 0.1
  }
}

const Card = ({ onClick, flipped, front, back }) => (
  <Motion
    defaultStyle={getInitialStyles()}
    style={getStyles(flipped)}>{value =>
      <div
        className='card-component'
        onClick={onClick}
      >
        <div
          className='front' style={{
            transform: `translateZ(-${value.z}px)
            rotateY(${value.front}deg)
            scale(${value.scale})`
          }}>
          {this}
          <Side {...front} />
        </div>
        <div
          className='back'
          style={{
            transform: `translateZ(-${value.z}px)
            rotateY(${value.back}deg)
            scale(${value.scale})`
          }}
        >
          <Side {...back} />
        </div>
      </div>
    }
  </Motion>
)

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired
}

export default Card
