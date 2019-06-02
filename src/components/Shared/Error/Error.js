import React from "react";
import "./Error.scss";
import Header from "../Header/Header"

function Error() {
  return (
    <div className="Error">
      <Header />
      <div className = "error-content">
      
        <h1>404 Page Not Found</h1>
        
        <video muted autoPlay="autoPlay" playsInline="playsInline" className="video-tag">
          <source src="https://developers4good.s3.us-east-2.amazonaws.com/bucketFolder/final_gandalf.mp4" />
        </video>

      </div>

    </div>
  );
}

export default Error;