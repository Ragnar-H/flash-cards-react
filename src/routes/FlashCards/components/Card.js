/**
 * Created by ragnarhardarson on 20/11/2016.
 */
import React, {PropTypes} from 'react'
import {Motion, spring, presets} from 'react-motion'
import './Card.scss'

const frontStyles = function(idx){

}

const getStyles = function(flipped){
  if(flipped){
    return {
      z: spring(0, {stiffness: 60, damping: 45}),
      front: spring(0, {stiffness: 60, damping: 45}),
      back: spring(180, {stiffness: 60, damping: 45}),
      scale: spring(0.7, {stiffness: 60, damping: 45})
    }
  }
  else{
    return{
      z: spring(200, {stiffness: 60, damping: 45}),
      front: spring(180, {stiffness: 60, damping: 45}),
      back: spring(360, {stiffness: 60, damping: 45}),
      scale: spring(1.4, {stiffness: 60, damping: 45})
    }
  }
}

const getInitialStyles = function () {
  return {
    z: 0,
    front: 0,
    back: 180,
    scale: 0.7
  }
}

const getFlippedStyles = function () {
  return {
    z: spring(200, {stiffness: 60, damping: 45}),
    front: spring(180, {stiffness: 60, damping: 45}),
    back: spring(360, {stiffness: 60, damping: 45}),
    scale: spring(1.4, {stiffness: 60, damping: 45})
  };
}

const Card = ({onClick, flipped, text}) => (
  <Motion
    defaultStyle={getInitialStyles()}
    style={getStyles(flipped)}>{value=>
    <div className="card-component"
         onClick={onClick}
         style={{
           color: flipped ? 'green' : 'red'
         }}
    >
      <div className="front"
           style={{
             transform: `translateZ(-${value.z}px)
              rotateX(${value.front}deg)
               scale(${value.scale})`
           }}>
        {text}
      </div>
      <div className="back"
           style={{
             transform: `translateZ(-${value.z}px)
              rotateX(${value.back}deg)
               scale(${value.scale})`
           }}>
        <h1>The back</h1>
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
