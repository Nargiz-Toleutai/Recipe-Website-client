import NavigationBar from "@/components/NavBar/NavBar";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

interface User {
  id: number;
}

const LoginPage = ({ id }: User) => {
  const router = useRouter();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage !== null) {
      router.push("/");
    }
  }, [router]);

  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onSubmitTheForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    console.log("data", data);

    const result = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await result.json();
    if (json.token) {
      localStorage.setItem("token", json.token);
      router.push(`/dashboard/${id}`);
    }
  };

  return (
    <div className="login-page">
      <NavigationBar />
      <img
        src="/backgroundImages/login-page-background-img.svg"
        alt="Login Page Background"
      />
      <form className="login-window" onSubmit={onSubmitTheForm}>
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          required={true}
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          className="input"
          name="username"
        />
        <label>Password</label>
        <input
          type="password"
          required={true}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input"
          name="password"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
