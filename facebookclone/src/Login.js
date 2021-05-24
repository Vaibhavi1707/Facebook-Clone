import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import actionTypes from "./Reducer";

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            // dispatch({
                // type: actionTypes.SET_USER,
                // user: result.user,
            // });
        }).catch((error) => alert(error.message));
    }

    return (
        <div className = "login">
            <div className = "login__logo">
                <img alt = ""
                    src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                />
            </div>
            <div className = "login__logo">
                <img alt = "" 
                    src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg"
                />
            </div>
            <Button type = "submit" onClick = {signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
