import { useState, ChangeEvent } from "react";
import { Recipe } from "./Recipe/RecipeList";
import RecipeItem from "./Recipe/RecipeItem";
import { Comment } from "./Recipe/RecipeList";

interface SearchInputProps {
  recipes: Recipe[];
  onSearch: (query: string) => void;
}

const calculateAverageRating = (comments: Comment[]): number => {
  if (comments.length === 0) return 0;
  const totalRating = comments.reduce(
    (acc, comment) => acc + comment.rating,
    0
  );
  return totalRating / comments.length;
};

const SearchInput = ({ recipes }: SearchInputProps) => {
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
            <ul key={recipe.id}>
              <RecipeItem
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
            </ul>
          ))}
      </div>
    </>
  );
};

export default SearchInput;
