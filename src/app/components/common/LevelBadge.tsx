import Level from "@/lib/level";
import getLevelColor from "@/lib/level/getLevelColor";
import React from "react";

interface Props {
  level: Level;
}

export default function LevelBadge({ level }: Props) {
  const braveryBgColor = getLevelColor(level, "bg");
  const braveryTextColor = getLevelColor(level, "text");

  return (
    <div
      className={`${braveryBgColor} ${braveryTextColor} font-bold uppercase text-sm text-center rounded-full p-1 shadow-md`}
    >
      {level}
    </div>
  );
}
