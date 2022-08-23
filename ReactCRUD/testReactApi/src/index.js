import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import About from "./pages/About";
import Footer from './components/Footer';
import HomeMain from './pages/Home';
import Header from './components/Header';
import Chef from './pages/Chef';
import Cashier from './pages/Cashier';
import Table from './pages/Table';
import Favorite from './pages/Favorite';
import Menu from "./pages/Menu";
import MainCourseMenu from "./pages/MainCourseMenu";
import SideDishMenu from "./pages/SideDishMenu";
import DessertMenu from "./pages/DessertMenu";
import DrinkMenu from "./pages/DrinkMenu";
import Services from "./pages/Services";
import TestPage from "./pages/TestPage"
import Bill from "./pages/Bill"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/*" element={<HomeMain />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/user" element={<BoardUser />} />
        <Route path="/mod" element={<BoardModerator />} />
        <Route path="/admin" element={<BoardAdmin />} />
          <Route path="chef" element={<Chef />} />
          <Route path="cashier" element={<Cashier />} />
          <Route path="table" element={<Table />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="bill" element={<Bill />} />
          <Route path="about" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/MainCourseMenu" element={<MainCourseMenu />} />
          <Route path="/SideDishMenu" element={<SideDishMenu />} />
          <Route path="/DessertMenu" element={<DessertMenu />} />
          <Route path="/DrinkMenu" element={<DrinkMenu />} />
          <Route path="/Services" element={<Services/>} />
          <Route path="table/test/:totalPrice" element={<TestPage/>} />

      </Routes>
      <Footer/>
      </BrowserRouter>
  </React.StrictMode>
);

serviceWorker.unregister();