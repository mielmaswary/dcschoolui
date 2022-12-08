import React, { useEffect } from "react";
import ReactPlayer from "react-player";
const Question = (props) => {
  const { title, video_url, text, answer_summery } = props.question;

  return (
    <div className="main-container">
      <h2>{title}</h2>

      <iframe
        className="course-video"
        src="https://storage.googleapis.com/academy-dreamclub-co-il/videos/blimat_herom_veithamkot.mp4"
      ></iframe>
      <div>שאלה: {text}</div>
      <div>{answer_summery}</div>
    </div>
  );
};

export default Question;
