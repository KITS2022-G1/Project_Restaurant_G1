import React from 'react'
import { Link } from "react-router-dom";
import authService from '../services/auth.service';
import logo from "../image/logo1.jpg";
import { useEffect, useState } from "react";
import "../css/main.css";
import "../css/Layout.css";

// import AuthVerify from "./common/auth-verify";
import eventBus from '../common/EventBus';

export default function Header() {
  const [stateLogin, setStateLogin] = useState({
    showModeratorBoard: false,
    showAdminBoard: false,
    currentUser: undefined
  });
  const [logOut, setLogOut] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {

    const userGet = authService.getCurrentUser();
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

  const clickView = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#D19527" }}
      >
        <div className="navbar-nav mr-auto ">
          <li className="nav-item ms-3">
            <Link to="/" className="nav-link">
              <img class="img-fluid"
                src={logo}
                style={{ width: "100px", height: "95px", borderRadius: "55px" }}
              ></img>
            </Link>
          </li>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page"
                  to="/About"
                  onClick={clickView}>
                  ABOUT US
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link className="nav-link" to="/Menu" onClick={clickView}>
                  MENU{" "}
                </Link>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "#D19527" }}
                >
                  <li>
                    <Link class="dropdown-item" to="/MainCourseMenu" onClick={clickView}>
                      Main course menu
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/SideDishMenu" onClick={clickView}>
                      Side dish menu
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/DessertMenu" onClick={clickView}>
                      Dessert menu
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/DrinkMenu" onClick={clickView}>
                      Drink menu
                    </Link>
                  </li>
                </ul>
              </li>

              {stateLogin.showAdminBoard && (

                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {stateLogin.showModeratorBoard && (

                <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {stateLogin.currentUser && (
                <>
                  <li className="nav-item">
                    <Link to="/table" className="nav-link">
                      ORDER
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/cashier" className="nav-link">
                      TABLE
                    </Link>
                  </li>
                </>
              )}

            </ul>

          </div>
        </div>

        {stateLogin.currentUser ? (
          <div className="navbar-nav ml-auto ms-auto">
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
          <div className="navbar-nav ml-auto ms-auto">
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

    </React.Fragment >
  )
}