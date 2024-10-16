import type { Metadata } from "next";
import Widget from "@/widgets";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bober - Power Up Your Gaming Arsenal!",
  description:
    "We offer the best headphones, keyboards and mice for gamers. Improve your performance and enjoy a comfortable game with our professional equipment. Become a leader on virtual battlefields with Bober!",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="font-mono bg-neutral-200 antialiased">
        <Widget.Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
