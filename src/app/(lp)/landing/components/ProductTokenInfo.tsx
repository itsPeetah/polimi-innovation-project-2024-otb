import Product from "@/lib/product";
import getLevelColor from "@/lib/product/getLevelColor";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductTokenInfo({ product }: Props) {
  const braveryBgColor = getLevelColor(product.level, "bg");
  const braveryTextColor = getLevelColor(product.level, "text");

  return (
    <div
      id="passport-info"
      className="w-full | flex flex-col gap-4 px-2 py-4 border"
    >
      <h2 className="uppercase font-semibold text-sm text-zinc-400">
        Product Token
      </h2>
      <div className="grid grid-cols-5 gap-4">
        <div className="w-full col-span-2 p-2 | bg-zinc-200 rounded-lg space-y-2">
          <h3 className="font-semibold text-xs uppercase text-zinc-600">
            Bravery
          </h3>
          <div
            className={`${braveryBgColor} ${braveryTextColor} font-bold uppercase text-sm text-center rounded-full p-1 shadow-md`}
          >
            {product.level}
          </div>
        </div>
        <div className="w-full col-span-3 p-2 | bg-zinc-200 rounded-lg">
          <h3 className="font-semibold text-xs uppercase text-zinc-600">
            Token id
          </h3>
          <p className="text-sm font-bold py-2">
            <span className="opacity-30">0x</span>
            <span className="uppercase opacity-60">
              {product.passport.id.slice(0, 16)}...
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
