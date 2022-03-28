import React from "react";
import Home from "./features/Home";
import Editor from "./features/Editor";
import Styles from "./App.module.scss";
import { BrowserRouter, Navigate, useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./features/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Register from "./features/Register";
import Reset from "./features/Reset";

const App = () => {
  return (
    <BrowserRouter>
      <div className={Styles.AppContainer}>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/:id"
            element={
              <RequireAuth>
                <Editor />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const [user] = useAuthState(auth);
  let location = useLocation();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default App;
