import React, { Component } from 'react';

import SignInForm from './signinform';
import PageTitle from '../pageTitle'

import { connect } from "react-redux";
import * as actions from "../../actions";

class SignIn extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className="sign-in">
               <PageTitle className='sign-in__page-title' title='welcome back gorgeous!' />
               <SignInForm onSubmit={this.onSubmit} className="sign-in__form" />
            </div>
        )
    }
}

SignIn = connect(null, actions)(SignIn);

export default SignIn; 