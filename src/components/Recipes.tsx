import { useState } from "react";
import { Recipe } from "./Recipe/RecipeList";
import RecipeCard from "./buttons/RecipeCard";
import { calculateAverageRating } from "../../utils";

interface SearchInputProps {
  recipes: Recipe[];
  onSearch: (query: string) => void;
}

const Recipes = ({ recipes }: SearchInputProps) => {
  const [inputValue, setValue] = useState<string>("");

  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search For Recipes..."
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="recipes-body">
        {recipes
          .filter((recipe) => {
            if (recipe.name.toLowerCase().includes(inputValue.toLowerCase())) {
              return true;
            } else {
              return false;
            }
          })
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              rating={
                recipe.comments?.length
                  ? calculateAverageRating(recipe.comments)
                  : 0
              }
              id={recipe.id}
              image={
                recipe.image_URL
                  ? recipe.image_URL
                  : "/backgroundImages/img-not-found.jpg"
              }
            />
          ))}
      </div>
    </>
  );
};

export default Recipes;
