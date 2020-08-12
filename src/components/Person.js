import React, { useEffect, useState } from "react";

const Person = () => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const personlist = [
      {
        image: require("../personimages/person-1.jpg"),
        key: "Owner",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nibh nibh. Nam vestibulum lacus tortor.",
      },
      {
        image: require("../personimages/person-2.jpg"),
        key: "Barishta",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nibh nibh. Nam vestibulum lacus tortor.",
      },
      {
        image: require("../personimages/person-3.jpg"),
        key: "Chef",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nibh nibh. Nam vestibulum lacus tortor.",
      },
    ];
    setPerson(personlist);
  }, []);

  const personcards = person.map((person) => (
    <div className="person mb-1 ml-auto mr-auto" key={person.key}>
      <div className="p-0 m-0">
        <img src={person.image} alt="people" className="person-img" />
      </div>
      <div className="person-detail pt-2 mb-0">
        <h6>{person.key}</h6>
        <p className="p-0">{person.details}</p>
      </div>
    </div>
  ));
  return <div className="mb-5 mt-5 personcards">{personcards}</div>;
};

export default Person;
