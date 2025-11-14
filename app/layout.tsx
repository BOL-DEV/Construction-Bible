import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Construction Bible",
  description:
    "Your guide to building, materials, smart homes, and site knowledge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
