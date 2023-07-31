import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "./css/globals.css";
import "./css/normalize.css";

const inter = Inter({ subsets: ["latin"] });

const DynamicHeaderWithNoSSR = dynamic(() => import("./Header"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Sonic Workshop",
  description: "Music Collaboration Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicHeaderWithNoSSR />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
