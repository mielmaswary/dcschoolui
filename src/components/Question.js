import React, { useEffect } from "react";
import ReactPlayer from "react-player";

const Question = (props) => {
  const answers = props.answers;
  const [question] = props.question;
  const { title, video_url, text, answer_summery, id } = question;

  console.log(answers);
  const answersElement = answers.map((answer) => <div>{answer.text}</div>);
  return (
    <div className="main-container">
      <h2>{title}</h2>
      <iframe className="course-video" src={video_url}></iframe>
      <div>שאלה: {text}</div>
      <div>{answersElement}</div>
    </div>
  );
};

export default Question;
