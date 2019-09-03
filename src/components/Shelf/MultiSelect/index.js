import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { updateSelect } from '../../../services/multiselect/actions'

import Select from 'react-select';
import tagOptions from './data/sprayartnyc-tags.json'

const MultiSelect = ({ updateSelect, select }) => {
  const handleChange = (selectedOption) => {
    console.log(selectedOption)
    updateSelect(selectedOption)
  }
  return (
    <div>
    {console.log(tagOptions)}
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
  updateSelect: PropTypes.func.isRequired,
  select: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  select: state.sort.select
})

export default connect(
  mapStateToProps,
  { updateSelect }
)(MultiSelect)