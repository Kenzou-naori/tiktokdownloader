import axios from 'axios';

const fetchTikTokData = async (url) => {
const options = {
  method: 'GET',
  url: 'https://tiktok-video-no-watermark2.p.rapidapi.com/',
  params: {
    url: url,
    hd: '1'
  },
  headers: {
    'X-RapidAPI-Key': 'b99d0f2e0emsh622b995a99c072fp11ab35jsn9c93bb8dac2e',
    'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
  }
};

// eslint-disable-next-line no-useless-catch
try {
  const response = await axios.request(options);
  return response.data;
} catch (error) {
  throw error;
}
};

export default fetchTikTokData;