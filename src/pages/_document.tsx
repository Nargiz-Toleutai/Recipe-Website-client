import NavigationBar from "@/components/NavBar/NavBar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavigationBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
