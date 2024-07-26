import Link from "next/link";

import IconMultiplier from "../IconMultiplier";
import { useRouter } from "next/router";

export interface RecipeItemProps {
  id: number;
  name: string;
  rating: number;
  image: string;
  preptime?: number;
  serves?: number;
  button?: boolean;
  onClick?: () => void;
}

const RecipeCard = ({
  id,
  image,
  name,
  rating,
  preptime,
  serves,
  button,
}: RecipeItemProps) => {
  const router = useRouter();

  const handleEditButton = () => {
    router.push(`/recipes/${id}`);
  };
  return (
    <Link href={`/recipes/${id}`} className="recipe-card">
      <div className="recipe-img-container">
        <img src={image} alt={`${name}-img`} />
      </div>
      <div className="recipe-content">
        <h3>{name}</h3>
        <IconMultiplier amount={rating} icon={"/review-star.svg"} />

        <div className="recipe-description">
          {preptime && <div className="prep-time">Prep Time {preptime}</div>}
          {serves !== undefined && (
            <div className="serves">
              Serves <IconMultiplier amount={serves} icon={"/serves.svg"} />
            </div>
          )}
          {button && (
            <>
              <button onClick={handleEditButton}>Edit</button>
              <button>Delete</button>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
