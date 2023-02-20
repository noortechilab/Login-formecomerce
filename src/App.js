import React from "react";
import Login from "./components/Login";
import Home from "./components/home/Home";
import Header from "./components/Header";
import About from "./components/aboutus/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Products from "./components/home/Products";
import Cart from "./components/productdetail/Productdetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Productdetail from "./components/productdetail/Productdetail";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productsdetail/:id" element={<Productdetail />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
