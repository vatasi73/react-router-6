import React from "react";
import UseAuth from "./hoc/UseAuth";
import { useNavigate } from "react-router-dom";
export default function CreatePost() {
  const { signOut } = UseAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>CreatePost</h1>
      <button onClick={() => signOut(() => navigate("/", { replace: true }))}>
        Log out
      </button>
    </div>
  );
}
