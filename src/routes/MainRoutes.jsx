import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ItemListContainer from "../pages/ItemListContainer";

const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ItemListContainer />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
