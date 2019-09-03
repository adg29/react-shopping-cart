import React from 'react';
import Select from 'react-select';
import tagOptions from './data/sprayartnyc-tags.json';

export default () => (
  <Select
    defaultValue={[]}
    isMulti
    name="tags"
    options={tagOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);