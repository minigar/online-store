import { IProduct } from "../components/types/types";
import { http } from "./http";

export const cartProducts = {
  list: async () => await http.get<IProduct[]>(`/cart-products`),
  create: async ({ id, name, price, imgUrl }: IProduct) =>
  await http
    .post<IProduct>(`/cart-products`, {
      id,
      name,
      price,
      imgUrl,
    })
    .catch((err) => console.error(err)),
  delete: async ( id: number ) => await http.delete<IProduct>(`/cart-products/${id}`)
};
