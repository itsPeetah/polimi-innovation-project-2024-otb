import type { Metadata } from "next";
import Header from "./components/Header";
import { mock_product_0 } from "@/data/products";

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
      <Header brand={mock_product_0.brand} />
      {children}
    </>
  );
}
