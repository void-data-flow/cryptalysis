import axios from "axios";
import { API_KEY } from "@env";
const instance = axios.create({
  baseURL: "https://api.coincap.io/v2",
});

const getCoinList = async (listLimit) => {
  const apiData = await instance.get("/assets/", {
    params: {
      limit: listLimit,
    },
    // headers: {
    //   "Retry-After": "5000",
    // },
  });
  return apiData.data.data;
};

export { getCoinList };
