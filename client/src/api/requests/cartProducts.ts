import { api } from "..";
import { IProduct } from "../../components/types/types";

export async function deleteById(id: number) {
    await api.cartProducts.delete(id);
  }

export  async function create({ id, name, price, imgUrl }: IProduct) {
    return await api.cartProducts.create({ id, name, price, imgUrl });
  }