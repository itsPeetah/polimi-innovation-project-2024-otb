import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Innovation Project (OTB)</h1>
      <h2 className="text-xl">Leadership & Innovation 2024</h2>
      <h3 className="text-lg">Group 25</h3>
      <Link href="/landing" className="text-sky-500 hover:text-orange-500">
        Go to DPP landing page
      </Link>
      <Link href="/bravery" className="text-sky-500 hover:text-orange-500">
        Go to customer app
      </Link>
    </main>
  );
}
