import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import MainCourseMenu from "./pages/MainCourseMenu";
import SideDishMenu from "./pages/SideDishMenu";
import DessertMenu from "./pages/DessertMenu";
import DrinkMenu from "./pages/DrinkMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/MainCourseMenu" element={<MainCourseMenu />} />
          <Route path="/SideDishMenu" element={<SideDishMenu />} />
          <Route path="/DessertMenu" element={<DessertMenu />} />
          <Route path="/DrinkMenu" element={<DrinkMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
