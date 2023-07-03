import { axiosInstance } from "../../api/axios";

async function add(data = {}) {
  try {
    const response = await axiosInstance.post("cliente", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function update(data = {}) {
  try {
    const response = await axiosInstance.put("cliente", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function getAll(filter = {}) {
  const queryParams = new URLSearchParams(filter);

  try {
    const response = await axiosInstance.get(`cliente?${queryParams}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function remove(id = "") {
  try {
    const response = await axiosInstance.delete(`cliente/${id}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const customer = {
  add,
  update,
  remove,
  getAll,
};
