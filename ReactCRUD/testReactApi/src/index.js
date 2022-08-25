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
import Order from "./pages/Order";
import ManageBill from "./pages/ManageBill";
import Bill from "./pages/Bill"
import TableAddNew from './pages/AddNewTable';
import FoodAddNew from './pages/AddNewFood';
import ChefFoodManager from './pages/ChefFoodManager';

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
        <Route path="/chefFoodManager" element={<ChefFoodManager/>} />
        <Route path="/user" element={<BoardUser />} />
        <Route path="/mod" element={<BoardModerator />} />
        <Route path="/admin" element={<BoardAdmin />} />
          <Route path="chef" element={<Chef />} />
          <Route path="cashier" element={<Cashier />} />
          <Route path="table" element={<Table />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="bill" element={<Bill />} />
          <Route path="addTable" element={<TableAddNew />} />
          <Route path="addFood" element={<FoodAddNew />} />
          <Route path="about" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/ManageBill" element={<ManageBill />} />
          <Route path="/MainCourseMenu" element={<MainCourseMenu />} />
          <Route path="/SideDishMenu" element={<SideDishMenu />} />
          <Route path="/DessertMenu" element={<DessertMenu />} />
          <Route path="/DrinkMenu" element={<DrinkMenu />} />
          <Route path="/Services" element={<Services/>} />
          <Route path="table/order/:totalPrice" element={<Order/>} />
      </Routes>
      <div className='mt-5 footer'><Footer/></div>

      </BrowserRouter>
  </React.StrictMode>
);

serviceWorker.unregister();