import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields'
import Details from "../details"

import history from "../../history";

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const info = [
            {
                _id: 0,
                title: 'at least 8 characters.'
            },
            {
                _id: 1,
                title: 'at least one number.'
            },
            {
                _id: 2,
                title: 'at least one symbol. '
            }
        ]
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className='sign-up-form__name' 
                    type='name' 
                    title='Whats your name' 
                    placeholder='put yo name'
                    name='name' 
                    component={FormInput}/>
                <Field className='sign-up-form__email' 
                    type='email' 
                    title='Email' 
                    placeholder='whatz yo email'
                    name='email' 
                    component={FormInput}/>
                <Field className='sign-up-form__password' 
                    type='password' 
                    title='Password' 
                    placeholder='whatz yo password'
                    name='password' 
                    component={FormInput}/>
                <Field className='sign-up-form__confirm-password' 
                    type='password' 
                    title='Confirm Password' 
                    placeholder='confirm yo password'
                    name='confirm' 
                    component={FormInput}/>
                <Field className='sign-up-form__login' 
                    onClick={() => history.push('/account')}
                    type='submit' 
                    title='lehhhgooo.'
                    name='login' 
                    component={FormButton}/>
                <Field className='sign-up-form__back' 
                    onClick={() => history.push('/signin')}
                    type='button' 
                    title='back.'
                    name='back'
                    short={true}
                    component={FormButton}/>
                    <Details className='sign-up-form__details' title="some stuff to know." info={info}/>
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm; 