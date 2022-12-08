import React, { useState } from "react";
import Header from "../components/Header";
import Question from "../components/Question";
const Course = (props) => {
  const [level, setLevel] = useState(2);
  const questionsElements = props.questionsData.map((question) => {
    return <h1>{question.title}</h1>;
  });
  console.log(props.questionsData[1]);
  return (
    <div>
      <Header></Header>
      <Question question={props.questionsData[level]} />
    </div>
  );
};

export default Course;
