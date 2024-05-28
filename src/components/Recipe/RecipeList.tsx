import React, { useEffect, useState } from "react";
import SearchInput from "../SearchInput";
import RecipeItem from "./RecipeItem";

interface Recipe {
  id: number;
  name: string;
  serves?: number;
  preptime?: number;
  image?: string;
  comments: Comment[];
}

interface Comment {
  rating: number;
}

interface Category {
  id: number;
  name: string;
  icon: string;
}

const CategoryItem = ({ name, icon }: Category) => {
  return (
    <button>
      <label>{icon}</label>
      <h3>{name}</h3>
    </button>
  );
};

export const calculateAverageRating = (comments: Comment[]): number => {
  if (comments.length === 0) return 0;
  const totalRating = comments.reduce(
    (acc, comment) => acc + comment.rating,
    0
  );
  return totalRating / comments.length;
};

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const result = await fetch("http://localhost:3001/recipes");
        const recipesData = await result.json();
        setRecipes(recipesData);
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

  return (
    <div className="home-page">
      <div className="header">
        <h1>Home Chef Recipes</h1>
        <img src="/backgroundImages/home-page-img.svg" alt="home-page-img" />
      </div>
      <div className="body">
        <div className="categories">
          <h2>Recipes</h2>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              name={category.name}
              icon={category.icon}
              id={category.id}
            />
          ))}
        </div>
        <div className="recipes">
          <SearchInput defaultValue={null} />
          <ul>
            {recipes.map((recipe) => (
              <RecipeItem
                key={recipe.id}
                name={recipe.name}
                rating={calculateAverageRating(recipe.comments)}
                id={recipe.id}
                image={
                  recipe.image
                    ? recipe.image
                    : "/backgroundImages/img-not-found.jpg"
                }
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <button>
          <h1>Add New Recipe</h1>
          <img src="/buttonImage/add-new-recipe-button-img.svg" />
        </button>
      </div>
    </div>
  );
};

export default RecipeList;