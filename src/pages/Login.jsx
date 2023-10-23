import React, { useContext } from "react";
import google from '../assets/icons/icons8-google-48.png';
import github from '../assets/icons/icons8-github-50.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider";


const Login = () => {
const {signIn, googleLogin, githubLogin}= useContext(Authcontext)
const navigate = useNavigate()
const location = useLocation()

const from =location.state?.from?.pathname || '/';

  const handleLogin =(event)=>{
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      navigate(from, {replace: true})
    })
    .catch((error) => {
      const errorMessage = error.message;
    });
  }
//google login
  const handlegoogleLogin=()=>{
    googleLogin()
    .then((result)=>{
      console.log(result)
      navigate(from, {replace: true})
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
//github login
  const handleGithubLogin=()=>{
    githubLogin()
    .then((result)=>{
      console.log(result)
      navigate(from, {replace: true})
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }

    return (
      <div className="register">
      <div className="container">
        <div className="text-center">
          <form onSubmit={handleLogin} className="from">
            <h2 className="gradianthead">Login Your Account</h2>
            <div>
              <label htmlFor="email"></label>
              <input placeholder="Email" type="text" name="email" />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input placeholder="Password" type="password" name="password" />
            </div>
            <p className="forgetpass"><Link to='/forget'>Forget Password?</Link></p>
            <button className="glow-on-hover">Login</button>
            <p>Or Login Using</p>
            <div className="googleAuth">
            <button onClick={handlegoogleLogin} ><img src={google} alt="" /></button>
            <button onClick={handleGithubLogin}><img src={github} alt="" /></button>
            </div>
            <p className="dont-account">Don't have account? <Link to='/register'>Create Account</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;<h2>Login</h2>