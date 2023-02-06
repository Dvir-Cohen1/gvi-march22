import axios from "axios";
import { getLocalStorageValue } from "../utils/localStorage.util";

const api = axios.create({
  baseURL: "http://localhost:9001/connection",
  headers: {
    "Content-Type": "application/json",
    "access-token": getLocalStorageValue("ac_token"),
  },
});

export const sentConnectionRequestById = async (id) => {
  try {
    const response = await api.post("/request/" + id);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};