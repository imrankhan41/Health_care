import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const {signInUsingGoggle}=useAuth()
    return (
        <div className="sign-up">
        <form  >
            <h3 >Please Registration</h3>
        <input  className="login" type="text" placeholder="Name" /><br />
        <input  className="login" type="email" name="" id="" placeholder="Email" required/> <br/>
        <input className="login" type="password" name="" id="" placeholder="Password" required/> <br />
        <button className="login button">Registration</button>
        <p className="text">Alreday Have An Account?<Link to="/login1">Log in</Link></p>
        <div>Or</div>
            <button onClick={signInUsingGoggle}   className="login button">Google Sign In</button>
        
        </form>
    </div>
    );
};

export default Register;