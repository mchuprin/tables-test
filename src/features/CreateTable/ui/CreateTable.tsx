import { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';

import { addTable } from '../model/tableSlice';

enum FormDataIndex {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
}

const FieldNames = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THIRD: 'THIRD',
  FOURTH: 'FOURTH',
} as const;

function CreateTable() {
  const [formData, setFormData] = useState(['', '', '', '']);
  const [isEnabledModal, setIsEnabledModal] = useState(false);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    const updatedFormData = [...formData];
    updatedFormData[FormDataIndex[name]] = value;
    setFormData(updatedFormData);
  };

  const onSubmit = event => {
    event.preventDefault();
    dispatch(addTable(formData));
    setIsEnabledModal(false);
    setFormData(['', '', '', '']);
  };

  return (
    <>
      <button onClick={() => setIsEnabledModal(true)}>Create table</button>

      {isEnabledModal && (
        <div className='create-table__modal-overlay'>
          <form
            name='create-table-form'
            className='create-table__modal-content'
            onSubmit={onSubmit}
          >
            <input
              form='create-table-form'
              type='text'
              name={FieldNames.FIRST}
              value={formData[FormDataIndex.FIRST]}
              placeholder='First column'
              required
              onChange={handleChange}
            />
            <input
              form='create-table-form'
              type='text'
              name={FieldNames.SECOND}
              value={formData[FormDataIndex.SECOND]}
              placeholder='Second column'
              required
              onChange={handleChange}
            />
            <input
              form='create-table-form'
              type='text'
              name={FieldNames.THIRD}
              value={formData[FormDataIndex.THIRD]}
              placeholder='Third column'
              required
              onChange={handleChange}
            />
            <select
              name={FieldNames.FOURTH}
              form='create-table-form'
              value={formData[FormDataIndex.FOURTH]}
              onChange={handleChange}
              required
            >
              <option value=''>Select...</option>
              <option value='Country'>Country</option>
              <option value='City'>City</option>
              <option value='Street'>Street</option>
              <option value='Home'>Home</option>
            </select>
            <button type='submit'>Add</button>
          </form>
        </div>
      )}
    </>
  );
}

export default CreateTable;
