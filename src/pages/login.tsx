import { FormEvent, useState } from "react";

const LoginPage = () => {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onSubmitTheForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    const result = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    await result.json();
  };

  return (
    <div className="login-page">
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
        />
        <label>Password</label>
        <input
          type="password"
          required={true}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="input"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
