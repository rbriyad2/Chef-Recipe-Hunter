import React, { useContext, useState } from "react";
import google from "../assets/icons/icons8-google-48.png";
import github from "../assets/icons/icons8-github-50.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const auth = getAuth();
const Register = () => {
  const {createUser} = useContext(Authcontext)
  const [password, SetPassword]= useState('')
  const [error, SetError]= useState('')

  const navigate = useNavigate()
const location = useLocation()

const from =location.state?.from?.pathname || '/';

  const handleRegister = (event)=>{
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photourl = event.target.photourl.value;
    const password = event.target.password.value;
    const password2 = event.target.password2.value;  

    if(password === password2){
      createUser(email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
  
        console.log(user)
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photourl
        }).then(() => {
          // Profile updated!
        }).catch((error) => {
          // An error occurred
        });
  
        navigate(from, {replace: true})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
    else{
      SetError('Please Confirm Password')
    }
    

    
  }

  const handlePassword =(e)=>{
    const inputPass =e.target.value;
    SetPassword(inputPass)
    if(inputPass.length < 6){
      SetError('Password at least 6 Character')
    }
    else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#$@!%&*?]/.test(inputPass)){
      SetError('1 uppercase,1 Lower case and 1 Number')
    }
    else{
      SetError('')
    }
  }
  return (
    <div className="register">
      <div className="container">
        <div className="text-center">
          <form onSubmit={handleRegister} className="from">
            <h2 className="gradianthead">Create an Account</h2>
            <div>
              <label htmlFor="name"></label>
              <input placeholder="Name" type="text" name="name" />
            </div>
            <div>
              <label htmlFor="number"></label>
              <input placeholder="Phone Number" type="text" name="number" />
            </div>
            <div>
              <label htmlFor="photourl"></label>
              <input placeholder="Photo URL" type="text" name="photourl" />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input required placeholder="Email" type="text" name="email" />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input placeholder="Password" required type="password" name="password" />
            </div>
            <div>
              <label htmlFor="password2"></label>
              <input onChange={handlePassword} placeholder="Conirm Password" required type="password" name="password2" />
            </div>
            <p className="text-warning">{error && <span>{error}</span>}</p>
            <p className="forgetpass">
              <Link to="/login">Alredy have an Account?</Link>
            </p>
            <button className="glow-on-hover">Register</button>
            <p>Or Login Using</p>
            <div className="googleAuth">
              <button>
                <img src={google} alt="" />
              </button>
              <button>
                <img src={github} alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
