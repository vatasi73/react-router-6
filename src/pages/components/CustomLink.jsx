import React from "react";
import { Link, useMatch } from "react-router-dom";

export default function CustomLink({ children, to }) {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{
        color: match ? "red" : "white",
      }}
    >
      {children}
    </Link>
  );
}
