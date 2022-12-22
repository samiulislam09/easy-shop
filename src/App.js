import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkout" element={<CheckoutPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
