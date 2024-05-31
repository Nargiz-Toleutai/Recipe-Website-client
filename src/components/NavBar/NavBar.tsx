import Link from "next/link";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [getToken, setToken] = useState<string | null>(null);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    setToken(tokenFromStorage);
  }, []);

  return (
    <ul className="navigation-container">
      <h1>🥘 HomeChefRecipes</h1>
      <li className="navigation-item">
        <Link href="/">Home</Link>
      </li>
      {getToken === null ? (
        <li className="navigation-item">
          <Link href="/login">Login</Link>
        </li>
      ) : (
        <button
          onClick={() => {
            setToken(null);
            localStorage.removeItem("token");
          }}
        >
          <li className="navigation-item">
            <Link href="/login">Log out</Link>
          </li>
        </button>
      )}
    </ul>
  );
};

export default NavigationBar;
