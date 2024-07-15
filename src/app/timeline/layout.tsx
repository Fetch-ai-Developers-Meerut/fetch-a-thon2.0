import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Fetch-A-Thon 2.0 || Timeline",
  description: "Powered by fetch.ai",
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
