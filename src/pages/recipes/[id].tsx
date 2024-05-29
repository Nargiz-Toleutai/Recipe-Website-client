import AddComment from "@/components/AddComment";
import IconMultiplier from "@/components/IconMultiplier";
import { Recipe } from "@/components/Recipe/RecipeList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// {recipe.preptime} need to change format (1h 15min)

const RecipeDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    const getRecipeFromApi = async () => {
      const response = await fetch(`http://localhost:3001/recipes/${id}`);
      const data = await response.json();
      setRecipe(data);
    };

    getRecipeFromApi();
  }, [id]);

  if (!recipe) {
    return <div>Loading ...</div>;
  }

  console.log(recipe);

  return (
    <div className="recipe-page">
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
      <AddComment />
      <div className="footer"></div>
    </div>
  );
};

export default RecipeDetails;
