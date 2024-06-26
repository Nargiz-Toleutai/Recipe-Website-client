import "@/styles/globals.css";
import "@/styles/StarsRating.css";
import "@/styles/LoginPage.css";
import "@/styles/AddComment.css";
import "../fontAwesome";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
