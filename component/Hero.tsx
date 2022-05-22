import React from "react";

function Hero() {
  return (
    <section className="banner-area relative" id="home">
      <div className="overlay overlay-bg"></div>
      <div className="container">
        <div className="row fullscreen d-flex align-items-center justify-content-center">
          <div className="banner-content col-lg-10">
            <h5 className="text-uppercase">Now you can watch the Talent</h5>
            <h1>Let’s Explore Idea!</h1>
            <a href="#" className="primary-btn text-uppercase">
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
