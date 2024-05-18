import Product from ".";

export default function getShortDescription(
  product: Product,
  maxLength: number = 50
) {
  return (
    product.description.split(" ").reduce((acc, cur) => {
      if (acc.length + cur.length > maxLength) return acc;
      return `${acc} ${cur}`;
    }) + "…"
  );
}
