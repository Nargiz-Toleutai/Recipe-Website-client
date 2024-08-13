import { useState } from "react";
import { Category } from "./types";

export interface CategoryItemProps extends Category {
  onClick: () => void;
  isSelected: boolean;
}

const CategoryItem = ({
  name,
  icon,
  isSelected,
  onClick,
}: CategoryItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`category-item-button ${isSelected ? "selected" : ""}`}
    >
      <label>{icon}</label>
      <h3>{name}</h3>
    </button>
  );
};

export default CategoryItem;
