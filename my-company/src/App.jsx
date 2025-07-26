import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
            </>
          }
        ></Route>
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
