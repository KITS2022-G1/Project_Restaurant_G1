import React from 'react'
import { Link } from "react-router-dom";
import authService from '../services/auth.service';

import { useEffect, useState } from "react";

// import AuthVerify from "./common/auth-verify";
import eventBus from '../common/EventBus';

export default function Header(){
    const [stateLogin, setStateLogin] = useState({
        showModeratorBoard: false,
        showAdminBoard: false,
        currentUser: undefined
      });
      const [logOut, setLogOut] = useState(null);

      const [user, setUser] = useState(null);

      useEffect(() => {

        const userGet = authService.getCurrentUser();
        console.log("login " + user);
        if (userGet) {
          setStateLogin({
            currentUser: userGet,
            showModeratorBoard: userGet.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: userGet.roles.includes("ROLE_ADMIN")
          });
          setUser(userGet);
        }

        setLogOut(authService.logout());
        eventBus.on("logout", () => {
          logOut.logOut();
        });

        return () => {
          eventBus.remove("logout")
        }

      }, []);

        return (
            <React.Fragment>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            {stateLogin.showModeratorBoard && (
              <li className="nav-item">
                <Link to="/mod" className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {stateLogin.showAdminBoard && (
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {stateLogin.currentUser && (
              <li className="nav-item">
                <Link to="/user" className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {stateLogin.currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  {stateLogin.currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" onClick={() => logOut()}>
                  LogOut
                </Link>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        </React.Fragment>
        )
}