import { IProduct } from "../components/types/types";
import { http } from "./http";

export const products = {
  list: async () => await http.get<IProduct[]>("/products"),
  getById: async (id: number) => await http.get<IProduct>(`/products/${id}`),
  create: async (
    name: string,
    price: number,
    quantity: number,
    imgUrl: string
  ) =>
    await http.post<IProduct>(`/products`, {
      name,
      price,
      quantity,
      imgUrl,
    }),

  deleteById: async (id: number) =>
    await http.delete<IProduct>(`/products/${id}`),
};
