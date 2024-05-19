import User from "@/lib/user";
import React, { ReactNode } from "react";

interface Props {
  user: User;
}

export default function Promotions({ user }: Props) {
  return (
    <div className="w-full flex flex-col gap-4 my-4 overflow-hidden">
      <h2 className="font-bold uppercase text-sm mx-4 text-zinc-500">
        {" "}
        Your promotions
      </h2>
      <div className="w-full flex flex-row gap-4 px-4 pb-4">
        <PromotionButton title="Promotion #1" subtitle="Promotion snippet" />
        <PromotionButton title="Promotion #2" subtitle="Promotion snippet" />
      </div>
    </div>
  );
}

function PromotionButton(props: { title: string; subtitle: string }) {
  return (
    <div className="bg-zinc-200 w-full rounded-lg p-2 shadow-lg">
      <h3 className="text-sm font-semibold">{props.title}</h3>
      <h4 className="text-xs font-light">{props.subtitle}</h4>
    </div>
  );
}
