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
      <textarea className={isEdit ? 'edit' : 'display'} defaultValue={text} onClick={e => {
        e.stopPropagation()
        dispatch(enterEditMode(id))
      }} />
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
