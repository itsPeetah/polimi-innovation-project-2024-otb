"use client";

import { mock_tasks } from "@/app/data/copy";
import User from "@/lib/user";

interface Props {
  user: User;
  title: string;
}

export default function Tasks({ user, title }: Props) {
  return (
    <div className="w-full flex flex-col gap-4 my-4 overflow-hidden">
      <h2 className="font-bold uppercase text-sm mx-4 text-zinc-500">
        {title}
      </h2>
      <div className="w-full grid grid-cols-2 gap-4 px-4">
        {mock_tasks.map((t) => {
          return (
            <TaskButton
              key={`hp_task_${t.title}`}
              title={t.title}
              subtitle={t.subtitle}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          alert(
            "Clicking here would take you to a page with all of the point gaining tasks available to you"
          );
        }}
        className="text-xs text-zinc-500"
      >
        see all tasks...
      </button>
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
