import StarRating from "../StarsRating";

export interface RecipeItemProps {
  id: number;
  name: string;
  rating: number;
  image: string;
}

const RecipeItem = ({ name, rating, image }: RecipeItemProps) => {
  return (
    <li>
      <div className="recipe-item-img-block">
        <img src={image} alt={`${name}-img`} />
      </div>
      <div className="recipe-item-info-block">
        <h3>{name}</h3>
        <StarRating rating={rating} />
      </div>
    </li>
  );
};

export default RecipeItem;
