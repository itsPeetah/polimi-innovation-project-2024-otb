"use client";
import claimToken from "@/app/actions/claimToken";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

export default function TokenClaimButton() {
  const { tokenClaimed, claimTokenClient } = useClaimToken();

  return (
    <form className="fixed bottom-0 | w-screen p-4" action={claimTokenClient}>
      {tokenClaimed ? (
        <Link
          href="/bravery"
          className="inline-block w-full | py-4 px-2 | text-center text-xl bg-zinc-300 text-black uppercase font-bold rounded-xl shadow-xl"
        >
          Browse your collection
        </Link>
      ) : (
        <button
          type="submit"
          className="inline-block w-full | py-4 px-2 | text-center text-xl bg-black text-white uppercase font-bold rounded-xl shadow-xl"
        >
          <ArrowDownOnSquareStackIcon
            strokeWidth={2.1}
            className="w-6 h-6 mr-2 -translate-y-1 inline text-white"
          />
          Claim Passport
        </button>
      )}
    </form>
  );
}

function useClaimToken() {
  const [tokenClaimed, setTokenClaimed] = useState(false);
  async function claimTokenClient(data: FormData) {
    const result = await claimToken();
    setTokenClaimed(() => result);
  }
  return { tokenClaimed, claimTokenClient };
}
