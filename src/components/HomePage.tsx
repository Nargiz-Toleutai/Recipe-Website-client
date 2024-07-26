import React from "react";

import AddRecipeButton from "@/components/buttons/AddRecipeButton";

import RecipeList from "./Recipe/RecipeList";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header">
        <img src="/backgroundImages/home-page-img.svg" alt="home-page-img" />
        <h1>Home Chef Recipes</h1>
      </div>

      <RecipeList />

      <div className="footer">
        <AddRecipeButton />
      </div>
    </div>
  );
};

// className="header"

export default HomePage;
