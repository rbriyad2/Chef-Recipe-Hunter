import React from "react";
import "./Post.css";
import { FaHeart, FaRegEye, FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Posts = ({ postx }) => {
  const {like, views, body, id, userId, title}=postx
  return (
      <div className="blogContent">
        <img src="https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Chimichurri-Shrimp-4.jpg" alt="" />

        <h3>{title}</h3>
        <p>{body}</p>
        <div className="bloginfo">
          <div className="bloginfoleft">
            <div className="like"><FaRegThumbsUp></FaRegThumbsUp> 51</div>
            <div className="love"><FaHeart></FaHeart> {like}</div>
          </div>
          <div className="bloginforight">
            <div className="view"><FaRegEye></FaRegEye> {views}</div>
            <div className="readmore"> <Link>Read More</Link> </div>
          </div>
        </div>
      </div>
  );
};

export default Posts;
