import React from "react";
import "../css/videoTitle.css";
const VideoTitle = ({ title, description }) => {
  return (
    <div>
      <div className="vt-box1">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="btngrp">
          <button style={{opacity:1,backgroundColor:'white',color:'black'}}> ▶️ Play</button>
          <button>More Info</button>
        </div>
       </div>
    </div>
  );
};

export default VideoTitle;
