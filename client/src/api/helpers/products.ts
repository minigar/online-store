import { api } from "..";

export async function deleteById(id: number) {
  await api.products.deleteById(id);
}