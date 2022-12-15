import "./styles/main.scss";
import { Routes, Navigate, Route, redirect } from "react-router-dom";
import Course from "./pages/Course";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import React, { useState, useContext } from "react";
import Purchase from "./pages/Purchase";
import questionsData from "./data/questions";
import answersData from "./data/answers";
import About from "./pages/About";

function App() {
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);

  const [questions, setQuestions] = useState(questionsData);
  const [answers, setAnswers] = useState(answersData);
  const [driverId, setDriverId] = useState(params.get("driverId"));
  const [compenyId, setCompenyId] = useState(params.get("compenyId"));

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home compenyId={compenyId} />} />

        <Route path="/admin" element={<Admin questions={questions} />} />
        <Route
          path="/course"
          element={
            <Course
              driverId={driverId}
              questionsData={questionsData}
              answersData={answersData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
