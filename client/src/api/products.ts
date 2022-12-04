import { CreateProduct, IProduct } from "../components/types/types";
import { http } from "./http";

export const products = {
  list: async () => await http.get<IProduct[]>("/products"),
  getById: async (id: number) => await http.get<IProduct>(`/products/${id}`),
  create: async ({ name, price, quantity, imgUrl }: CreateProduct) =>
  await http
    .post<IProduct>(`/products`, {
      name,
      price,
      quantity,
      imgUrl,
    })
    .catch((err) => console.error(err)),

};
