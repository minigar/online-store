import { api } from "..";
import { CreateProduct } from "../../components/types/types";
import { validURL } from "../../helpers/patterns";

export async function deleteById(id: number) {
  await api.products.deleteById(id);
}

export async function createProductByAdmin({
  name,
  price,
  quantity,
  imgUrl,
}: CreateProduct) {
  if (!name || name.length < 3 || typeof name !== "string") {
    return console.log("Wrong product name");
  }

  if (!imgUrl || !validURL(imgUrl)) {
    return console.log("Wrong Image Url");
  }

  if (!price || price < 1 || typeof price !== "number") {
    return console.log("Wrong product price");
  }

  if (!quantity || quantity < 1 || typeof quantity !== "number") {
    return console.log("Wrong product quantity");
  }

  return await api.products.create(name, price, quantity, imgUrl);
}
