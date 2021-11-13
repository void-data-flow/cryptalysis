import axios from "axios";
import { API_KEY } from "@env";
const instance = axios.create({
  // baseURL: "https://api.coincap.io/v2",
  baseURL: "https://api.coingecko.com/api/v3/",
});

const getCoinList = async (currency, listLimit) => {
  const apiData = await instance.get(
    `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${listLimit}&page=1&sparkline=false`
  );
  // console.log(apiData.data);
  return apiData.data;
};

const getExchangeList = async (perPage) => {
  const apiData = await instance.get(
    `https://api.coingecko.com/api/v3/exchanges?per_page=${perPage}page=1`
  );
  // console.log(apiData.data.length);
  return apiData.data;
};

const getSingleCoinInfo = async (coinId) => {
  const apiData = await instance.get(
    `coins/${coinId}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );
  // console.log(apiData.data.length);
  return apiData.data;
};

const getGlobalData = async () => {
  const apiData = await instance.get(`global`);
  return apiData.data.data;
};

const getStatusUpdates = async (statusCount) => {
  const apiData = await instance.get(`status_updates?per_page=${statusCount}`);
  return apiData.data;
};

export {
  getCoinList,
  getSingleCoinInfo,
  getExchangeList,
  getGlobalData,
  getStatusUpdates,
};
