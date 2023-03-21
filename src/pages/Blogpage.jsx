import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadBlog } from "../store/blog/blogAction";
import { selectBlog } from "../store/blog/blogSelector";

export default function Blogpage() {
  const dispatch = useDispatch();
  const postDetails = useSelector(selectBlog);

  useEffect(() => {
    dispatch(loadBlog());
  }, [dispatch]);
  return (
    <div>
      <h1>Our News</h1>
      <Link to="/posts/new">Add new post</Link>
      {postDetails.map((el) => (
        <Link key={el.id} to={`/posts/${el.id}`}>
          <li>{el.title}</li>
        </Link>
      ))}
    </div>
  );
}
