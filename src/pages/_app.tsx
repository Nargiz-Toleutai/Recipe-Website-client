import "@/styles/globals.css";
import "@/styles/StarsRating.css";
import "@/styles/LoginPage.css";
import "@/styles/AddComment.css";
import "@/styles/Navigation.css";
import "@/styles/HomePage.css";
import "@/styles/RecipeList.css";
import "@/styles/RecipeItem.css";
import "@/styles/CategoryItem.css";
import "@/styles/SearchInput.css";
import "../fontAwesome";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
