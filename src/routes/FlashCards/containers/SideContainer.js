/**
 * Created by ragnarhardarson on 27/11/2016.
 */
import React, { PropTypes } from 'react'
import EditButton from '../components/EditButton'
import { toggleEditMode, updateText } from '../modules/sides'
import { connect } from 'react-redux'
import Textarea from 'react-textarea-autosize'

let Side = ({ id, dispatch, text, isEdit }) => {
  let input = text

  return (
    <div className='card-text'>
      <Textarea
        className={isEdit ? 'edit' : 'display'}
        defaultValue={text}
        ref={node => {
          input = node
        }}
        onClick={e => {
          e.stopPropagation()
          if (!isEdit) {
            dispatch(toggleEditMode(id))
          }
        }} />
      <EditButton className='edit-button' isEdit={isEdit}
        onClick={() => {
          dispatch(toggleEditMode(id))
          dispatch(updateText(id, input.value))
        }} />
    </div>
  )
}

Side.propTypes = {
  text: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired
}

Side = connect()(Side)

export default Side
