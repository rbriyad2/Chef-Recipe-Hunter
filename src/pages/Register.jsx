import React, { useContext, useState } from "react";
import google from "../assets/icons/icons8-google-48.png";
import github from "../assets/icons/icons8-github-50.png";
import { Link } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider";

const Register = () => {
  const [user, setUser] = useState()
  const {createUser} = useContext(Authcontext)
  const handleRegister = (event)=>{
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    createUser(email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      setUser(user)
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  return (
    <div className="register">
      <div className="container">
        <div className="text-center">
          <form onSubmit={handleRegister} className="from">
            <h2 className="gradianthead">Create an Account</h2>
            <div>
              <label htmlFor="email"></label>
              <input placeholder="Email" type="text" name="email" />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input placeholder="Password" type="password" name="password" />
            </div>
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
