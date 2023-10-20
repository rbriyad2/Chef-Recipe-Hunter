import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pt-2">
      <div className="text-center text-light p-3 bg-danger">
        © 2023 Copyright 
        <Link to='/' className="text-light text-decoration-none"> ChefR.</Link>
      </div>
    </div>
  );
};

export default Footer;
