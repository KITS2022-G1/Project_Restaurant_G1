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
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#D19527" }}
      >
        <div className="container-fluid" style={{fontSize: '1.3rem'}}>
          <Link to="/" className="nav-link">
            <img className="img-fluid"
              src={logo}
              style={{ width: "70px", height: "70px", borderRadius: "55px" }}
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">

              <li className="nav-item" style={{ textTransform: "uppercase" }}>
                <Link className="nav-link" aria-current="page"
                  to="/About"
                  onClick={clickView}>
                  TTNH
                </Link>
              </li>

              <li className="nav-item dropdown" style={{ textTransform: "uppercase" }}>
                <Link className="nav-link" to="/Menu" onClick={clickView}>
                  TH???C ????N{" "}
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "#D19527" }}
                >
                  <li style={{ textTransform: "uppercase" }}>
                    <Link class="dropdown-item" to="/MainCourseMenu" onClick={clickView}>
                      t???ng quan
                    </Link>
                  </li>
                  <li style={{ textTransform: "uppercase" }}>
                    <Link class="dropdown-item" to="/SideDishMenu" onClick={clickView}>
                      m??n ??n ph???
                    </Link>
                  </li>
                  <li style={{ textTransform: "uppercase" }}>
                    <Link class="dropdown-item" to="/DessertMenu" onClick={clickView}>
                      m??n tr??ng mi???ng
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li style={{ textTransform: "uppercase" }}>
                    <Link class="dropdown-item" to="/DrinkMenu" onClick={clickView}>
                      ????? u???ng
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="nav-item" style={{ textTransform: "uppercase" }}>
                <Link class="nav-link" aria-current="page"
                  to="/Services"
                  onClick={clickView}>
                  D???CH V???
                </Link>
              </li>



              {stateLogin.showAdminBoard && (
                <>
                  <li className="nav-item" style={{ textTransform: "uppercase" }}>
                    <Link to="/register" className="nav-link">
                      TK
                    </Link>
                  </li>

                  <li className="nav-item dropdown" style={{ textTransform: "uppercase" }}>
                <span className="nav-link">
                Qu???n l??{" "}
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "#D19527" }}
                >
                  <li style={{ textTransform: "uppercase" }}>
                  <Link to="/employee" class="dropdown-item" style={{ textTransform: "uppercase" }}>
                        Qu???n l?? nh??n vi??n
                      </Link>
                  </li>
                  <li style={{ textTransform: "uppercase" }}>
                  <Link to="/branches"  class="dropdown-item" style={{ textTransform: "uppercase" }}>
                       Qu???n l?? chi nh??nh
                      </Link>
                  </li>

                  <li style={{ textTransform: "uppercase" }}>
                  <Link to="/cashier"  class="dropdown-item" style={{ textTransform: "uppercase" }}>
                       Qu???n l?? b??n
                      </Link>
                  </li>

                </ul>
              </li>
                </>
              )}

              {stateLogin.showModeratorBoard && (
                <>

              <li className="nav-item dropdown" style={{ textTransform: "uppercase" }}>
                <span className="nav-link">
                ?????U B???P{" "}
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "#D19527" }}
                >
                  <li style={{ textTransform: "uppercase" }}>
                  <Link to="/chefFoodManager" class="dropdown-item" style={{ textTransform: "uppercase" }}>
                        Qu???n l?? t??nh tr???ng m??n ??n
                      </Link>
                  </li>
                  <li style={{ textTransform: "uppercase" }}>
                  <Link to="/chef"  class="dropdown-item" style={{ textTransform: "uppercase" }}>
                       Qu???n l?? th???c ????n ng??y
                      </Link>
                  </li>
                </ul>
              </li>
                </>
              )}

              {stateLogin.currentUser && (
                <>
              <li className="nav-item dropdown" style={{ textTransform: "uppercase" }}>
                <span className="nav-link">
                Nh??n vi??n{" "}
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: "#D19527" }}
                >
                  <li style={{ textTransform: "uppercase" }}>
                  <Link to="/table" class="dropdown-item" style={{ textTransform: "uppercase" }}>
                      Order
                    </Link>
                  </li>
                  <li style={{ textTransform: "uppercase" }}>
                  <Link to="/cashier"  class="dropdown-item" style={{ textTransform: "uppercase" }}>
                  Table
                      </Link>
                  </li>
                  <Link to="/ManageBill" class="dropdown-item" style={{ textTransform: "uppercase" }}>
                  Bill
                    </Link>
                </ul>
              </li>
                </>
              )}
            </ul>
            <form class="form-inline my-2 my-lg-0">
              {stateLogin.currentUser ? (
                <div className="navbar-nav ml-auto ms-auto">
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                      {stateLogin.currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item" style={{ textTransform: "uppercase" }}>
                    <Link
                      to="/login"
                      className="nav-link"
                      onClick={() => logOut()}
                    >
                      LogOut
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav ml-auto ms-auto">
                  <li className="nav-item" style={{ textTransform: "uppercase" }}>
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>

    </React.Fragment >
  )
}