import { useMemo } from "react";
import { IProduct } from "../types/types";

export const useProducts = (products: IProduct[], query: string) => {
  const searchedProducts = useMemo(() => {
    return products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, products]);
  return searchedProducts;
};
