import React, { useState } from "react"; 
import apiData from '../data';


const Room = () => {
    const fetchedData = [...apiData];
  return (
    <div className="room">
       {
           fetchedData && fetchedData.map((product) => {
                 return  <div className="product" key={product.id}>
                   <div className="productImg">
                     <img src={product.images[1]} alt="room" />
                   </div>
                   <div className="productDesc">
                      <h6>{product.name}</h6>
                      {/* <p>{product.description.substring(0,25)}</p> */}
                      <h3>Starting @{product.price}</h3>
                      <button>Book</button>
                   </div>
               </div>
           })
       }
    </div>
  );
};

export default Room;