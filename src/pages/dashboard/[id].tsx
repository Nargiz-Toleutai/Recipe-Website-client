import AddComment from "@/components/AddComment";
import IconMultiplier from "@/components/IconMultiplier";
import NavigationBar from "@/components/NavBar/NavBar";
import RecipeItem from "@/components/Recipe/RecipeItem";
import { Recipe } from "@/components/Recipe/RecipeList";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface RecipeComment {
  rating: number;
}

const Dashboard = () => {
  const router = useRouter();
  const userId = router.query.id;

  const [recipes, setRecipe] = useState<Recipe[] | null>(null);

  useEffect(() => {
    const getUsersRecipesFromApi = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await fetch(
        `http://localhost:3001/dashboard/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.error("Failed to fetch recipes");
        return;
      }

      const data = await response.json();
      setRecipe(data);
    };

    if (userId) {
      getUsersRecipesFromApi();
    }
  }, [userId]);

  if (!recipes) {
    return <div>Loading ...</div>;
  }

  const calculateAverageRating = (comments: RecipeComment[]): number => {
    if (comments.length === 0) return 0;
    const totalRating = comments.reduce(
      (acc, comment) => acc + comment.rating,
      0
    );
    return totalRating / comments.length;
  };

  console.log(recipes.map((it) => it.id));

  return (
    <div className="dashboard-page">
      <NavigationBar />
      <h1>Dashboard</h1>
      <div className="header">
        <img src="/backgroundImages/dashboard-img.svg" alt="Dashboard" />
      </div>
      <ul>
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <RecipeItem
              id={recipe.id}
              name={recipe.name}
              preptime={recipe.preptime}
              serves={recipe.serves}
              rating={
                recipe.comments?.length
                  ? calculateAverageRating(recipe.comments)
                  : 0
              }
              image={
                recipe.image_URL
                  ? recipe.image_URL
                  : "/backgroundImages/img-not-found.jpg"
              }
              button={true}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
