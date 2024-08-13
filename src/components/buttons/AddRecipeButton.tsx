import Link from "next/link";

const AddRecipeButton = () => {
  return (
    <Link href="/add-new-recipe" className="recipe-button">
      <h1>Add New Recipe</h1>
      <img
        src="/buttonImage/add-new-recipe-button-img.svg"
        alt="Add New Recipe"
      />
    </Link>
  );
};

export default AddRecipeButton;
