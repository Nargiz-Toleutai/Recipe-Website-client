import StarsRating from "./StarsRating/StarsRating";

const AddComment = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("The form was submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input id="username" name="username" type="text" />
      <StarsRating />
      <label htmlFor="review">Review</label>
      <input type="text" name="review" id="review" />

      <button type="submit">Save</button>
    </form>
  );
};

export default AddComment;
