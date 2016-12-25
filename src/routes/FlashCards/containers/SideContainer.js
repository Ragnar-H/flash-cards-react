/**
 * Created by ragnarhardarson on 27/11/2016.
 */
import React, { PropTypes } from 'react'
import EditButton from '../components/EditButton'
import { toggleEditMode } from '../modules/sides'
import { connect } from 'react-redux'

let Side = ({ id, dispatch, text, isEdit }) => {
  return (
    <div className='card-text'>
      <textarea
        className={isEdit ? 'edit' : 'display'}
        defaultValue={text}
        onClick={e => {
          e.stopPropagation()
          if (!isEdit) {
            dispatch(toggleEditMode(id))
          }
        }} />
      <EditButton className='edit-button' isEdit={isEdit} onClick={() => dispatch(toggleEditMode(id))} />
    </div>
  )
}

Side.propTypes = {
  text: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired
}

Side = connect()(Side)

export default Side
