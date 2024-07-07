// src/routes/MainRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "../pages/Products";
import CategoryPage from "../pages/Categories";
import ItemDetail from "../pages/ItemDetail";
import { CartProvider } from "../context/CartContext";
import Contact from "../pages/Contact";

const MainRoutes = () => {
  return (
    <CartProvider>
      <Router>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemListContainerComponent />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/products/:itemId" element={<ItemDetail />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default MainRoutes;
