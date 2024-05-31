import { ChangeEvent, FormEvent, useState } from "react";
const addRecipe = () => {
  const [recipeName, setRecipeName] = useState<string>();
  const [instructions, setInstructions] = useState<string>();
  const [ingredients, setIngredients] = useState<string>();
  const [preptime, setPreptime] = useState<number>();
  const [serves, setServes] = useState<number>();
  const [imageURL, setImageURL] = useState<string>();
  const [category, setCategory] = useState<string>();

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setRecipeName(event.target.value);
  };
  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInstructions(event.target.value);
  };
  const onChangeInput3 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setIngredients(event.target.value);
  };
  const onChangeInput4 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPreptime(Number(event.target.value));
  };
  const onChangeInput5 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setServes(Number(event.target.value));
  };
  const onChangeInput6 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setImageURL(event.target.value);
  };
  const onChangeInput7 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };

  const onSubmitTheForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      name: recipeName,
      instructions: instructions,
      ingredients: ingredients,
      preptime: preptime,
      serves: serves,
      image_URL: imageURL,
      category: category,
    };
    try {
      const result = await fetch("http://localhost:3001/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      await result.json();
    } catch (error) {
      console.error("Something went wrong!");
    }
  };
  return (
    <>
      <form onSubmit={onSubmitTheForm} className="add-new-recipe-page">
        <label htmlFor="recipeName">Recipe name</label>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          onChange={onChangeInput}
          value={recipeName}
        />
        <label htmlFor="instructions">Instructions</label>
        <input
          type="text"
          id="instructions"
          name="instructions"
          onChange={onChangeInput2}
          value={instructions}
        />
        <label htmlFor="ingredients">Ingredients</label>
        <input
          type="text"
          id="ingredients"
          name="ingredients"
          onChange={onChangeInput3}
          value={ingredients}
        />
        <label htmlFor="prepTime">Prep Time</label>
        <input
          type="text"
          id="prepTime"
          name="preptime"
          onChange={onChangeInput4}
          value={preptime}
        />
        <label htmlFor="serves">serves</label>
        <input
          type="text"
          id="serves"
          name="serves"
          onChange={onChangeInput5}
          value={serves}
        />
        <label htmlFor="imageURL">imageURL</label>
        <input
          type="text"
          id="imageURL"
          name="imageURL"
          onChange={onChangeInput6}
          value={imageURL}
        />
        <label htmlFor="category">Categories</label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={onChangeInput7}
          value={category}
        />
        <button type="submit" className="addRecipeButton">
          Create
        </button>
      </form>
    </>
  );
};
export default addRecipe;
