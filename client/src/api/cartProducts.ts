import { IProduct } from "../components/types/types";
import { http } from "./http";

export const cartProducts = {
  list: async () => await http.get<IProduct[]>("/cart-products"),
};
