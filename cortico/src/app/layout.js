import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Cortico - URL Shortener",
  description: "An URL Shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className + "m-0 flex flex-col gap-4"}>{children}</body>
    </html>
  );
}
