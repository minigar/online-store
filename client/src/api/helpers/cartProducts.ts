import { api } from "..";
import { IProduct } from "../../components/types/types";

export async function deleteById(id: number) {
    await api.cartProducts.deleteById(id);
  }

export async function create({ name, price, imgUrl }: IProduct) {
    return await api.cartProducts.create({ name, price, imgUrl });
  }