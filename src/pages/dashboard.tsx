import AddComment from "@/components/AddComment";
import IconMultiplier from "@/components/IconMultiplier";
import RecipeItem from "@/components/Recipe/RecipeItem";
import { Recipe, calculateAverageRating } from "@/components/Recipe/RecipeList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// {recipe.preptime} need to change format (1h 15min)
// need to check that a user can see only his/her recipes

const Dashboard = () => {
  const [recipes, setRecipe] = useState<Recipe[] | null>(null);

  useEffect(() => {
    const getRecipesFromApi = async () => {
      const response = await fetch(`http://localhost:3001/recipes`);
      const data = await response.json();
      setRecipe(data);
    };

    getRecipesFromApi();
  }, []);

  if (!recipes) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <div className="header">
        <img src="/backgroundImages/dashboard-img.svg" />
      </div>
      <ul>
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
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
            <div className="preptime">
              <h4>Prep Time</h4>
              {recipe.preptime}
            </div>
            <div className="serves">
              <h4>Serves</h4>
              <IconMultiplier
                amount={recipe.serves ? recipe.serves : 0}
                icon="/serves.svg"
              />
            </div>
          </div>
        ))}
      </ul>

      <div className="footer"></div>
    </div>
  );
};

export default Dashboard;
