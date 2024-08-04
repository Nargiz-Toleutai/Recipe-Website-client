import Link from "next/link";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [getToken, setToken] = useState<string | null>(null);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    setToken(tokenFromStorage);
  }, []);

  return (
    <nav>
      <div className="navigation-container">
        <h1>🥘HomeChefRecipes</h1>
        <ul className="nav-links">
          <li className="navigation-item">
            <Link href="/">Home</Link>
          </li>

          {getToken === null ? (
            <li className="navigation-item">
              <Link href="/login">Login</Link>
            </li>
          ) : (
            <li className="navigation-item">
              <Link href="/">
                <button
                  onClick={() => {
                    setToken(null);
                    localStorage.removeItem("token");
                  }}
                >
                  Log out
                </button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
