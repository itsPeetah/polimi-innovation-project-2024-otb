import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Digital Product Passport",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header brandName="Brand name" />
      {children}
    </>
  );
}
