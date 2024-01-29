import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate} from 'react-router-dom';
import ItemCard from './itemCard';
import { API } from './global';
import { Button } from 'reactstrap';


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
        console.log(itemData)

      const handleDelete = (id) =>{
        axios.delete(`${API}/phones/`+id)
        .then((res)=>{
            if (res.status === 200){
            console.log(" Data Not Found !")
            }
        });
      }
const navigate = useNavigate();

    return (
      <div>
        <div className='header'>
        <h4 className='header' >DisplayItems</h4>
          <Button onClick={()=> navigate("/phones/add")}
          > add phone

          </Button>
          </div>
          <br></br>
        {itemData.map((item)=>{
             return (
             
             <ItemCard key={item.id} value = {item} handleDelete={handleDelete}/>
          )

        })
        }
      </div>
    );
}