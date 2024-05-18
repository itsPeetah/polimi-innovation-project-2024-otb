import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bravery",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
