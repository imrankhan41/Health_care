import React from 'react';
import { Link} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login1 = () => {
    const{ signInUsingGoggle}=useAuth();

    return (
        <div className="mt-5">
            <h3 className="pt-5">Please Log In</h3>
            <form  >
        <input  className="login" type="email" name="" id="" placeholder="Email" required/> <br/>
        <input className="login" type="password" name="" id="" placeholder="Password" required/> <br />
        <button className="login button">Log in</button>
        <p className="text">New User?<Link to="/registration">Create An Account?</Link></p>
        <div>Or</div>
            <button onClick={signInUsingGoggle}  className="login button">Google Sign In</button>
        
        </form>
        </div>
    );
};

export default Login1;