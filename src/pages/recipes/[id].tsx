import AddComment from "@/components/AddComment";
import CommentCard from "@/components/CommentCard";
import IconMultiplier from "@/components/IconMultiplier";
import NavigationBar from "@/components/NavBar/NavBar";
import { Recipe } from "@/components/Recipe/RecipeList";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

// {recipe.preptime} need to change format (1h 15min)

const RecipeDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const getRecipeFromApi = useCallback(async () => {
    const response = await fetch(`http://localhost:3001/recipes/${id}`);
    const data = await response.json();
    console.log("FETCHED RECIPE AGAIN!", data);
    setRecipe(data);
  }, [id]);

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    getRecipeFromApi();
  }, [id, getRecipeFromApi]);

  if (!recipe) {
    return <div>Loading ...</div>;
  }

  console.log(recipe);

  return (
    <div className="recipe-page">
      <NavigationBar />
      <div className="header">
        <img src={recipe.image_URL} />
        <h1>{recipe.name}</h1>
        <h3>{recipe.categories?.map((category) => category.name)}</h3>
      </div>

      <div className="body">
        <div className="body-header">
          <div className="serves">
            <h4>Serves</h4>
            <IconMultiplier
              amount={recipe.serves ? recipe.serves : 1}
              icon={"/serves.svg"}
            />
          </div>
          <div className="preptime">
            <h4>Prep Time</h4>
            {recipe.preptime}
          </div>
        </div>
        <div className="instructions">
          <h2>Instructions</h2>
          <p>{recipe.instructions}</p>
        </div>
        <div className="ingredients">
          <h2>Ingredients</h2>
          <p>{recipe.ingredients}</p>
        </div>
      </div>
      <AddComment recipeId={recipe.id} fetchRecipe={getRecipeFromApi} />
      <div className="footer">
        {recipe.comments?.length && <CommentCard comments={recipe.comments} />}
      </div>
    </div>
  );
};

export default RecipeDetails;
