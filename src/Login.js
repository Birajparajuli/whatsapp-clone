import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';


function Login() {
    const signIn =()=>{
        auth.signInWithPopup(provider).
        then((result)=>console.log(result))
        .catch((error)=>alert(error.message));
    }
    return (
        <div className="Login">
            <div className="login__container">
                <img src="http://3.bp.blogspot.com/-2fVvKtxqwB0/VUXkWMb--kI/AAAAAAAACI8/ANNIWneBF2Y/s1600/Whatsapp-logo-vector.png"/>
            
            <div className="login__text">
                <h1>Sign into WhatsApp Clone</h1>
            </div>
            <Button type ="submit" onClick={signIn}>Sign in With Google</Button>
            </div>
        </div>
    )
}

export default Login
