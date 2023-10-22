import React, { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";

const Accounts = (children) => {
  const { user } = useContext(Authcontext);
  return (
    <section>
      <div className="bginfopadding"></div>
      <div className="container">
        <div className="userpicture">
          <img src={user?.photoURL} alt="" />
        </div>
        <div className="usercard">
          <div className="userinfo">
            <h3>{user?.displayName ? user?.displayName : 'Mr Jon  Doe'}</h3>
            <p>Email: {user ? user?.email : <></>}</p>
            <p>User ID: {user ? user?.uid.slice(0, 10) : <></>}</p>
            <p>Contact: {user?.phoneNumber ? user?.phoneNumber: "0170054544"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accounts;
