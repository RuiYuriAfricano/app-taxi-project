import { axiosInstance } from "../../api/axios";

async function login(data = {}) {
  try {
    const response = await axiosInstance.post("actor/login", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function add(data = {}) {
  try {
    const response = await axiosInstance.post("actor", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function update(data = {}) {
  try {
    const response = await axiosInstance.put("actor", data);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function getAll(filter = {}) {
  const queryParams = new URLSearchParams(filter);

  try {
    const response = await axiosInstance.get(`actor?${queryParams}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

async function remove(id = "") {
  try {
    const response = await axiosInstance.delete(`actor/${id}`);

    return response;
  } catch (error) {
    return error?.response;
  }
}

export const author = {
  add,
  login,
  update,
  remove,
  getAll,
};
