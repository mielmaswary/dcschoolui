import "./styles/main.scss";
import { Routes, Navigate, Route } from "react-router-dom";
import Course from "./pages/Course";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import React, { useState, useContext } from "react";
import Purchase from "./pages/Purchase";
import questionsData from "./data/questions";
import About from "./pages/About";

function App() {
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);

  const [questions, setQuestions] = useState(questionsData);
  const [userId, setUserId] = useState(params.get("userId"));

  return (
    <div className="main-container">
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/admin" element={<Admin questions={questions} />} />
        <Route
          path="/course"
          element={<Course userId={userId} questionsData={questionsData} />}
        />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
