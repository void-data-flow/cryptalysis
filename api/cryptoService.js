import axios from "axios";
import moment from "moment";

const formatSparkline = (numbers) => {
  const sevenDaysAgo = moment().subtract(7, "days").unix();
  let formattedSparkline = numbers.map((item, index) => {
    return {
      x: sevenDaysAgo + (index + 1) * 3600,
      y: item,
    };
  });

  return formattedSparkline;
};

const formatMarketData = (data) => {
  // let formattedData = [];

  const formattedSparkline = formatSparkline(
    data.market_data?.sparkline_7d?.price
  );

  // const formattedItem = {
  //   ...data,
  //   market_data: {
  //     sparkline_7d: {
  //       price: formattedSparkline,
  //     },
  //   },
  // };

  // formattedData.push(formattedItem);

  // data.forEach((item) => {
  //   const formattedSparkline = formatSparkline(item.sparkline_in_7d.price);

  //   const formattedItem = {
  //     ...item,
  //     sparkline_in_7d: {
  //       price: formattedSparkline,
  //     },
  //   };

  //   formattedData.push(formattedItem);
  // });

  return formattedSparkline;
};

export const getMarketData = async (randData) => {
  try {
    // const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d");
    // const data = response.data;
    const formattedResponse = formatMarketData(randData);
    // console.log(formattedResponse);
    return formattedResponse;
  } catch (error) {
    console.log(error.message);
  }
};
