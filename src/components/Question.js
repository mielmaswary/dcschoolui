import React, { useEffect, useState, useContext, Fragment } from "react";
import Video from "./Video";
import Quiz from "./Quiz";
import { LevelContext } from "../pages/Course";
const Question = (props) => {
  const answers = props.answers;
  const [question] = props.question;
  const { title, video_url, text, answer_summery, id } = question;
  const [isShowQuiz, setIsShowQuiz] = useState(false);
  const { level, setLevel } = useContext(LevelContext);
  const [isEncorrectAnswerChosen, setIsEncorrectAnswerChosen] = useState(false);
  const correctAnswerId = answers.find((answer) => answer.is_correct === 1).id;
  const [isAnswerChosen, setIsAnswerChosen] = useState(false);
  const [isVideoPlay, setIsVideoPlay] = useState(false);

  const handleAnswerClick = (e) => {
    setIsAnswerChosen(true);
    if (e.target.id == correctAnswerId) {
      setIsEncorrectAnswerChosen(false);
      if (level < 12) {
        setLevel((prev) => prev + 1);
      } else {
        endCourse();
      }
      setTimeout(() => {
        setIsShowQuiz((prev) => !prev);
      }, 2000);
    } else {
      setIsEncorrectAnswerChosen(true);
      setTimeout(() => {
        setIsShowQuiz((prev) => !prev);
      }, 2000);
    }
  };

  const answersElement = answers.map((answer) => (
    <div
      key={answer.id}
      id={answer.id}
      onClick={handleAnswerClick}
      className="answer"
    >
      {answer.text}
    </div>
  ));

  const endCourse = () => {
    console.log("end!");
  };
  const handleVideoEnds = () => {
    setIsShowQuiz(true);
    setIsVideoPlay(false);
  };

  const handleVideoPlays = () => {
    setIsAnswerChosen(false);
    setIsVideoPlay(true);
  };
  return (
    <Fragment>
      {
        <div className="question-container">
          {!isAnswerChosen && (
            <div className="headline">
              {id}-{title}
            </div>
          )}

          {isShowQuiz ? (
            <Quiz
              text={text}
              answersElement={answersElement}
              isEncorrectAnswerChosen={isEncorrectAnswerChosen}
              isAnswerChosen={isAnswerChosen}
            />
          ) : (
            <Video
              handleVideoEnds={handleVideoEnds}
              handleVideoPlays={handleVideoPlays}
              video_url={video_url}
              isVideoPlay={isVideoPlay}
            />
          )}
        </div>
      }
    </Fragment>
  );
};

export default Question;
