import React from "react";

export default function Header() {
  return (
    <div className="w-full p-4 flex flex-col gap-4 items-center justify-center">
      <h1 className="text-center font-semibold text-xl">
        Welcome to the OTB marketplace!
      </h1>
      <p className="text-balance text-center">
        We value <b>authenticity</b> and <b>transparency</b> behind every
        product.
      </p>
    </div>
  );
}
