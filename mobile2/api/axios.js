import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://172.20.10.7:3333/",
  headers: {
    "Content-Type": "application/json",
  },
});
