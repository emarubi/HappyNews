import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

const Field = ({ type, value, name, onChange, placeholder }) => {
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
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="form__input"
        placeholder={placeholder}
        name={name}
      />
    </>
  );
};

Field.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
};

export default Field;
