import React, { useState, useEffect } from 'react';
import axios from "axios";
import ItemCard from './itemCard';
import { API } from './global';

import NavBar from './navBar';


export function DisplayItems(){
    
    const [itemData,setItemData] = useState([])
    
    const getItems = ()=>{
      axios.get(`${API}/phones`)
      .then((res)=>{
          if (res.status === 401){
          console.log(" Data Not Found !")
          }
          console.log(res.data);
          // data is only showing the objects
          setItemData(res.data);
      });
    }

    useEffect(()=>{
      getItems();
 }, []);
        

      const handleDelete = (id) =>{
        console.log(id)
        axios.delete(`${API}/phones/${id}`).then((res)=>{
         
            if (res.status === 200){
              getItems();
            }
        });
      }


    return (
      <div>
      <NavBar/>
        
          <br></br>
        {itemData.map((item)=>{
             return (
             <>
             <ItemCard key={item._id} value = {item} handleDelete={()=> handleDelete(item._id) }/>
             
             </>
          )

        })
        }
      </div>
    );
}