import StarRating from "../IconMultiplier";
import RecipeButton from "../buttons/RecipeButton";

export interface RecipeItemProps {
  id: number;
  name: string;
  rating: number;
  image: string;
}

const RecipeItem = ({ name, rating, image, id }: RecipeItemProps) => {
  return (
    <li>
      <RecipeButton id={id} name={name} rating={rating} image={image} />
    </li>
  );
};

export default RecipeItem;
