import React from 'react';

import './signin-and-signup.styles.scss';
import SignIn from '../../component/sign-in/signin.component';
import SignUp from '../../component/sign-up/sign-up.component';

const SignInSignUp = () => (
    <div className='signin-signup'><SignIn />
    <SignUp />
    </div>
)

export default SignInSignUp;