import axios from "axios";

export const connect = axios.create({
  baseURL: "http://",
  timeout: 2000,
});
