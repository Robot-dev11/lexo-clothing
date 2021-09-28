import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from '@firebase/auth';
import './sigin.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('sign-in event', event);
        const {email, password} = this.state;

        try{
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                this.setState({email: '', password: ''});
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
        } catch (error){
            console.log(error)
        }
        
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name] : value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit = {this.handleSubmit}> 
                    <FormInput label='email' name='email' type='email' value={this.state.email} handleChange = {this.handleChange} required />
                    <FormInput label='password' name='password' type='password' value={this.state.password} handleChange = {this.handleChange} required />
                    <div className='buttons'>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;