type Product = {
  name: string;
  image: string;
  description: string;
  passport: DPPassport;
};

type DPPassport = {
  id: string;
};

export default Product;
