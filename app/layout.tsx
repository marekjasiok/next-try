import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./scss/styles.scss";

// Adding title and othe metadata
export const metadata: Metadata = {
  title: "The System",
  description: "My everything, initially generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
