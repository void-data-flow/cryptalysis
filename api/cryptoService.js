import moment from "moment";

function arrayToObject(sampleArray) {
  const sevenDaysAgo = moment().subtract(7, "days").unix();
  const objData = sampleArray.map((y, index) => ({
    x: sevenDaysAgo + (index + 1) * 3600,
    y,
  }));

  return objData;
}

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
