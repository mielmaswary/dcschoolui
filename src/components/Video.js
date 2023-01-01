import React, { Fragment } from "react";
import Button from "../components/Button";
const Video = (props) => {
  const { handleVideoEnds, handleVideoPlays, video_url, isVideoPlay } = props;
  const playVideo = () => {
    document.getElementById("video").play();
  };

  return (
    <Fragment>
      <video
        id="video"
        onPlay={handleVideoPlays}
        onEnded={handleVideoEnds}
        controls={false}
        className="course-video"
      >
        <source src={video_url} />
      </video>
      {isVideoPlay ? (
        <div className="question-text"> שאלת מבחן בסוף </div>
      ) : (
        <Button submitForm={playVideo} text={"הפעל סרטון"}></Button>
      )}
    </Fragment>
  );
};

export default Video;
