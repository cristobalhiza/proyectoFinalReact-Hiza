import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "../pages/Products"
import CategoryPage from "../pages/Categories";
import ItemDetail from "../pages/ItemDetail";

const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ItemListContainerComponent />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/products/:itemId" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
