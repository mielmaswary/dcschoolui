import React, { Fragment } from "react";

const Video = (props) => {
  const { handleVideoEnds, handleVideoPlays, video_url } = props;
  return (
    <Fragment>
      <video
        onPlay={handleVideoPlays}
        onEnded={handleVideoEnds}
        className="course-video"
        autoPlay="autoplay"
        controls
      >
        <source src={video_url} />
      </video>
      <div className="question-text"> שאלת מבחן תופיע כאן בסוף הסרטון... </div>
    </Fragment>
  );
};

export default Video;
