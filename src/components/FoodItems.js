import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import nextId from "react-id-generator";

const FoodItems = () => {
  const API_ID = "14abc67b";
  const API_KEY = "e45fb3b75f57fa0c8d850cb193f61a11";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=salad&app_id=${API_ID}&app_key=${API_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
  };
  return (
    <div className="container recipe text-center d-flex flex-wrap justify-content-center mt-10 mb-4">
      {recipes.map((recipe) => (
        <Recipe
          key={nextId()}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          healthLabels={recipe.recipe.healthLabels}
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url}
        />
      ))}
    </div>
  );
};

export default FoodItems;
