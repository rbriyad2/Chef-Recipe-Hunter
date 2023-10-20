import React from "react";
import { Col, Row } from "react-bootstrap";
import leftofeerimg from "../../assets/1.png"
import burger from "../../assets/2.png"
import offer from "../../assets/offer.svg"
import './Hero.css';


const Hero = () => {
  return (
    <div className="container">
      <div className="hero mt-4">
      <Row>
        <Col sm={6} className="">
          <div className="leftitem bg-danger overflow-hidden">
            <h3>Special Deliciaus</h3>
            <p>Maxican Pizza Testes Better</p>
            <button>Order</button>
            <img className="offer" src={offer} alt="" />
            <img className="" src={leftofeerimg} alt="" />
            
          </div>
        </Col>
        <Col sm={6}>
          <div className="rightitem">
          <img src={burger} alt="" />
          </div>
          <div className="delivary">
          <img src={burger} alt="" />
          
          </div>
        </Col>
      </Row>
      </div>
    </div>
  );
};

export default Hero;
