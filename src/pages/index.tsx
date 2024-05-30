import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import RecipeList from "@/components/Recipe/RecipeList";
import LoginPage from "./login";

const Home = () => {
  return (
    <div>
      <RecipeList />
    </div>
  );
};

export default Home;
