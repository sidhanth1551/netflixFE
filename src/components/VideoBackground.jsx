import React from "react";
import useMovieTrailer from "../customHooks/useMovieTrailer";
import "../css/videoBackground.css";
const VideoBackground = ({ movieId }) => {
    console.log('movieId',movieId)
  const trailer = useMovieTrailer(movieId);
  return (
    <>
      {trailer && (
        <div className="vb-box1">
                  <div className="vb-box2"></div>
          <iframe
            src={"https://www.youtube.com/embed/" + trailer?.key+"?&autoplay=1&mute=0"}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
                <div className="vb-box3"></div>
        </div>
      )}

    </>
  );
};

export default VideoBackground;
