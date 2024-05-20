import { mock_product_0 } from "@/app/data/products";
import { mock_user_0 } from "@/app/data/users";
import ProductHeader from "./components/ProductHeader";
import ProductPassport from "./components/ProductPassport";
import ProductTokenInfo from "./components/ProductTokenInfo";
import ProductView from "./components/ProductView";
import TokenClaimButton from "./components/TokenClaimButton";

export default function Page() {
  return (
    <>
      <main className="w-full pb-20">
        <ProductView product={mock_product_0} />
        <ProductHeader product={mock_product_0} />
        <ProductTokenInfo product={mock_product_0} user={mock_user_0} />
        <ProductPassport product={mock_product_0} />
      </main>
      <TokenClaimButton />
    </>
  );
}
