import React from "react";
import "./Login.css";
import { auth } from "./firebase";
import { useState } from "react";
import { autocompleteClasses } from "@mui/material";
import userEvent from "@testing-library/user-event";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice.js";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  //   const register = async () => {
  //     if (!name) {
  //       return alert("Please enter a full name!");
  //     }

  //     const userAuth = await auth.createUserWithEmailAndPassword(email, password);
  //     userAuth.user
  //       .updateProfile({
  //         displayName: name,
  //         photoURL: profilePic,
  //       })
  //       .catch((error) => alert(error));

  //     await dispatch(
  //       login({
  //         email: userAuth.user.email,
  //         uid: userAuth.user.uid,
  //         displayNmae: name,
  //         photoUrl: profilePic,
  //       })
  //     ).catch((error) => alert(error));
  //   };

  const register = () => {
    if (!name) {
      alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login-register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
};

export default Login;
