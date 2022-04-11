import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

  const [inputValue, setInputValue] = useState('');

  const handelInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if ( inputValue.trim().length > 2) {
      setCategories( cats => [ inputValue, ...cats]);
      setInputValue('');
    }
  };
  
  return (
    
    <form onSubmit= { handelSubmit } >
      <input 
        type="text"
        value= { inputValue }
        onChange= { handelInputChange }
      />
    </form>
  )

}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
