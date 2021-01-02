const axios = require("axios");
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await axios.get(`http://newsapi.org/v2/top-headlines?country=at&apiKey=${process.env.NEWS_API_KEY}&pageSize=10`);
    return response.data;
  } catch (error) {
    console.error(error);
  }

};
