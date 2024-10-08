import React, { useEffect, useState } from "react";

import { Category } from "../CategoryItem/types";
import Recipes from "../Recipes";
import { Recipe } from "./types";
import CategoryItem from "../CategoryItem/CategoryItem";

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const result = await fetch("http://localhost:3001/recipes");
        const recipesData = await result.json();
        setRecipes(recipesData);
        setFilteredRecipes(recipesData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    const getCategories = async () => {
      try {
        const result = await fetch("http://localhost:3001/categories");
        const categoriesData = await result.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getRecipes();
    getCategories();
  }, []);

  const filterByCategory = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const filteredCategory = recipes.filter((recipe) =>
      recipe.categories?.some(
        (recipeCategory) => recipeCategory.name === categoryName
      )
    );
    setFilteredRecipes(filteredCategory);
  };

  const handleInputChange = (query: string) => {
    setSearchQuery(query);
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  console.log({ categories });

  return (
    <div className="recipes-list-container">
      <div className="categories">
        <h2>Recipes</h2>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            name={category.name}
            icon={category.icon}
            isSelected={selectedCategory === category.name}
            onClick={() => filterByCategory(category.name)}
          />
        ))}
      </div>
      <div className="recipes">
        <Recipes recipes={filteredRecipes} onSearch={handleInputChange} />
      </div>
    </div>
  );
};

export default RecipeList;
