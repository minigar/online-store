import { UserBodyModel } from "./helpers/user";
import { http } from "./http";

export const users = {
  getById: async (id: string) => await http.get<UserBodyModel>(`/users/${id}`),
  create: async (name: string, email: string, password: string) =>
    await http.post<UserBodyModel>(`/signup`, {
      name,
      email,
      password,
    }),

  deleteById: async (id: number) =>
    await http.delete<UserBodyModel>(`/users/${id}`),
};
