import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import RecipeList from "@/components/RecipeItem";
import NavigationBar from "@/components/NavBar";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <RecipeList />
    </div>
  );
};

export default Home;
