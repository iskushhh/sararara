import React from "react";
import "./yes.css";
import celebrationVideo from "./celebration-video.mp4";

export default function Yes() {
  return (
    <div className="yes-container">
      <h1>Yaaayyyyyyyyyy!!</h1>

      <div className="video-wrapper">
        <video
          className="reel-video"
          src={celebrationVideo}
          autoPlay
          loop
          playsInline
          controls={false} // remove default controls
        />
      </div>
    </div>
  );
}
