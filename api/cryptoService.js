import axios from "axios";
import moment from "moment";

// const formatSparkline = (numbers) => {
//   const sevenDaysAgo = moment().subtract(7, "days").unix();
//   let formattedSparkline = numbers.map((item, index) => {
//     return {
//       x: sevenDaysAgo + (index + 1) * 3600,
//       y: item,
//     };
//   });

//   return formattedSparkline;
// };

const formatMarketData = (data) => {
  const priceArray = data.market_data?.sparkline_7d?.price;

  const sevenDaysAgo = moment().subtract(7, "days").unix();
  let formattedSparkline = priceArray.map((item, index) => {
    return {
      x: sevenDaysAgo + (index + 1) * 3600,
      y: item,
    };
  });

  return formattedSparkline;
};

export const getMarketData = async (randData) => {
  try {
    const formattedResponse = formatMarketData(randData);
    return formattedResponse;
  } catch (error) {
    console.log(error.message);
  }
};
