import { IProduct } from "../components/types/types";
import { http } from "./http";

export const products = {
  list: async () => await http.get<IProduct[]>("/products"),
};
