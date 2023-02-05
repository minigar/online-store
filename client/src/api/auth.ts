import { AxiosResponse } from "axios";
import { Tokens } from "../types/tokens.type";
import { http } from "./http";

export const auth = {
  login: async (
    email: string,
    password: string
  ): Promise<AxiosResponse<Tokens>> => {
    const tokens = await http.post<Tokens>("/login", {
      email,
      password,
    });
    localStorage.setItem("access_token", tokens.data.access_token);
    localStorage.setItem("refresh_token", tokens.data.refresh_token);
    localStorage.setItem("isAuth", "true");
    return tokens;
  },

  SignUp: async (
    name: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<Tokens>> => {
    const tokens = await http.post<Tokens>(`/signup`, {
      name,
      email,
      password,
    });
    localStorage.setItem("access_token", tokens.data.access_token);
    localStorage.setItem("refresh_token", tokens.data.refresh_token);
    localStorage.setItem("isAuth", "true");
    return tokens;
  },

  logout: async (id: number): Promise<void> => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.setItem("isAuth", "false");
    return await http.post(`/logout/:${id}`);
  },
};
