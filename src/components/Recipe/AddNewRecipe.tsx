import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/router";
import { Recipe } from "./types";
import Input from "../Input";
import { Category } from "../CategoryItem/types";
import Layout from "../Layout";

const AddNewRecipe = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [recipeName, setRecipeName] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [prepTime, setPrepTime] = useState<number>();
  const [serves, setServes] = useState<number>();
  const [image, setImage] = useState<string>("");
  const [authError, setAuthError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      setAuthError("You are not authorized. Redirecting to login...");
      router.push("/login");
      return;
    }

    const fetchCategories = async () => {
      try {
        const responseCategories = await fetch(
          `http://localhost:3001/categories`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        if (!responseCategories.ok) {
          throw new Error("Network response was not ok");
        }

        setCategories(await responseCategories.json());
      } catch (error) {
        console.error("Failed to fetch categories", error);
        setAuthError("Something went wrong. Please try again later.");
      }
    };

    fetchCategories();
  }, [router]);

  const onSubmitTheForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const storedToken = localStorage.getItem("token");

    const data: Recipe = {
      id: 0,
      name: recipeName,
      serves,
      preptime: prepTime,
      image_URL: image,
      instructions,
      ingredients,
      categories: selectedCategory
        ? [categories.find((cat) => cat.id.toString() === selectedCategory)!]
        : [],
    };

    try {
      const response = await fetch(`http://localhost:3001/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${storedToken}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  return authError ? (
    <p className="text-red-500">{authError}</p>
  ) : (
    <Layout>
      <form onSubmit={onSubmitTheForm} className="comment-form">
        <Input
          onChange={(event) => setRecipeName(event.target.value)}
          name={"Recipe Name"}
          id={"recipeName"}
          type={"text"}
          value={recipeName}
        />
        <Input
          onChange={(event) => setInstructions(event.target.value)}
          name={"Instructions"}
          id={"instructions"}
          type={"text"}
          value={instructions}
        />
        <Input
          onChange={(event) => setIngredients(event.target.value)}
          name={"Ingredients"}
          id={"ingredients"}
          type={"text"}
          value={ingredients}
        />
        <div>
          <Input
            onChange={(event) => setPrepTime(Number(event.target.value))}
            name={"Prep Time"}
            id={"prepTime"}
            type={"number"}
            value={prepTime}
          />
          <Input
            onChange={(event) => setServes(Number(event.target.value))}
            name={"Serves"}
            id={"serves"}
            type={"number"}
            value={serves}
          />
        </div>
        <Input
          onChange={(event) => setImage(event.target.value)}
          name={"Image URL"}
          id={"imageURL"}
          type={"text"}
          value={image}
        />
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Save</button>
      </form>
    </Layout>
  );
};

export default AddNewRecipe;
