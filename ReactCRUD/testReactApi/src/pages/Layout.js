import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../css/main.css";
import Footer from "./Footer";
import logo from "../image/logo1.jpg";
import "../css/Layout.css";
const Layout = () => {
  const clickView = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#D19527" }}
      >
        <div class="container-fluid">
          <Link to="/#start" class="navbar-brand" onClick={clickView}>
            <img
              src={logo}
              style={{ width: "100px", height: "95px", borderRadius: "55px" }}
            ></img>
          </Link>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page"
                  to="/About"
                  onClick={clickView}
>
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
              <li class="nav-item">
                <Link
                  class="nav-link"
                  to="/Services"
                  onClick={clickView}
                >
                  SERVICES
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  href="#"
                  to="/aboutMe"
                  class="nav-link"
                  onClick={clickView}
                >
                  CALL US
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
