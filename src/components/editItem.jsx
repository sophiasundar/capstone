import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { API } from './global';
import axios from "axios";


export function EditItems(){

   const { id } = useParams();
           
         const [phone,setPhone] = useState();
             
               // console.log("Phone", phone);

         useEffect(()=>{
            
               axios.get(`${API}phones/${id}`)
               .then((res)=>{
                   console.log(res.data);
                   setPhone(res.data);
               });
             
       },[]);

       if(phone){
         return <EditPhones  phone={phone}/>
       }else {
         return "Loading...";
       }
     }




   

  function EditPhones({ phone }) {
   const [title,setTitle] = useState(phone.title)
   const [price,setPrice] = useState(phone.price)
   const [discountPercentage,setDiscountPercentage] = useState(phone.discountPercentage)
   const [salesPercentage,setSalesPercentage] = useState(phone.salesPercentage)
   const  [rating,setRating] = useState(phone.rating)
   const [brand,setBrand]  = useState(phone.brand)
   const [images,setImages] = useState(phone.images)
    const [description,setDescription] = useState(phone.description)

    const navigate = useNavigate()

    const handleSubmit = () =>{
      const updatePhone= {
          title: title,
          price:price,
          discountPercentage:discountPercentage,
          salesPercentage:salesPercentage,
          rating:rating,
          brand:brand,
          images:images,
          description:description,
      }
      console.log(updatePhone)

     fetch(`${API}phones/${phone.id}`,{
        method: "PUT",
        body: JSON.stringify(updatePhone),
        headers:{ "Content-Type": "application/json" },
     })
     .then((data)=> data.json())
     .then(()=> navigate("/"))
  };

           return(
              <div>
                   
                 <h5>EditPhones</h5>
                 

          <Form>

        <FormGroup row>
          <Label for="title" sm={2}>Title</Label> 
          <Col sm={10}> 
          <Input type="text" name="title" id="title" placeholder="Enter the Phone Name"
             onChange={(e)=> setTitle(e.target.value)}
             value={title}
          /></Col>
        </FormGroup>

        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="text" name="price" id="price" placeholder="Enter the price" 
                onChange={(e)=> setPrice(e.target.value)}
                value={price}
          />
        </FormGroup>

        <FormGroup>
          <Label for="discountPercentage">Discount Percentage</Label>
          <Input type="text" name="discountPercentage" id="discountPercentage" placeholder="Enter the Discount Percentage" 
            onChange={(e)=> setDiscountPercentage(e.target.value)}
            value={discountPercentage}
          />
        </FormGroup>

        <FormGroup>
          <Label for="salesPercentage">Sales Percentage</Label>
          <Input type="text" name="salesPercentage" id="salesPercentage" placeholder="Enter the salesPercentage" 
          onChange={(e)=> setSalesPercentage(e.target.value)}
          value={salesPercentage}
          
          />
        </FormGroup>

        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input type="text" name="rating" id="rating" placeholder="Enter the rating" 
               onChange={(e)=> setRating(e.target.value)}
               value={rating}
          />
        </FormGroup>

        <FormGroup>
          <Label for="brand">Brand</Label>
          <Input type="text" name="brand" id="brand" placeholder="Enter the brand" 
             onChange={(e)=> setBrand(e.target.value)}
             value={brand}
          />
        </FormGroup>

        <FormGroup>
          <Label for="images">Image</Label>
          <Input type="text" name="images" id="images" placeholder="Enter The Image Link in jpg format" 
          onChange={(e)=> setImages(e.target.value)}
          value={images}
          
          />
        </FormGroup>
        
        <FormGroup>
          <Label for="description"> Description</Label>
          <Input type="textarea" name="description" id="description" placeholder="Enter the description"
          onChange={(e)=> setDescription(e.target.value)}
          value={description}
          />
        </FormGroup>


        <div className='button'>
  <Button
     color="success"
    onClick = {handleSubmit}
  >
    Update
  </Button>
    
  <Button
    onClick={()=>{
      navigate(-1)
  }}
  >
    Back
  </Button>
  </div>
      </Form>
              </div>
              )
          }

         