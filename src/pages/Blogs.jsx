import React from "react";
import { useLoaderData } from "react-router-dom";
import Posts from "./Posts/Posts";

const Blogs = () => { 
  const blogs = useLoaderData()
  return (
    <div className="blogs">
      <div className="container">
        <h2 className="blog2 gradianthead">Chef R. Blogs</h2>
        <div className="all-blogs">
{blogs.map(postx =>  <Posts key={postx.id} postx={postx}></Posts>)}



        </div>
      </div>
    </div>
  );
};

export default Blogs;
