import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

export const getAllRecipes = async (req, res) => {
  try {
    const response = await RecipeModel.find({}); //empty object in find means to return all docs
    res.json(response);
  } catch (err) {
    res.json(err);
  }
};

export const postRecipe = async (req, res) => {
  const recipe = new RecipeModel(req.body);
  try {
    const response = await recipe.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const saveRecipe = async (req, res) => {
  const recipe = await RecipeModel.findById(req.body.recipeId);
  const user = await UserModel.findById(req.body.usedId);
  try {
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({
      savedRecipes: user.savedRecipes,
    });
  } catch (err) {
    res.json(err);
  }
};

export const getSavedRecipes = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    res.json({
      savedRecipes: user?.savedRecipes,
    });
  } catch (err) {
    res.json(err);
  }
};

export const getRecipe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    const savedRecipes = await RecipeModel.find({
      _id: {
        $in: user.savedRecipes,
      },
    });
    res.json({
      savedRecipes,
    });
  } catch (err) {
    res.json(err);
  }
};
