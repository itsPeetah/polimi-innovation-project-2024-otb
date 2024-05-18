type Product = {
  name: string;
  image: string;
  description: string;
  passport: DPPassport;
  level: Level;
};

type DPPassport = {
  id: string;
};

export type Level = "bold" | "fearless" | "dauntless" | "intrepid";

export default Product;
