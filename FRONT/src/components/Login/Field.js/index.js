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
        // "inputEmail"
       >
           {placeholder}
       </label>

       <input 
       value = {value}
       onChange= {handleChange}
       id= {inputId}
       // "InputEmail" 
       type='text'
       className="form__input" 
       placeholder={placeholder}
        name={name}
       />
     
       {/* <label className="form__label" htmlFor={inputId}
       // "inputPassword"
       >Password</label>
       <input id= {inputId}
       // "InputPassword" 
       className="form__input" type="password" name='passeword' placeholder="Saisissez un mot de passe"
       value={password}
       onChange={(event) => handleChange(event.target.value, name)}
       /> */}
       </>
    )
}

export default Field
