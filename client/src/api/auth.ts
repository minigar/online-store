import { Tokens } from "../types/tokens.type";
import { http } from "./http";

export const auth = {
  login: async (email: string, password: string): Promise<any> => {
    await http.post<Tokens>("/login", {
      email,
      password,
    });
  },
};
