import React, { useState, useContext, useEffect } from "react";
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
export const LevelContext = React.createContext();

const Course = (props) => {
  const [level, setLevel] = useState(1);
  console.log(level);

  const questionsElements = props.questionsData.map((question) => {
    return <h1>{question.title}</h1>;
  });

  // useEffect(() => {
  //   if (isCorrectAnswerChosen === true) {
  //     setLevel((prev) => prev + 1);
  //   }
  // }, [isCorrectAnswerChosen]);

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      <div className="course-main-container">
        <Header></Header>
        <Routes>
          <Route exact path="/course/:driverId" />
        </Routes>
        <Question
          question={props.questionsData.filter(
            (question) => question.id == level
          )}
          answers={props.answersData.filter(
            (answer) => answer.question_id == level
          )}
        />
      </div>
    </LevelContext.Provider>
  );
};

export default Course;
