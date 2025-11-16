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
      console.log("Fetching data...");
      const url = "https://currentsapi.services/en/fonts/GeneralSans-Medium.woff"

      const response = await fetch(url, {
        headers: {
          "Authorization": "vfRElRbweEmpW6_uE1PQrgAsndar3QEEtJjSfZjnCnI7E-q-"   // replace with your key
        }
      });

      if (!response.ok) {
        throw new Error("Failed with status " + response.status);
      }

      const json = await response.json();
      console.log(json.news);
      setArticles(json.news || []);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  return (
    <div className="p-4">
      <p 
        onClick={getInfo} 
        className="border p-2 rounded-3xl cursor-pointer bg-blue-200 hover:bg-blue-300"
      >
        Get Info
      </p>

      <div className="mt-4 space-y-3">
        {articles.map((article, index) => (
          <div key={index} className="border p-3 rounded-lg shadow">
            <h2 className="font-bold">{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
