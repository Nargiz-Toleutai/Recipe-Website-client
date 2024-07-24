import React from "react";

import AddRecipeButton from "@/components/buttons/AddRecipeButton";

import RecipeList from "./Recipe/RecipeList";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className="header">
        <img src="/backgroundImages/home-page-img.svg" alt="home-page-img" />
        <h1>Home Chef Recipes</h1>
      </div>
      <RecipeList />
      <div className="footer">
        <AddRecipeButton />
      </div>
    </Layout>
  );
};

export default HomePage;
