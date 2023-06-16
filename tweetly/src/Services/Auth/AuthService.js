import React from 'react'
import { success } from '../../Toast/ToastServices';

export const guestLoginHandler = async (
  setEmail,
  setPassword,
  setIsLoggedIn,
  setUserName,
  navigate
) => {
  const creds = {
    email: "abhishekpundir@gmail.com",
    username:"abhishekpundir",
    password: "pundir"
  };
  setEmail(creds.email);
  setUserName(creds.username);
  setPassword(creds.password);
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(creds),
    });
    const data = await response.json();

    const { foundUser, encodedToken } = data;
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(foundUser));
    localStorage.setItem("token", encodedToken);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
}

export const loginHandler = async (email, username, password, setIsLoggedIn, navigate, dispatch, location) => {
  if (username && password) {
    const creds = {
      email,
      username,
      password
    };

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });

      const { foundUser, encodedToken } = await response.json();
      if (response.status === 200) {
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(foundUser));
        localStorage.setItem("token", encodedToken);

        navigate("/");
        success("Login successfully");
      } else {
        alert(response.statusText)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
