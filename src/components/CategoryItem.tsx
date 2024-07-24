import { useState } from "react";

export interface Category {
  id?: number;
  name: string;
  icon: string;
  onClick: () => void;
  isSelected: boolean;
}

const CategoryItem = ({ name, icon, isSelected, onClick }: Category) => {
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
