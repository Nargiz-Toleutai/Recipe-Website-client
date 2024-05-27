import Link from "next/link";

const NavigationBar = () => {
  return (
    <ul className="navigation-container">
      <li className="navigation-item">
        <Link href="/">Home</Link>
      </li>
      <li className="navigation-item">
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default NavigationBar;
