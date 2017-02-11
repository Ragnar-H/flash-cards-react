/**
 * Created by ragnarhardarson on 26/11/2016.
 */
import React, { PropTypes } from 'react'

const EditButton = ({ onClick, isEdit }) => (
  <a className='edit-button' onClick={e => {
    e.stopPropagation()
    onClick()
  }}>
    <i className={isEdit ? 'fa fa-check fa-lg' : 'fa fa-pencil-square-o fa-lg'} />
  </a>
)

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired
}

export default EditButton
