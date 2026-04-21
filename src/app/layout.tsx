import type { Metadata } from "next";
import { Chewy, Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "CATCAKE TOKEN - EARN $CAKE FOR HOLDING $CCT",
  description: "CatCake Token is a meme meme for all who loves cat and cakes. ",
};

const chewy = Chewy({
  subsets: ["latin"],
  variable: "--font-chewy",
  weight: ["400"],
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chewy.variable} ${fredoka.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
