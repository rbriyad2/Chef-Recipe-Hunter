import React from 'react';
import './Recipes.css';
import { Link, useLoaderData } from 'react-router-dom';
import ChefBanner from '../ChefBanner/ChefBanner';

const Recipes = () => {
    const chefreBanner= useLoaderData()
    const {Exxprience, Fooditems, Likes, Recipe, foodImage, name, picture, recipes, _id}=chefreBanner
    console.log(chefreBanner)
    return (
        <section>
            <div className="chefProfile">
                    <div className="container">
                        <div className="bannercontent">
                            <img src={picture} alt="" />
                            <div className="chef-infocontent">
                                <h3>Name: {name}</h3>
                                <h4>Exprience: {Exxprience}</h4>
                                <h5>Total Recipe: </h5>
                                <h6>Favorite:</h6>
                            </div>
                            <div className="chefbanDetails">
                                <div className="MenuItem">
                                    <div><Link to=''>Chines</Link></div>
                                    <div><Link to=''>bengli</Link></div>
                                    <div><Link to=''>Indian</Link></div>
                                </div>
                                <div className="socilmedia">
                                    <h4>Facebook</h4>
                                    <h4>YouTube</h4>
                                    <h4>Instragram</h4>
                                    <h4>Portfolio</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container">

                <div className="all-recipes">
                
                </div>
            </div>
                
        </section>
    );
};

export default Recipes;