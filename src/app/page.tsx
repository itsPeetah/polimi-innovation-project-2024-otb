import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Innovation Project (OTB)</h1>
      <h2 className="text-xl">Leadership & Innovation 2024</h2>
      <h3 className="text-lg">Group 25</h3>
      <Link
        href="/landing"
        className="text-white text-lg p-2 rounded-lg bg-sky-500 hover:bg-orange-500"
      >
        Go to DPP landing page
        <ChevronRightIcon strokeWidth={2} className="w-4 h-4 inline-block" />
      </Link>
      <Link
        href="/braveness"
        className="text-white text-lg p-2 rounded-lg bg-sky-500 hover:bg-orange-500"
      >
        Go to customer app
        <ChevronRightIcon strokeWidth={2} className="w-4 h-4 inline-block" />
      </Link>
    </main>
  );
}
