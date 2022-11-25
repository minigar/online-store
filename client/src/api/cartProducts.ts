import { IProduct } from "../components/types/types";
import { http } from "./http";

export const cartProducts = {
  list: async () => await http.get<IProduct[]>("/cart-products"),
  product: async ({ id, name, price, imgUrl }: IProduct) =>
  await http
    .post<IProduct>("/cart-products", {
      id,
      name,
      price,
      imgUrl,
    })
    .catch((err) => console.error(err)),
};
