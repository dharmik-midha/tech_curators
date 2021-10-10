import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Camera = () => {
  const HEIGHT = 260;
  const WIDTH = 330;

  navigator.mediaDevices.getUserMedia({audio: false, video: true})
  .then(mediaStream => {
    document.querySelector('.app__videoFeed').srcObject = mediaStream;});
    // Stop the stream after 5 seconds
    // setTimeout(() => {
    //   const mediaStream=document.querySelector('.app__videoFeed').srcObject ;
    //   const tracks = mediaStream.getTracks()
    //   tracks[0].stop()
    // }, 5000)
  

  return (
    <div className="app d-flex flex-column justify-content-center align-items-center">
      <div className="app__container w-100">
        <video
          height={HEIGHT}
          width={WIDTH}
          muted
          autoPlay
          className="app__videoFeed"
        ></video>
      </div>
    </div>
  );
  };

export default Camera;
