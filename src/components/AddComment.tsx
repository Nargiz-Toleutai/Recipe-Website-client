import { FormEvent, useState } from "react";
import StarsRating from "./StarsRating/StarsRating";
import Input from "./Input";

interface AddCommentProps {
  recipeId: number;
  fetchRecipe: () => any;
}

const AddComment = ({ recipeId, fetchRecipe }: AddCommentProps) => {
  const [userName, setUserName] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const onSubmitTheForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      name: userName,
      review,
      rating,
    };

    try {
      const result = await fetch(
        `http://localhost:3001/recipes/${recipeId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      await result.json();
      setUserName("");
      setReview("");
      setRating(0);
      fetchRecipe();
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <form onSubmit={onSubmitTheForm} className="comment-form">
      <div className="name-and-rating-panel">
        <Input
          onChange={(event) => setUserName(event.target.value)}
          name={"Name"}
          id={"name"}
          type={"text"}
          value={userName}
        />
        <StarsRating
          onChange={(e) => setRating(Number(e.target.value))}
          value={rating}
        />
      </div>
      <div className="review-panel">
        <Input
          onChange={(event) => setReview(event.target.value)}
          name={"Review"}
          id={"review"}
          type={"text"}
          value={review}
        />
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default AddComment;
