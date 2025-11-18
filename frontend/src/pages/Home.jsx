// import React from 'react'

// const getinfo = async()=>{
//   console.log("Fetching data...");
//   const data = await fetch("https://api.currentsapi.services/v1/latest-news", {
//     headers:{
//         "Authorization": "vfRElRbweEmpW6_uE1PQrgAsndar3QEEtJjSfZjnCnI7E-q-"
//     }
//    });
//    console.log(1);

//    const jsondata= await data.json();
//    console.log(3);
//    console.log(jsondata)
//    console.log(3);
// }

// const Home = () => {
//   return (
//     <div>
//       <p onClick={()=> {getinfo()}} className='border p-2 rounded-3xl cursor-pointer'>get Info</p>
//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react';

const Home = () => {
  const [articles, setArticles] = useState([]);

  const getInfo = async () => {
    try {
      // console.log("Fetching data...");
      // const url = "https://currentsapi.services/en/fonts/GeneralSans-Medium.woff"

      // const response = await fetch(url, {
      //   headers: {
      //     "Authorization": "vfRElRbweEmpW6_uE1PQrgAsndar3QEEtJjSfZjnCnI7E-q-"   // replace with your key
      //   }
      // });

      // if (!response.ok) {
      //   throw new Error("Failed with status " + response.status);
      // }

      // const json = await response.json();
      // console.log(json.news);
      // setArticles(json.news || []);
      console.log(1);
      const res = await fetch("http://localhost:4000/api/news");
      console.log(2);
      const data = await res.json();
      console.log(3);
      console.log(data)
      console.log(data.articles);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  return (
    <div className="p-4">
      <div>
        <p
          onClick={getInfo}
          className="border p-2 rounded-3xl cursor-pointer bg-blue-200 hover:bg-blue-300"
        >
          Get Info
        </p>
      </div>
      <div>
        <p className='text-5xl mb-150 flex justify-center items-center mt-50'> How are You</p>
      </div>

    </div>
  );
};

export default Home;
