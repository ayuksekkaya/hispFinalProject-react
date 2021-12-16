import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Header";
import QuizMain from "./QuizMain";
import Quiz from "./Quiz";
import Home from "./Home";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quizes" element={<QuizMain />} />
      <Route path="/picaroquiz" element={<Quiz />} />
      <Route path="/elHoyoQuiz" element={<Quiz />} />
    </Routes>
  </Router>
);

export default App;
