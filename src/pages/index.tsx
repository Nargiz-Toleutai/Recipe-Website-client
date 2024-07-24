import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import RecipeList from "@/components/Recipe/RecipeList";
import LoginPage from "./login";
import HomePage from "@/components/HomePage";

const Home = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Home;
