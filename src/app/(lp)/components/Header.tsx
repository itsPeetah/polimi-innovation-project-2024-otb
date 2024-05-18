import React from "react";

interface Props {
  brandName: string;
}

export default function Header({ brandName }: Props) {
  return (
    <div className="sticky top-0 | w-full h-16 | bg-black">
      <span className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-white text-xl">{brandName}</h1>
      </span>
    </div>
  );
}
