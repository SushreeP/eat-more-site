import React from "react";

const Carousel = () => {
  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-12">
          <div
            id="mycarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="3500"
            data-pause="false"
          >
            {/* indictaors dot nav */}

            {/* wrapper for slides */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 bg-center"
                  src={`${process.env.PUBLIC_URL}/assets/carousel-4.jpg`}
                  alt="slider 1"
                />
                <div className="carousel-caption text-light">
                  <p className="welcome-text">Welcome to Cafe Eat More!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/assets/carousel-2.jpg`}
                  alt="slider 2"
                />
                <div className="carousel-caption text-info">
                  <p className="heading">Let us help you ..</p>
                  <p className="content">
                    Healthy eating should never get boring!
                    <br /> We keep variety. What color bowl do you choose today?
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/assets/carousel-3.jpg`}
                  alt="slider 3"
                />
                <div className="carousel-caption text-info">
                  <p className="heading">Good food good life!</p>
                  <p className="content">
                    Don't skip a meal! Just change the meal! Replace processed
                    food with veggies, sugar with honey, one item at a time.
                    Make it a habit than a diet.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={`${process.env.PUBLIC_URL}/assets/carousel-pr.jpg`}
                  alt="slider 2"
                />
                <div className="carousel-caption text-success">
                  <p className="heading">Any meal only at</p>
                  <h2>2.49</h2>
                  <p className="content">
                    PLUS unlimited hot beverages, only for our members.
                  </p>
                  <span className="animated flash">HURRY UP!!!</span>
                </div>
              </div>
            </div>
            {/* controls for next and prev */}
            <a
              className="carousel-control-prev"
              href="#mycarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#mycarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
