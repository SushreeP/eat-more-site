import React from "react";
import Person from "./Person";

const AboutUs = () => {
  return (
    <div className="container pl-30 pr-30">
      <p className="title text-center m-1">About Us</p>
      <p className="about-text m-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in
        nibh nibh. Nam vestibulum lacus tortor, a tincidunt ante vestibulum at.
        Aliquam efficitur sapien sed lacus feugiat ullamcorper.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent in nibh nibh. Nam vestibulum lacus
        tortor,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        in nibh nibh. Nam vestibulum lacus tortor.
      </p>
      <div>
        <Person />
      </div>
    </div>
  );
};

export default AboutUs;
