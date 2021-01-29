import React from 'react';
// import Avatar from '../Header/Avatar';
import Button from '../Header/Button';
import Field from '../Login/Field';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import './style.scss';
const FormRegister = ({last_name,
   first_name, 
   adress, 
   zip_code, 
   city, 
   company_name, 
   shop_name, 
   registration_number, 
   email, 
   password, 
   changeField, 
   HandleRoleId,
   role_id,
   changeSelectField,
   subscriptionSubmit}) => {

   const { register, handleSubmit, errors } = useForm({
      shouldFocusError : true
   });

   return (
      <form className='register' onSubmit={handleSubmit(subscriptionSubmit)}>
         {/* <Avatar /> */}
         <h1 className="register-title">Inscription</h1>
         <fieldset className="register-sec-identite">
            <legend className="register-leg-identite">Identité</legend>
            <div className="register-form">
               <Field 
                  name="last_name"
                  value={last_name}
                  onChange={changeField}
                  placeholder="Nom"
                  type= 'text'
                  register= {register({
                     required: {value :true, message: 'ce champs est obligatoire'}, minLength: {value: 4, message: 'vous devez entrer au moins 4 caracteres'
                  }})}
                  />
                  {errors.last_name && <span> {errors.last_name.message} </span>}
                     <Field 
                  name="first_name"
                  value={first_name}
                  onChange={changeField}
                  placeholder="prenom"
                  type= 'text'
                  register= {register({
                     required: {value :true, message: 'ce champs est obligatoire'}, minLength: {value: 5, message: 'vous devez entrer au moins 5 caracteres'
                  }})}
                  />
               </div>
               {errors.first_name && <span> {errors.first_name.message} </span>}
               </fieldset>
               <fieldset className="register-sec-address">
             <legend className="register-leg-address">addresse</legend>
               <div className="register-form">
                     <Field 
                        name="adress"
                        value={adress}
                        onChange={changeField}
                        placeholder="adress"
                        type= 'text'
                        register= {register({
                           required: {value :true, message: 'ce champs est obligatoire'}, minLength: {value: 6, message: 'vous devez entrer au moins 6 caracteres'
                        }})}
                     />
               </div>
               {errors.adress && <span> {errors.adress.message} </span>}
               <div className="register-form">
               <Field 
                  name="zip_code"
                  value={zip_code}
                  onChange={changeField}
                  placeholder="code postal"
                  type="number"   
                  register= {register({
                     required: {value :true, message: 'ce champs est obligatoire'}
                  })} 
               />
            </div>
            {errors.zip_code && <span> {errors.zip_code.message} </span>}
            <div className="register-form">
               <Field 
                  name="city"
                  value={city}
                  onChange={changeField}
                  placeholder="ville"
                  type= 'text'
                  register= {register({
                     required: {value :true, message: 'ce champs est obligatoire'}
                  })} 
               />
               </div>
               {errors.city && <span> {errors.city.message} </span>}
         </fieldset>
            
         <label className="form__label"htmlFor="roleID"> cliquer si vous etes commercant</label>
         <input
         onChange={(event)=> {HandleRoleId(event.target.checked)}}
         id="roleID"
         type='checkbox'
         className="form__input"
         name='role_id'
         />
   { role_id === 3 && 
   <>        
         <fieldset className="register-sec-business">
            <legend className="register-leg-business">informations professionnelles</legend>
            <div className="register-form">  
               <div>
                  <label htmlFor="activity">Quelle est votre domaine d'activité:</label>
                  <select id="activity" onChange={(event)=> {changeSelectField(event.target.value);
                  console.log(event.target.value)}}  name="activity_id">
                     <option value="boulangerie">boulangerie</option>
                     <option value="boucherie">boucherie</option>
                     <option value="fleuriste">fleuriste</option>
                     <option value="fromagerie">fromagerie</option>
                     <option value="charcuterie">charcuterie</option>
                     <option value="garagiste">garagiste</option>
                     <option value="primeur">primeur</option>
                     <option value="coiffeur">coiffeur</option>
                     <option value="papeterie">papeterie</option>
                  </select>
               </div>
            <div>
               <Field 
                  name="company_name"
                  value={company_name}
                  onChange={changeField}
                  placeholder="societe"
                  type= 'text'     
               />
            </div>            
            <div className="register-form">
               <Field 
                  name="shop_name"
                  value={shop_name}
                  onChange={changeField}
                  placeholder="enseigne"
                  type= 'text'       
               />
            </div>
               <div className="register-form">
                  <Field 
                     name="registration_number"
                     value={registration_number}
                     onChange={changeField}
                     placeholder="siret"
                     type="text"         
                  />
               </div>
            </div>
         </fieldset>
   </>
   }
         <fieldset className="register-sec-security">
            <legend className="register-leg-security">securité</legend>
            <div className="register-form">
                  <Field 
               name="email"
               value={email}
               onChange={changeField}
               placeholder="email"
               type= 'email'
               register= {register({
                  required: {value :true, message: 'ce champs est obligatoire'}
               })} 
               />
            </div>
            {errors.email && <span> {errors.email.message} </span>}
            <div className="register-form">
                  <Field 
               name="password"
               value={password}
               onChange={changeField}
               placeholder="mot de passe"
               type= 'password'
               register= {register({
                  required: {value :true, message: 'ce champs est obligatoire'}
               })} 
               />
            </div>
            {errors.password && <span> {errors.password.message} </span>}
         </fieldset>
            <Button>Validez la création</Button>
      </form>
   )
};

export default FormRegister;
FormRegister.propTypes = {
   last_name: PropTypes.string.isRequired,
   first_name: PropTypes.string.isRequired,
   adress: PropTypes.string.isRequired,
   zip_code: PropTypes.string,
   city: PropTypes.string.isRequired,
   company_name: PropTypes.string.isRequired,
   shop_name: PropTypes.string.isRequired,
   // registration_number: PropTypes.number,
   email: PropTypes.string,
   password: PropTypes.string,
   changeField: PropTypes.func.isRequired,
   HandleRoleId: PropTypes.func.isRequired,
   role_id: PropTypes.number.isRequired,
   changeSelectField: PropTypes.func.isRequired,
   subscriptionSubmit: PropTypes.func.isRequired,
  
};
FormRegister.defaultProps = {
   // siret: 0,
   zip_code: '',
};