import Level from "@/lib/level";
import getLevelColor from "@/lib/level/getLevelColor";
import React from "react";

interface Props {
  percentage: number;
  level: Level;
}

export default function LevelGauge({ percentage, level }: Props) {
  const bgColor = getLevelColor(level, "bg");
  return (
    <div className={`w-full h-4 rounded-full bg-zinc-200`}>
      <div
        className={`${bgColor} h-full rounded-full`}
        style={{
          width: `${Math.floor(percentage * 100)}%`,
        }}
      ></div>
    </div>
  );
}
