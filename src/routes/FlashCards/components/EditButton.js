/**
 * Created by ragnarhardarson on 26/11/2016.
 */
import React, { PropTypes } from 'react'

const EditButton = ({ onClick, isEdit }) => (
  <button type='button' className='edit-button' onClick={e => {
    e.stopPropagation()
    console.log('clicking button')
    onClick()
  }}>
    { isEdit ? 'Done' : 'Edit'}
  </button>
)

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
}

export default EditButton
