"use client";

import Footer from "./Footer";
import Header from "./Header";
import "./css/globals.css";
import "./css/normalize.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
