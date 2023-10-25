import React from 'react';
import './Allchefs.css';
import { Link } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';

const Allchefs = ({chefs}) => {
    const {picture, Exxprience, name, recipes, Fooditems, Likes, Recipe, foodImage}=chefs;
    return (
                    <div className="chefsdata">
                        <img src={picture} alt="" />
                        <h3>{name}</h3>
                        <h4>Exprience: {Exxprience} Years</h4>
                        <h5>Recipes : {recipes} Avilable</h5>
                        <div className='cheflike'><p>Like: <FaRegThumbsUp className='likricon'></FaRegThumbsUp> {Likes}</p></div>
                        <button><Link to='/recipe'>View Recipes</Link></button>
                    </div>
    );
};

export default Allchefs;