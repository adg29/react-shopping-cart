import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateMultiSelect } from '../../../services/multiselect/actions'

import Select from 'react-select';
import tagOptions from './data/sprayartnyc-tags.json'

const MultiSelect = ({ updateMultiSelect }) => {
  const handleChange = (selectedOption) => {
    updateMultiSelect(selectedOption)
  }
  return (
    <div>
      <Select
        onChange={handleChange}
        isMulti
        name="tags"
        options={tagOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  )
}

MultiSelect.propTypes = {
  updateMultiSelect: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  multiselect: state.multiselect.tags
})

export default connect(
  mapStateToProps,
  { updateMultiSelect }
)(MultiSelect)