import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { FormInput, FormButton } from '../formFields'
import Details from "../details"

import history from "../../history";

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: 'sign up for cool stuff!',
                onClick: () => history.push("/signup")
            },
            {
                _id: 1,
                title: 'did you forget your email?',
                onClick: () => console.log("forgot email")
            },
            {
                _id: 2,
                title: 'did you forget your password?',
                onClick: () => console.log("forgot password")
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
                    onClick={() => console.log('lehhhgooo.')}
                    type='submit' 
                    title='login.'
                    name='login' 
                    component={FormButton}/>
                <Field className='sign-up-form__back' 
                    onClick={() => console.log('lehhhgooo baccckkk.')}
                    type='button' 
                    title='back.'
                    name='back'
                    short={true}
                    component={FormButton}/>
                    <Details className='sign-up-form__details' title="some helpful info." links={links}/>
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm; 