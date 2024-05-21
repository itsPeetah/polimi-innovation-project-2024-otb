import Product from "@/lib/product";
import { amiri, diesel, margiela, marni } from "./brands";

export const mock_product_0: Product = {
  name: "Product Name",
  image: "/images/products/product1.jpg",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis nisl et metus facilisis, a gravida lacus ornare. Curabitur non nunc at purus malesuada imperdiet eu ut mauris. Cras et libero eu nisl malesuada dictum et vel justo. Ut at massa quis leo dignissim dictum. Sed vehicula maximus lacus et maximus.",
  passport: {
    id: "eaedb5c9b418bd6eff0894d572f3011a",
  },
  brand: diesel,
  type: "real",
};

export const mock_product_1: Product = {
  name: "Product 1",
  image: "/images/products/product2.jpg",
  description: "",
  passport: {
    id: "",
  },
  brand: diesel,
  type: "real",
};

export const mock_product_2: Product = {
  name: "Product 2",
  image: "/images/products/product3.jpg",
  description: "",
  passport: {
    id: "",
  },
  brand: diesel,
  type: "real",
};

export const mock_product_3: Product = {
  name: "Product 3",
  image: "/images/products/product4.jpg",
  description: "",
  passport: {
    id: "",
  },
  brand: marni,
  type: "real",
};

export const mock_product_4: Product = {
  name: "Product 4",
  image: "/images/products/product5.jpg",
  description: "",
  passport: {
    id: "",
  },
  brand: marni,
  type: "real",
};

export const mock_product_5: Product = {
  name: "Product 5",
  image: "/images/products/product6.jpg",
  description: "",
  passport: {
    id: "",
  },
  brand: marni,
  type: "real",
};

export const mock_product_6: Product = {
  name: "Product 6",
  image: "/images/products/product7.jpg",
  description: "",
  passport: {
    id: "",
  },
  brand: margiela,
  type: "nft",
};

export const mock_product_7: Product = {
  name: "Product 7",
  image: "/images/products/product8.jpg",
  description: "",
  passport: {
    id: "",
  },
  brand: amiri,
  type: "nft",
};
