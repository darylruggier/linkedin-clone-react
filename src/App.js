import React from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login.js";
import { auth } from "./firebase";
import { useEffect } from "react";
import Widgets from "./Widgets.js";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is not logged in
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
