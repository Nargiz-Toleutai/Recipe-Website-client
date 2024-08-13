import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "../Layout";

const RecipeValidator = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name should be a minimum of 2 characters" }),
    instructions: z
      .string()
      .min(5, { message: "You need to add instructions" }),
    ingredients: z.string().min(5, { message: "You need to add ingredients" }),
    preptime: z
      .number()
      .int()
      .min(1, { message: "Preparation time must be at least 1 minute" }),
    serves: z
      .number()
      .int()
      .min(1, { message: "Serves must be at least for 1 person" }),
    image_URL: z.string().url({ message: "Invalid URL for image" }),
    categories: z
      .array(
        z.object({
          id: z.number().int().min(1, { message: "Invalid category ID" }),
        })
      )
      .nonempty({ message: "You need to add at least one category" }),
  })
  .strict();

interface Recipe {
  name: string;
  preptime: number;
  serves: number;
  image_URL: string;
  instructions: string;
  ingredients: string;
  categories: { id: number }[];
}

const AddNewRecipe = () => {
  const form = useForm<Recipe>({
    resolver: zodResolver(RecipeValidator),
  });

  const {
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = form;
  return <Layout></Layout>;
};

export default AddNewRecipe;
