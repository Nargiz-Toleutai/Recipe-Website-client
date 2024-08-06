import Input from "@/components/Input";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import * as z from "zod";

interface User {
  id: number;
}

const loginValidation = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const LoginPage = ({ id }: User) => {
  const router = useRouter();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage !== null) {
      router.push("/");
    }
  }, [router]);

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<z.ZodError | null>(null);

  const onSubmitTheForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const validationResult = loginValidation.safeParse(data);

    if (!validationResult.success) {
      setErrors(validationResult.error);
      return;
    }

    setErrors(null);

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
    <Layout>
      <div className="login-form">
        <img
          src="/backgroundImages/login-page-background-img.svg"
          alt="Login Page Background"
        />
        <form className="login" onSubmit={onSubmitTheForm}>
          <h1>Login</h1>
          {errors && (
            <div className="error-messages">
              {errors.errors.map((error) => (
                <p key={error.path.join(".")}>{error.message}</p>
              ))}
            </div>
          )}
          <Input
            onChange={(event) => setUserName(event.target.value)}
            name={"Username"}
            id={"username"}
            type={"text"}
            value={userName}
          />
          <Input
            onChange={(event) => setPassword(event.target.value)}
            name={"Password"}
            id={"password"}
            type={"password"}
            value={password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  );
};

export default LoginPage;
