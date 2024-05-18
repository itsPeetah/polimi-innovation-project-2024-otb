import Product from "@/lib/product";
import {
  ArrowRightStartOnRectangleIcon,
  ChevronRightIcon,
  GlobeEuropeAfricaIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  product: Product;
}

export default function ProductPassport({ product }: Props) {
  return (
    <div id="passport-info" className="w-full | flex flex-col gap-4 p-4">
      <h2 className="uppercase font-semibold text-sm text-zinc-400">
        Digital Product Passport
      </h2>
      <ul>
        <ProductPassportLink
          href=""
          title="General information"
          subtitle="Product characteristics and identification information"
        >
          <MagnifyingGlassIcon className="w-8 h-8" />
        </ProductPassportLink>
        <ProductPassportLink
          href=""
          title="About the source"
          subtitle="Origin of the materials and composition of the product"
        >
          <ArrowRightStartOnRectangleIcon className="w-8 h-8" />
        </ProductPassportLink>
        <ProductPassportLink
          href=""
          title="Sustainability"
          subtitle="Environmental impact and product lifecycle"
        >
          <GlobeEuropeAfricaIcon className="w-8 h-8" />
        </ProductPassportLink>
        <ProductPassportLink
          href=""
          title="Maintenance & documentation"
          subtitle="Product care and warranties"
        >
          <WrenchScrewdriverIcon className="w-8 h-8" />
        </ProductPassportLink>
      </ul>
    </div>
  );
}

function ProductPassportLink(props: {
  href: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <li className="py-2 border-b last:border-none flex flex-row items-center gap-4">
      <div className="h-full aspect-square | p-2 | flex-shrink-0 | rounded-lg bg-zinc-200">
        {props.children}
      </div>
      <Link href={props.href}>
        <h3 className="capitalize font-semibold text-lg">{props.title}</h3>
        <span className="block font-semibold text-xs text-zinc-400">
          {props.subtitle}
        </span>
      </Link>
      <ChevronRightIcon className="w-6 h-6 flex-shrink-0" strokeWidth={2} />
    </li>
  );
}
