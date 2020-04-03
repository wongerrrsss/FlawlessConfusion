import React, { Component } from 'react';

import PageTitle from '../pageTitle'
import AccountInfoForm from './accountInfoForm'

class AccountInformation extends Component {

    onSubmit = (fields) => {
        console.log(fields)
    }

    render() {
        return (
            <div className='account-info'>
                <PageTitle className='account-info' title='your account.' />
                <AccountInfoForm onSubmit={this.onSubmit} className='account-info__form' />
            </div>
        )
    }
}

export default AccountInformation; 