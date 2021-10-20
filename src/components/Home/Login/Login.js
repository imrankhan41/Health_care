import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./Login.css";
import initializeAuthentication from '../../../Firebase/firebase.init';
initializeAuthentication();
const Login = () => {
    const [user,setUser]=useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const[name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [error,setError]=useState('');
    const [password,setPassword]=useState('');
    const handleGoogleSignIn=()=>{
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const {displayName,photoURL,email} = result.user;
            const loggedUser ={
                name:displayName,
                photo:photoURL,
                email:email
            }
            setUser(loggedUser);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    const handleSignIn=e=>{
        e.preventDefault();
        if(! /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
            setError('Password must be6-16 character,one digit,one special character');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            setError('');
        })
        .catch(error=>{
            setError(error.message);
        });
        
      
    }
    const handleName=e=>{
        setName(e.target.value);
    }
    const handleEmail=e=>{
        setEmail(e.target.value);
    }
    const handlePassword=e=>{
        setPassword(e.target.value);
    }
    return (
        <div className="sign-up">
            <form onSubmit={handleSignIn} >
                <h3 >Please Registration</h3>
            <input onBlur={handleName} className="login" type="text" placeholder="Name" /><br />
            <input onBlur={handleEmail} className="login" type="email" name="" id="" placeholder="Email" required/> <br/>
            <input onBlur={handlePassword} className="login" type="password" name="" id="" placeholder="Password" required/> <br />
            {/* <input  className="login"type="password" name="" id="" placeholder="Confirm Password" /> <br /> */}
            <input type="checkbox" id="registration" name="registration" value="Bike"/>
            <label htmlFor="registration"> Aleready Registered</label><br/>
            {/* <input type="submit" value="Registration" /> */}
            <div className="text-danger">{error}</div>
            <button className="login button">Registration</button>
            <p className="text">Alreday Have An Account?</p>
            <div>Or</div>
            <button onClick={handleGoogleSignIn}  className="login button">Google Sign In</button>
            </form>
        </div>
    );
};

export default Login;