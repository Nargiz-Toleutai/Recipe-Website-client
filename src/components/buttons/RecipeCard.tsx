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
    <Link href={`/recipes/${id}`} className="recipe-card">
      <div className="recipe-img-container">
        <img src={image} alt={`${name}-img`} />
      </div>
      <div className="recipe-content">
        <h3>{name}</h3>
        <IconMultiplier amount={rating} icon={"/review-star.svg"} />
      </div>
      <div className="card-info">
        {preptime && <div className="prep-time">Prep Time {preptime}</div>}
        {serves !== undefined && (
          <div className="serves">
            Serves <IconMultiplier amount={serves} icon={"/serves.svg"} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default RecipeCard;
