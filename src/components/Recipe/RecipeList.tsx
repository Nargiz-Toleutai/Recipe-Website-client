import React, { useEffect, useState } from "react";
import SearchInput from "../SearchInput";
import RecipeItem from "./RecipeItem";
import AddRecipeButton from "../buttons/AddRecipeButton";

export interface Recipe {
  id: number;
  name: string;
  serves?: number;
  preptime?: number;
  image_URL?: string;
  comments?: Comment[];
  categories?: Category[];
  instructions?: string;
  ingredients?: string;
}

interface Comment {
  rating: number;
}

interface Category {
  id: number;
  name: string;
  icon: string;
  onClick: () => void;
}

const CategoryItem = ({ name, icon, onClick }: Category) => {
  return (
    <button onClick={onClick}>
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
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState(recipes);
  const [filteredData, setFilteredData] = useState<Recipe[]>([]);

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
    const filteredCategory = recipes.filter((recipe) =>
      recipe.categories?.some(
        (recipeCategory) => recipeCategory.name === categoryName
      )
    );
    setFilteredRecipes(filteredCategory);
  };

  // const handleInputChange = (e) => {
  //   const query = e.target.value;
  //   setSearchQuery(query);

  //   const filtered = recipes.filter((recipe) =>
  //     recipe.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setFilteredData(filtered);
  // };

  console.log(filteredData);

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
              onClick={() => filterByCategory(category.name)}
            />
          ))}
        </div>
        <div className="recipes">
          {/* <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search For Recipes..."
          />
          <ul>
            {filteredData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}

          <ul>
            {filteredRecipes.map((recipe) => (
              <RecipeItem
                key={recipe.id}
                name={recipe.name}
                rating={calculateAverageRating(
                  recipe.comments ? recipe.comments : []
                )}
                id={recipe.id}
                image={
                  recipe.image_URL
                    ? recipe.image_URL
                    : "/backgroundImages/img-not-found.jpg"
                }
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <AddRecipeButton />
      </div>
    </div>
  );
};

export default RecipeList;
