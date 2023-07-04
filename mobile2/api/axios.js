import axios from "axios";

export const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: "http://192.168.18.2:3333/",
=======
  baseURL: "http://172.20.10.7:3333/",
>>>>>>> 4ac74c7eb9c63bb7ce69bf83db206ebebbe3dcb3
  headers: {
    "Content-Type": "application/json",
  },
});
