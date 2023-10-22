import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Authcontext } from "../../provider/AuthProvider";

const Header = () => {
  const {user, logout}= useContext(Authcontext)
  console.log(user)

const handleLogout=()=>{
  logout()
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  });
}
  return (
    <div className="bg-danger">
      <div className="container">
        <div className="d-flex align-items-center">
          <ul className="d-flex gap-3 p-0 mt-3 fs-5 text-decoration-none"> 
            <li>
              <Link className="text-decoration-none text-light" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-light" to="/chefs">Chefs</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-light" to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link className="text-decoration-none text-light" to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="logo flex-fill" style={{marginLeft: '270px'}}>
            <Link to='/'><img src={logo} alt="" /></Link>
          </div>
          <div className="userinfo flex-shrink-1">
            <Link to="/account"> <FaUserCircle className="fs-4 text-white"></FaUserCircle> </Link>
            {user ? <button onClick={handleLogout}><Link to='/login'>Logout</Link></button> : <button><Link to='/login'>Sign in</Link></button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
