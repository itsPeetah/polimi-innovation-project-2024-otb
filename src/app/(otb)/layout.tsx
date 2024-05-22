import type { Metadata } from "next";
import BottomNavbar from "./braveness/components/BottomNavbar";
import TopHeader from "./braveness/components/TopHeader";

export const metadata: Metadata = {
  title: "Bravery",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopHeader />
      <div className="flex-grow overflow-hidden">
        <div className="h-full w-full overflow-y-auto">
          {children}
          <div className="h-[100px]" />
        </div>
      </div>
      <BottomNavbar />
    </>
  );
}
