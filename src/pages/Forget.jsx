import React from "react";
import { Link } from "react-router-dom";

const Forget = () => {
    return (
        <div className="register">
      <div className="container">
        <div className="text-center">
          <form className="from">
            <h2 className="gradianthead">Forget Password</h2>
            <div>
              <label htmlFor="email"></label>
              <input placeholder="Email" type="text" name="email" />
            </div>
            <p className="forgetpass"><Link to='/login'>Login Account?</Link></p>
            <button className="glow-on-hover">Reset</button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Forget;