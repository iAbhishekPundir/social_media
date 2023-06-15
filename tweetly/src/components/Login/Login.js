import React, { useState } from "react";
import "./Login.css";
import { VscEyeClosed, VscEye } from "react-icons/vsc";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleEye, setToggleEye] = useState(false);
  return (
    <div>
      <form
        className="login-form-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="login-form-innerContainer">
          <div className="welcome-div">
            <span className="logo-div">
              <img
                src="https://cdn1.iconfinder.com/data/icons/animals-88/64/Bird_1-64.png"
                alt="logo"
              />
            </span>
            <span>
              <h1>Welcome to Tweetly</h1>
              <p>connecting people...</p>
            </span>
          </div>
          <div className="sign-in-msg">
          <h2>Sign In</h2>
          </div>
         
          <div className="">
            <div className="login-email">
              <input
                type="text"
                placeholder="username"
                className="input-email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="login-password relative">
              <input
                type={toggleEye ? "text" : "password"}
                placeholder="password"
                className="input-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              {password && (
                <p
                  className="eye-icon"
                  onClick={() => setToggleEye(!toggleEye)}
                >
                  {toggleEye ? <VscEye /> : <VscEyeClosed />}
                </p>
              )}
            </div>
          </div>

          <button className="login-btn">Login</button>

          <button className="login-guest-btn">Login as Guest</button>
        </div>
      </form>
    </div>
  );
};
