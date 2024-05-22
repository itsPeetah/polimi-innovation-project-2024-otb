import { ChevronRightIcon, LinkIcon } from "@heroicons/react/24/outline";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="relative h-screen w-full | flex flex-col bg-black text-white overflow-hidden">
      <div className="py-10 px-4 | flex flex-col gap-2">
        <h1 className="text-6xl" style={{ ...playFair.style }}>
          brave<i>n</i>ess
        </h1>
        <h2 className="text-sm | mt-5">PoliMi 2024</h2>
        <h2 className="text-lg">
          Leadership & Innovation, <b>Group 25</b>
        </h2>
        <h2 className="text-xl">Innovation Project (OTB)</h2>
      </div>
      <div className="fixed -right-10 -bottom-16 | w-80 h-80 | flex flex-col px-4 justify-center gap-4 | bg-white rounded-full text-black">
        <h3 className="font-bold text-2xl mx-5" style={{ ...playFair.style }}>
          Links
        </h3>
        <Link href="/braveness" className="font-bold text-xl text-left">
          <LinkIcon strokeWidth={4} className="w-4 h-4 inline-block" />
          &nbsp;Go to customer app
        </Link>
        <Link href="/landing" className="font-bold text-xl text-left">
          <LinkIcon strokeWidth={4} className="w-4 h-4 inline-block" />
          &nbsp;Go to DPP landing page
        </Link>
      </div>
    </main>
  );
}
