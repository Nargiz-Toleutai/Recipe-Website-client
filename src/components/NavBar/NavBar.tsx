import Link from "next/link";

const NavigationBar = () => {
  return (
    <ul className="navigation-container">
      <h1>🥘 HomeChefRecipes</h1>
      <li className="navigation-item">
        <Link href="/">Home</Link>
      </li>
      <li className="navigation-item">
        <Link href="/login">Login</Link>
      </li>
    </ul>
  );
};

export default NavigationBar;
