import React from 'react';
import axios from "axios";



export function DisplayItems(){
    
    
    axios.get("https://65b4f8bd41db5efd28672348.mockapi.io/phones")
    .then((res)=>console.log(res));
    
    
    return<div>DisplayItems</div>
}