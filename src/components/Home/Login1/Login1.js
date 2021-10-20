import React from 'react';
import { Link,useLocation} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';


const Login1 = () => {
    const{ signInUsingGoggle}=useAuth();
   const location =useLocation();
   const history =useHistory();
   console.log("came from",location.state?.from)
   const redirect_uri =location.state?.from || '/home'
    const handleGoogleLogin =()=>{
        signInUsingGoggle()
        .then(result=>{
            history.push(redirect_uri);
        })
    }
    return (
        <div className="mt-5">
            <h3 className="pt-5">Please Log In</h3>
            <form  >
        <input  className="login" type="email" name="" id="" placeholder="Email" required/> <br/>
        <input className="login" type="password" name="" id="" placeholder="Password" required/> <br />
        <button className="login button">Log in</button>
        <p className="text">New User?<Link to="/registration">Create An Account?</Link></p>
        <div>Or</div>
            <button onClick={handleGoogleLogin}  className="login button">Google Sign In</button>
        
        </form>
        </div>
    );
};

export default Login1;