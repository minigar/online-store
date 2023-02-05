import { UserBodyModel } from "./helpers/user";
import { http } from "./http";

export const users = {
  getById: async (id: string) => await http.get<UserBodyModel>(`/users/${id}`),
  deleteById: async (id: number) =>
    await http.delete<UserBodyModel>(`/users/${id}`),
};
