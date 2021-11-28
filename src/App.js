import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Service from "./Quizes";
import Home from "./Home";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quizes" element={<Service />} />
    </Routes>
  </Router>
);

export default App;
