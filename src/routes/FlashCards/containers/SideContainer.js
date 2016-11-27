/**
 * Created by ragnarhardarson on 27/11/2016.
 */
import React, { PropTypes } from 'react'
import EditButton from '../components/EditButton'
import { enterEditMode } from '../modules/sides'
import { connect } from 'react-redux'

let Side = ({ id, dispatch, text, isEdit }) => {
  return (
    <div>
      <h1>{text}</h1>
      <EditButton isEdit={isEdit} onClick={() => dispatch(enterEditMode(id))} />
    </div>
  )
}

Side.propTypes = {
  text: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired
}

Side = connect()(Side)

export default Side
