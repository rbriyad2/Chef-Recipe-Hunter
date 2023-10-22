import React from "react";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import Hero from "../components/Hero/Hero";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className='outlet'>
      <Outlet></Outlet>
      </div>  
      <Footer></Footer>
    </div>
  );
};

export default Main;
