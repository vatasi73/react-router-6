import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import UseAuth from "./hoc/UseAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = UseAuth();
  const fromPage = location.state?.from?.pathname || "/";

  const hanleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.userName.value;

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={hanleSubmit}>
        <label>
          {" "}
          Name: <input name="userName" />
          <button type="submit">Login</button>
        </label>
      </form>
    </div>
  );
}
