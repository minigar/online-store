import axios from "axios";

const httpClient = axios.create({
  baseURL:
    process.env.REACT_APP_NEXT_PUBLIC_SERVICE_URL || "http://localhost:3001",
});

export const http = httpClient;
