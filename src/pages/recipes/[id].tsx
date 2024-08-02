import AddComment from "@/components/AddComment";
import CommentCard from "@/components/CommentCard";
import IconMultiplier from "@/components/IconMultiplier";
import Layout from "@/components/Layout";
import NavigationBar from "@/components/NavBar/NavBar";
import { Recipe } from "@/components/Recipe/RecipeList";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { calculateAverageRating } from "../../../utils";

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

  return (
    <Layout>
      <div className="recipe-page">
        <div className="header">
          <img src={recipe.image_URL} />
        </div>

        <div className="recipe-info">
          <h1>{recipe.name}</h1>
          <h3>{recipe.categories?.map((category) => category.name)}</h3>
          <div className="recipe-rating">
            {recipe.comments?.length && (
              <IconMultiplier
                amount={calculateAverageRating(recipe.comments)}
                icon={"/review-star.svg"}
              />
            )}
          </div>
        </div>

        <div className="recipe-page-body">
          <div className="recipe-page-body-header">
            <h1>{recipe.name}</h1>
            <div className="details">
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
          </div>
          <hr />
          <div className="recipe-description">
            <div className="instructions">
              <h2>Instructions</h2>
              <p>{recipe.instructions}</p>
            </div>
            <div className="ingredients">
              <h2>Ingredients</h2>
              <p>{recipe.ingredients}</p>
            </div>
          </div>
        </div>
        <div className="recipe-add-comment">
          <h1>Add a Comment</h1>
          <AddComment recipeId={recipe.id} fetchRecipe={getRecipeFromApi} />
        </div>

        <div className="footer">
          {recipe.comments?.length && (
            <CommentCard comments={recipe.comments} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default RecipeDetails;
