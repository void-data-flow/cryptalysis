import axios from "axios";
import { API_KEY } from "@env";
const instance = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/v1",
});

function getCoinList() {
  return instance.get("/cryptocurrency/listings/latest", {
    // params: {
    //   start: 1,
    //   limit: 10,
    //   convert: "INR",
    // },
    headers: {
      "X-CMC_PRO_API_KEY": API_KEY,
    },
  });
}
export { getCoinList };
