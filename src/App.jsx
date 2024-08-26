import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";  // Asegúrate de que las rutas sean correctas
import Footer from "./Footer";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
