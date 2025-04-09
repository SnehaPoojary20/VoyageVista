import React from "react";

const BlogCard = ({ post, onClick }) => {
  return (
    <div className="blog-card" onClick={onClick}>
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <button>Read More</button>
    </div>
  );
};

export default BlogCard;
