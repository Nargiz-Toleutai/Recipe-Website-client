import "@/styles/globals.css";
import "@/styles/StarsRating.css";
import "@/styles/LoginPage.css";
import "@/styles/AddComment.css";
import "@/styles/Navigation.scss";
import "@/styles/HomePage.css";
import "@/styles/RecipeList.css";
import "@/styles/RecipeCard.css";
import "@/styles/CategoryItem.css";
import "@/styles/SearchInput.css";
import "@/styles/AddRecipeButton.css";
import "@/styles/RecipePage.css";
import "../fontAwesome";
import "@/styles/Input.css";
import "@/styles/CommentCard.css";
import "@/styles/BurgerMenu.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
