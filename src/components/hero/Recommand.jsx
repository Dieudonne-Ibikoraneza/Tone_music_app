// Recommand.js

import React, { useEffect, useState } from "react";
import { recommand } from "../assets/data/data";
import { Card_sm } from "../common/Card_sm";
import { Title } from "../common/Title";
import { fetchData } from "../../utils/api";

export const Recommand = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchDataAsync = async () => {
         try {
            const fetchedData = await fetchData("artists/");
            setData(fetchedData);
         } catch (error) {
            // Handle the error if needed
            console.error(error.message);
         } finally {
            setLoading(false);
         }
      };

      fetchDataAsync();
   }, []);
   console.log(data);
   return (
      <>
         <section className='treading hero mt-7 pb-32'>
            <Title title='Recommand for you' />
            {loading ? (
               <p>Loading...</p>
            ) : (
               <div className='grid grid-cols-2 gap-5'>
                  {data?.length > 0 &&
                     data.map((item) => (
                        <Card_sm
                           cover={item.images}
                           name={item.name}
                           tag={item.genres}
                           key={item.id}
                        />
                     ))}
               </div>
            )}
         </section>
      </>
   );
};
