import Brand from "../brand";

type Product = {
  name: string;
  image: string;
  description: string;
  passport: DPPassport;
  brand: Brand;
  type: "real" | "nft";
};

type DPPassport = {
  id: string;
};

export default Product;
