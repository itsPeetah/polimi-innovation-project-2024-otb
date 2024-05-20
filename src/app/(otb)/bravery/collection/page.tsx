import {
  mock_product_0,
  mock_product_1,
  mock_product_2,
} from "@/app/data/products";
import ProductGrid from "./components/ProductGrid";

export default function Page() {
  return (
    <div className="w-full">
      <div className="p-4">
        <h2 className="font-bold uppercase text-sm text-zinc-500">
          Your OTB collection
        </h2>
      </div>
      <ProductGrid
        products={[mock_product_0, mock_product_1, mock_product_2]}
      />
    </div>
  );
}
