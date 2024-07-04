import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";

const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ItemListContainerComponent />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
