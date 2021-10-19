import React from 'react';

const Login = () => {
    return (
        <div>
            <img className="p-5 mt-5 w-25"  alt="" />
            <div >
            <input className="login" type="text" placeholder="Name" /><br />
            <input className="login" type="email" name="" id="" placeholder="Email"/> <br/>
            <input className="login" type="password" name="" id="" placeholder="Password" /> <br />
            <input  className="login"type="password" name="" id="" placeholder="Confirm Password" /> <br />
            <button className="login">Sign Up</button>
            <p>Alreday Have An Account?</p>
            </div>
        </div>
    );
};

export default Login;