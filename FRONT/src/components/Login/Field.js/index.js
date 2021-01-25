import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';


const Field = ({value, name, onChange, placeholder}) => {
    const inputId = `input-${name}`;
    const handleChange = (event) => {
        onChange(event.target.value, name);
      };
    return (
        <>
        <label 
        className="form__label" 
        htmlFor={inputId}
       >
           {placeholder}
       </label>

       <input 
       value = {value}
       onChange= {handleChange}
       id= {inputId}
       type='text'
       className="form__input" 
       placeholder={placeholder}
        name={name}
       />
       </>
    )
}

export default Field

Field.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };