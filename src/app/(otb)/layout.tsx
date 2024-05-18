import type { Metadata } from "next";
import BottomNavbar from "./bravery/components/BottomNavbar";
import TopHeader from "./bravery/components/TopHeader";

export const metadata: Metadata = {
  title: "Bravery",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <TopHeader />
      <div className="flex-grow overflow-hidden">
        <div className="h-full w-full overflow-y-auto">{children}</div>
      </div>
      <BottomNavbar />
    </div>
  );
}
