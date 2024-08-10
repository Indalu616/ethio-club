import React, { useEffect } from "react";
import "./Blogs.css";
import { Posts } from "../BlogPostLists/Posts";
import AOS from "aos";
import { Link } from "react-router-dom";
function Blogs() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div className="blogs" id="blogs">
      <h2>Blog Posts</h2>
      <div className="blogs-container">
        {Posts?.map((item, index) => {
          return (
            <div className="blogger" key={index}>
              <img src={item.url} alt="blog-post"></img>
              <p className="release-date">
                {item.month} {item.date}, {item.year} Ethio-club 7 Comments
              </p>
              <h3>{item.title}</h3>

              <p className="blog-desc">{item.desc}</p>

              <p className="read-more">
                <Link to="/ethio-club/blogs">Read more</Link>
                <span className="arrow">
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
