import Link from "next/link";
import RecipeButton from "../buttons/RecipeCard";
import { useRouter } from "next/router";

// interface RecipeComment {
//   rating: number;
// }

// const calculateAverageRating = (comments: RecipeComment[]): number => {
//   if (comments.length === 0) return 0;
//   const totalRating = comments.reduce(
//     (acc, comment) => acc + comment.rating,
//     0
//   );
//   return totalRating / comments.length;
// };

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

const RecipeItem = ({
  name,
  rating,
  image,
  id,
  preptime,
  serves,
  button,
}: RecipeItemProps) => {
  const router = useRouter();

  const handleEditButton = () => {
    router.push(`/recipes/${id}`);
  };

  return (
    <li>
      <RecipeButton
        id={id}
        name={name}
        rating={rating}
        image={image}
        preptime={preptime}
        serves={serves}
      />
      {button && (
        <>
          <button onClick={handleEditButton}>Edit</button>
          <button>Delete</button>
        </>
      )}
    </li>
  );
};

export default RecipeItem;
