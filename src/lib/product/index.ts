import Level from "../level";

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

export default Product;
