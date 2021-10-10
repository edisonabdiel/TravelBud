import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
      restaurant_tagcategory_standalone: '10591',
      restaurant_tagcategory: '10591',
      limit: '30',
      currency: 'USD',
      open_now: 'false',
      lunit: 'km',
      lang: 'en_US'
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'b9a1dce4ccmsh750ae6fd20fcaaap1ad8fajsn135a21ffe1e2'
    }
  };
  
  axios.request(options).then((res) => {
      console.log(res.data);
  }).catch((error) => {
      console.error(error);
  });

export const getPlacesData = async () => {
    try {
        const { data: {data}} = await axios.get(URL, options);
        return data;
    } catch (error) {
        throw new Error(error);
    }
};