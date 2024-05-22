import { ChevronRightIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function LearnMore() {
  return (
    <div className="w-full p-4">
      <h2 className="font-bold uppercase text-sm text-zinc-500 mb-4">
        Learn more about out Blockchain
      </h2>
      <div className="flex flex-col gap-4">
        <InfoButton text="OTB: On The Blockchain" />
        <InfoButton text="NFTs: Certificates of authenticity" />
        <InfoButton text="NFTs: Certificates of ownership" />
        <InfoButton text="Browse our knowledge base" />
      </div>
    </div>
  );
}

function InfoButton(props: { text: string }) {
  return (
    <li className="py-2 border-b last:border-none flex flex-row items-center gap-4">
      <div className="h-full aspect-square | p-2 | flex-shrink-0 | rounded-lg bg-zinc-200">
        <GlobeAltIcon className="w-8 h-8" />
      </div>
      <Link href="/">
        <h3 className="capitalize font-semibold text-lg">{props.text}</h3>
      </Link>
      <ChevronRightIcon
        className="w-6 h-6 flex-shrink-0 mr-0 ml-auto"
        strokeWidth={2}
      />
    </li>
  );
}
