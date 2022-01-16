import React from "react";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { add_item } from "../actions";

const Recipe = ({ title, calories, image, healthLabels, ingredients, url }) => {
  const dispatch = useDispatch();

  const healthBadges = healthLabels.map((item) => (
    <span className="badge badge-pill badge-dark mr-1" key={nextId()}>
      {item}
    </span>
  ));
  return (
    <div>
      <div className="recipe-card mr-sm-1 mr-lg-3 mb-1">
        <div className="recipe-image">
          <div className="healthBadges overflow-hidden">
            <div className="h-100 w-100 p-2 overflow-hidden">
              <span>{healthBadges}</span>
            </div>
          </div>
          <img src={image} alt="dishes" />
        </div>
        <a href={url} className="font-weight-bold">
          <p className="m-0 pl-1 pr-1">{title}</p>
        </a>
        <p className="m-0 pl-1 pr-1">{calories.toFixed(0)} Cal</p>
        <div
          className="btn btn-info d-block bottom-0 m-0"
          onClick={() => dispatch(add_item(title))}
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default Recipe;
