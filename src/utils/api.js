// api.js

import axios from "axios";

export const fetchData = async (endpoint) => {
   const options = {
      method: "GET",
      url: `https://spotify23.p.rapidapi.com/${endpoint}`,
      params: {
         ids: "2w9zwq3AktTeYYMuhMjju8",
      },
      headers: {
         "X-RapidAPI-Key": "1ec3413504msh1dfcafc2c42e638p16453cjsn90e6b472ab25",
         "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
   };

   try {
      const response = await axios.request(options);
      return response.data; // Return the data instead of logging it
      console.log(response);
   } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch data");
   }
};
