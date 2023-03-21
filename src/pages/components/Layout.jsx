import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "./CustomLink";
// const setActive = ({ isActive }) => (isActive ? "active-link" : "");
export default function Layout() {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container"> 2022</footer>
    </>
  );
}
