import React, { useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const userId = useGetUserId();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageURL: "",
    cookingTime: 0,
    userOwner: userId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, ""],
    });
  };

  const handleIngredientChange = (e, index) => {
    const { value } = e.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe({
      ...recipe,
      ingredients,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipes", recipe);
      console.log("Recipe Created", recipe);
      setRecipe({
        name: "",
        ingredients: [],
        instructions: "",
        imageURL: "",
        cookingTime: 0,
        userOwner: userId,
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleChange} />

        <label htmlFor="ingredients">Ingredients</label>
        <button onClick={addIngredient} type="button">
          Add Ingredients
        </button>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        <label>Instructions</label>
        <textarea
          name="instructions"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>

        <label htmlFor="imageURL">imageURL</label>
        <input type="text" name="imageURL" onChange={handleChange} />

        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input type="number" name="cookingTime" onChange={handleChange} />

        <button>Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
