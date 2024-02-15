import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero-heading">
        {" "}
        <span className="heading-bg">WELCOME TO WATCHLIST</span>
      </div>
      <div className="hero-txt">
        {" "}
        Where your reviews are as important as the critics. Loved a tv show you
        watched recently? Or was it enough to put you to sleep -{" "}
        <span className="sleep">Zzzz</span>. Either way, share it here. <br />{" "}
        <span className="cta-txt">
          {" "}
          Search for a tv show below to get started!
        </span>{" "}
        ↴{" "}
      </div>
      <video
        muted
        autoPlay
        loop
        className="hero-vid"
        onClick={handleClick}
        src="src/assets/hero-video.mp4"
        title="hero-video"
      ></video>
    </div>
  );
};

const handleClick = (event) => {
  if (event.target.paused) {
    event.target.play();
  } else {
    event.target.pause();
  }
};

export default Hero;
