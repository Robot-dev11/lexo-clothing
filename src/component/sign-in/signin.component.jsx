import React from 'react';

import FormInput from '../form-input/form-input.component';
import './sigin.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email : '', password : ''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name] : value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit}> 
                    <FormInput label='email' name='email' type='email' value={this.state.email} handleChange = {this.handleChange} required />
                    <FormInput label='password' name='password' type='password' value={this.state.password} handleChange = {this.handleChange} required />
                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;