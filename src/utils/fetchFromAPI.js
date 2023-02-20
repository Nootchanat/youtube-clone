import axios from "axios";
export const BASE_URL="https://youtube-v31.p.rapidapi.com";
const options = {
    params:{
        maxResults:50,
    },
    headers: {
        "X-RapidAPI-Key" :"aca0875c1emsh305e99e2e9c91cap1fac36jsndb69b5054fe0",
        "X-RapidAPI-Host" : "youtube-v31.p.rapidapi.com",
      },
};

export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}