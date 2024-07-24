import React from "react";
import RecipeCard from "./RecipeCard";
import { Meta, StoryObj } from "@storybook/react";
import { RecipeItemProps } from "../Recipe/RecipeItem";

const meta: Meta<typeof RecipeCard> = {
  title: "Button",
  component: RecipeCard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    id: 1,
    image: "/example-image.jpg",
    name: "Example Recipe",
    rating: 4,
    preptime: 30,
    serves: 2,
  },
};
