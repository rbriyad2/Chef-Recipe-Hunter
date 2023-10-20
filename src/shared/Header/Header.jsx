import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-danger">
      <div className="container">
        <div className="d-flex align-items-center">
          <ul className="d-flex gap-3 mt-3 fs-5 text-decoration-none"> 
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
            <img src={logo} alt="" />
          </div>
          <div className="userinfo flex-shrink-1">
            <FaUserCircle className="fs-4 text-white"></FaUserCircle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
