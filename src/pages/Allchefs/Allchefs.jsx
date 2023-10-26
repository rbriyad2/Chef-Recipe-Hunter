import React, { useState } from 'react';
import './Allchefs.css';
import { Link } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Allchefs = ({chefs}) => {
    const {picture, Exxprience, name, recipes, Likes, _id}=chefs;
const [like, setLike]= useState(0)
    const addlikeBTN=()=>{
     let likess = like+1
     toast.success('👍 Added Favorite', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        setLike(likess)
    }

    const viewRecipe=(id)=>{
        console.log(id)
    }
    return (
                    <div className="chefsdata">
                        <img src={picture} alt="" />
                        <h3>{name}</h3>
                        <h4>Exprience: {Exxprience} Years</h4>
                        <h5>Recipes : {recipes} Avilable</h5>
                        <span className='cheflike'>  <FaRegThumbsUp onClick={addlikeBTN} className='likricon'></FaRegThumbsUp> <span>{parseInt(Likes)+like}</span> </span>
                        <ToastContainer /><button onClick={()=>viewRecipe(chefs)}><Link to={`/recipe/${_id}`}>View Recipes</Link></button>
                    </div>
    );
};

export default Allchefs;