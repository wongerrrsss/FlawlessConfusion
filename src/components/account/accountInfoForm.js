import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields'

import history from "../../history";

class AccountInfoForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email' 
                    type='email' 
                    title='Email' 
                    placeholder='whatz yo email'
                    name='email' 
                    component={FormInput}/>
                <Field className='sign-in-form__password' 
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
                    component={FormButton}/>
            </form>
        )
    }
}

AccountInfoForm = reduxForm({
    form: 'AccountInfoForm'
})(AccountInfoForm);

export default AccountInfoForm; 