import { CreteProduct, IProduct } from "../components/types/types";
import { http } from "./http";

export const cartProducts = {
  list: async () => await http.get<IProduct[]>(`/cart-products`),

  getById: async (id: number) =>
    await http.get<IProduct>(`/cart-products/${id}`),

  create: async ({ name, price, quantity, imgUrl }: CreteProduct) =>
    await http
      .post<IProduct>(`/cart-products`, {
        name,
        price,
        quantity,
        imgUrl,
      })
      .catch((err) => console.error(err)),

  updateById: async ({ id, name, price, quantity, imgUrl }: IProduct) =>
    await http.put(`/cart-products/${id}`, {
      name,
      price,
      quantity,
      imgUrl,
    }),

  deleteById: async (id: number) =>
    await http.delete<IProduct>(`/cart-products/${id}`),
};
