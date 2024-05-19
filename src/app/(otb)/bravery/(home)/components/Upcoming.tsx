import User from "@/lib/user";
import Image from "next/image";
import React from "react";

interface Props {
  user: User;
}

export default function Upcoming({ user }: Props) {
  return (
    <div className="w-full flex flex-col gap-4 my-4 pb-4 overflow-hidden">
      <h2 className="font-bold uppercase text-sm mx-4 text-zinc-500">
        Upcoming
      </h2>
      <div className="w-full flex flex-col gap-4 px-4">
        <UpcomingRow title="Task name" subtitle="dd/mm/yyyy" />
        <UpcomingRow title="Exclusive event" subtitle="dd/mm/yyyy" />
        <UpcomingRow title="New drop" subtitle="dd/mm/yyyy" />
        <UpcomingRow title="Co creation initiative" subtitle="dd/mm/yyyy" />
      </div>
    </div>
  );
}

function UpcomingRow(props: { title: string; subtitle: string }) {
  return (
    <div className="bg-zinc-200 w-full rounded-lg p-2 shadow-lg">
      <h3 className="text-sm font-semibold">{props.title}</h3>
      <h4 className="text-xs font-light">{props.subtitle}</h4>
    </div>
  );
}
