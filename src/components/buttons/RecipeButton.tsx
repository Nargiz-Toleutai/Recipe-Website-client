import Link from "next/link";
import { RecipeItemProps } from "./../Recipe/RecipeItem";
import IconMultiplier from "../IconMultiplier";

const RecipeButton = ({ id, image, name, rating }: RecipeItemProps) => {
  return (
    <Link href={`/recipes/${id}`} className="recipe-button">
      <div className="recipe-item-info-block">
        <h3>{name}</h3>
        <IconMultiplier amount={rating} icon={"/review-star.svg"} />
      </div>
      <img src={image} alt={`${name}-img`} />
    </Link>
  );
};

export default RecipeButton;
