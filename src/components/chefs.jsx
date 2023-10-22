import React from "react";
import chef1 from "../assets/icons/chef1.jpg";
import { Link } from "react-router-dom";


const chefs = () => {
  return (
    <div className="container">
      <div className="all-chefs mb-4">
        <div className="outline">
          <div className="chefinfo">
            <img src={chef1} alt="" />
            <div className="chefname">
              <p>Recipe: 12</p>
              <p>Exprience: 5 Years</p>
              <h5>Saruk Khan</h5>
              <button className="viewrecipe">
                <Link to="">View Recipes</Link>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="outline">
          <div className="chefinfo">
            <img src={chef1} alt="" />
            <div className="chefname">
              <p>Recipe: 12</p>
              <p>Exprience: 5 Years</p>
              <h5>Saruk Khan</h5>
              <button className="viewrecipe">
                <Link to="">View Recipes</Link>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="outline">
          <div className="chefinfo">
            <img src={chef1} alt="" />
            <div className="chefname">
              <p>Recipe: 12</p>
              <p>Exprience: 5 Years</p>
              <h5>Saruk Khan</h5>
              <button className="viewrecipe">
                <Link to="">View Recipes</Link>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="outline">
          <div className="chefinfo">
            <img src={chef1} alt="" />
            <div className="chefname">
              <p>Recipe: 12</p>
              <p>Exprience: 5 Years</p>
              <h5>Saruk Khan</h5>
              <button className="viewrecipe">
                <Link to="">View Recipes</Link>{" "}
              </button>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default chefs;
