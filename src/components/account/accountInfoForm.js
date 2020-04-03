import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields'

import history from "../../history";

class AccountInfoForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className={`${className} account-info-form`}>
                <Field className='account-info-form__name' 
                    type='name' 
                    title='' 
                    placeholder='name.'
                    name='name' 
                    component={FormInput}/>
                <Field className='account-info-form__email' 
                    type='email' 
                    title='' 
                    placeholder='email.'
                    name='email' 
                    component={FormInput}/>

                <Field className='account-info-form__street-address' 
                    type='address' 
                    title='' 
                    placeholder='address.'
                    name='address' 
                    component={FormInput}/>
                <Field className='account-info-form__city' 
                    type='city' 
                    title='' 
                    placeholder='city.'
                    name='city' 
                    component={FormInput}/>

                <Field className='account-info-form__state' 
                    type='state' 
                    title='' 
                    placeholder='state.'
                    name='state' 
                    component={FormInput}/>
                <Field className='account-info-form__zipcode' 
                    type='zipcode' 
                    title='' 
                    placeholder='zipcode.'
                    name='zipcode' 
                    component={FormInput}/>


                {/* <Field className='sign-in-form__password' 
                    type='password' 
                    title='Password' 
                    placeholder='whatz yo password'
                    name='password' 
                    component={FormInput}/>
                <Field className='sign-in-form__login' 
                    onClick={() => history.push('/account')}
                    type='submit' 
                    title='login.'
                    name='login' 
                    component={FormButton}/> */}
            </form>
        )
    }
}

AccountInfoForm = reduxForm({
    form: 'AccountInfoForm'
})(AccountInfoForm);

export default AccountInfoForm; 