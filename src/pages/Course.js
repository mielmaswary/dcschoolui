import React, { useState } from "react";
import Header from "../components/Header";
import Question from "../components/Question";
import {
  Routes,
  Navigate,
  Route,
  useLocation,
  useParams,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

const Course = (props) => {
  const [level, setLevel] = useState("1");

  const questionsElements = props.questionsData.map((question) => {
    return <h1>{question.title}</h1>;
  });
  // console.log(props.questionsData);
  return (
    <div className="course-main-container">
      <Header></Header>
      <Routes>
        <Route exact path="/course/:driverId" />
      </Routes>
      <Question
        question={props.questionsData.filter((question) => question.id == 1)}
        answers={props.answersData.filter(
          (answer) => answer.question_id == level
        )}
      />
    </div>
  );
};

export default Course;
