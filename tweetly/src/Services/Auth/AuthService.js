import React from "react";
import { success } from "../../Toast/ToastServices";
// import { useNavigate } from "react-router-dom";
export const guestLoginHandler = async (
  setPassword,
  setIsLoggedIn,
  setUsername,
  navigate,
  location
) => {
  const creds = {
    username: "abhishekpundir",
    password: "pundir",
  };
  setUsername(creds.username);
  setPassword(creds.password);
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(creds),
    });
    const data = await response.json();

    const { foundUser, encodedToken } = data;
    localStorage.setItem("user", JSON.stringify(foundUser));
    localStorage.setItem("token", encodedToken);
    console.log(foundUser.username, encodedToken);
    setIsLoggedIn(true);
    success("Login Successfully!");
    navigate("/explore");
    success("Login Successfully!");
  } catch (error) {
    console.log(error);
  }
};

export const loginHandler = async (
  username,
  password,
  setIsLoggedIn,
  navigate
) => {
  if (username && password) {
    const creds = {
      username,
      password,
    };
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });
      console.log(response.status);
      console.log(await response.json());


      
      if (response.status === 200 ) {
        const { foundUser, encodedToken } = await response.json();
        console.log("inside if block");
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(foundUser));
        localStorage.setItem("token", encodedToken);
        console.log("successfully loggedin", foundUser);

        navigate("/explore");
        success("Login successfully");
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
