import User from "@/lib/user";
import React, { ReactNode } from "react";

interface Props {
  user: User;
}

export default function Tasks({ user }: Props) {
  return (
    <div className="w-full flex flex-col gap-4 my-4 overflow-hidden">
      <h2 className="font-bold uppercase text-sm mx-4 text-zinc-500">
        {" "}
        Gain points in tasks
      </h2>
      <div className="w-full grid grid-cols-2 gap-4 px-4 pb-4">
        <TaskButton title="Task #1" subtitle="Task snippet" />
        <TaskButton title="Task #2" subtitle="Task snippet" />
        <TaskButton title="Task #3" subtitle="Task snippet" />
        <TaskButton title="Task #4" subtitle="Task snippet" />
      </div>
    </div>
  );
}

function TaskButton(props: { title: string; subtitle: string }) {
  return (
    <div className="bg-zinc-200 w-full rounded-lg p-2 shadow-lg">
      <h3 className="text-sm font-semibold">{props.title}</h3>
      <h4 className="text-xs font-light">{props.subtitle}</h4>
    </div>
  );
}
