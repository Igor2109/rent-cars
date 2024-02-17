import axios from "axios";

const carsInstance = axios.create({
  baseURL: "https://653bb37ad5d6790f5ec7493c.mockapi.io/",
});

export const requestCars = async (page = 1) => {
  const { data } = await carsInstance.get(`/car?page=${page}&limit=12`);
  return data;
};
