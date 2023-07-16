import React from "react";

// react router dom
import { Routes, Route, Navigate } from "react-router-dom";

// Products
import Store from "./components/Store";

// Detail Component
import ProductDetail from "./components/ProductDetail";

//components
import ShopCart from "./components/ShopCart";
import Navbar from "./shared/Navbar";

// Redux
import store from "../src/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products" element={<Store />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </Provider>
  );
};

export default App;
