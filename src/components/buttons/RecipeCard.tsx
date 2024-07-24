import Link from "next/link";
import { RecipeItemProps } from "../Recipe/RecipeItem";
import IconMultiplier from "../IconMultiplier";

const RecipeCard = ({
  id,
  image,
  name,
  rating,
  preptime,
  serves,
}: RecipeItemProps) => {
  return (
    <Link href={`/recipes/${id}`}>
      <div className="recipe-item-info-block">
        <h3>{name}</h3>
        <IconMultiplier amount={rating} icon={"/review-star.svg"} />
      </div>
      <img src={image} alt={`${name}-img`} />
      {preptime && <div>Prep Time {preptime}</div>}
      {serves !== undefined && (
        <div>
          Serves <IconMultiplier amount={serves} icon={"/serves.svg"} />
        </div>
      )}
    </Link>
  );
};

export default RecipeCard;
