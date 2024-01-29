import React, { useState, useEffect } from 'react';
import axios from "axios";
import ItemCard from './itemCard';



export function DisplayItems(){
    
    const [itemData,setItemData] = useState([])
    
    useEffect(()=>{
    axios.get("https://65b4f8bd41db5efd28672348.mockapi.io/phones")
    .then((res)=>{
        if (res.status === 401){
        console.log(" Data Not Found !")
        }
        console.log(res.data);
        // data is only showing the objects
        setItemData(res.data);
    });
 }, []);
        console.log(itemData)
    return (
      <div>
        <h1 className='header' >DisplayItems</h1>
        {itemData.map((item)=>{
             return <ItemCard key={item.id} value = {item}/>
        })
        }
      </div>
    );
}