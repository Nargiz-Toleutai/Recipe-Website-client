import { Recipe } from "@/components/Recipe/RecipeList";
import { response } from "express";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const RecipeEdit = () => {
  const router = useRouter();
  const id = router.query.id;
  const [editRecipe, setEditRecipe] = useState<Recipe | null>(null);

  const updateRecipe = () => {
    if (id === undefined) {
      return;
    }
    const onSubmitTheForm = (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      const patchData = {
        name: recipeName,
        instructions: instructions,
        ingredients: ingredients,
        preptime: preptime,
        serves: serves,
        image_URL: imageURL,
        category: category,
      };

      const getRecipeFromApi = async () => {
        const response: Response = await fetch(
          `http://localhost:3001/recipes/${id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patchData),
          }
        );
        const data = await response.json();
        console.log(data);
        //   setEditRecipe(data);
      };
      getRecipeFromApi();
    };

    //   if (!editRecipe) {
    //     return <div>Loading ...</div>;
    //   }
  };
  return (
    <form>
      <label htmlFor="recipeName"> Recipe name</label>
      <button onClick={() => updateRecipe()}>Update!</button>
    </form>
  );
};

export default RecipeEdit;
