import express from "express";
const router = express.Router();
import {
  getAllRecipes,
  postRecipe,
  saveRecipe,
  getSavedRecipes,
} from "../controllers/recipeController.js";

//Get all recipes
router.get("/", getAllRecipes);
router.post("/", postRecipe);
router.put("/", saveRecipe);
router.get("/savedRecipes/ids", getSavedRecipes);

export { router as recipesRouter };
