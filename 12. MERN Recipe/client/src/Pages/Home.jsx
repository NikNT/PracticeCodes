import React, { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const userId = useGetUserId();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        const data = response.data;
        setRecipes(response.data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipes();
  }, []);

  const saveRecipe = async (recipeId) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeId,
        userId,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button onClick={() => saveRecipe(recipe._id)}>Save</button>
            </div>
            <div className="instructions">
              <p>{recipe.instruction || recipe.instructions}</p>
            </div>
            <img src={recipe.imageURL} alt={recipe.name} />
            <p>Ingredients : {recipe.ingredients}</p>
            <p>Cooking Time : {recipe.cookingTime} Minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
