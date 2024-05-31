import { FormEvent, useState } from "react";
import StarsRating from "./StarsRating/StarsRating";

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
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={(event) => setUserName(event.target.value)}
        value={userName}
      />
      <StarsRating
        onChange={(e) => setRating(Number(e.target.value))}
        value={rating}
      />
      <label htmlFor="review">Review</label>
      <input
        type="text"
        name="review"
        id="review"
        onChange={(event) => setReview(event.target.value)}
        value={review}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddComment;
