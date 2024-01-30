import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { API } from './global';


function AddItems({itemData, setItemData}){
   const [title,setTitle] = useState("")
   const [price,setPrice] = useState("")
   const [discountPercentage,setDiscountPercentage] = useState("")
   const [salesPercentage,setSalesPercentage] = useState("")
   const  [rating,setRating] = useState("")
   const [brand,setBrand]  = useState("")
   const [images,setImages] = useState("")
    const [description,setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit = () =>{
        const newPhone= {
            title: title,
            price:price,
            discountPercentage:discountPercentage,
            salesPercentage:salesPercentage,
            rating:rating,
            brand:brand,
            images:images,
            description:description,
        }
        console.log(newPhone)

       fetch(`${API}/phones`,{
          method: "POST",
          body:JSON.stringify(newPhone),
          headers:{ "Content-Type": "application/json" },
       })
       .then((data)=> data.json())
       .then((res)=>{
        setItemData(res);
        // console.log(res)
       })
       .then(()=> navigate("/"))
    };


    return(
        <div>
          <h5>AddPhones</h5> 

          <Form>
  <FormGroup>
   <Label for="title" sm={2}>
      Title
    </Label>
    <Col sm={10}> 
    <Input
      id="title"
      name="title"
      placeholder="Enter the Phone Name"
      type="text"
        //    onChange={(e)=>e.target.value}
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
    /></Col>
  </FormGroup>
  <FormGroup>
    <Label for="price">
      Price
    </Label>
    <Input
      id="price"
      name="price"
      placeholder="Enter the price"
      type="text"
      onChange={(e)=> setPrice(e.target.value)}
        value={price}
    />
  </FormGroup>
  <FormGroup>
    <Label for="discountPercentage">
    Discount Percentage
    </Label>
    <Input
      id="discountPercentage"
      name="discountPercentage"
      placeholder="Enter the Discount Percentage"
      type="text"
      onChange={(e)=> setDiscountPercentage(e.target.value)}
        value={discountPercentage}
    />
  </FormGroup>
  <FormGroup>
    <Label for="salesPercentage">
    Sales Percentage
    </Label>
    <Input
      id="salesPercentage"
      name="salesPercentage"
      placeholder="Enter the salesPercentage"
      type="text"
      onChange={(e)=> setSalesPercentage(e.target.value)}
        value={salesPercentage}
    />
  </FormGroup>
  <FormGroup>
    <Label for="rating">
    Rating
    </Label>
    <Input
      id="rating"
      name="rating"
      placeholder="Enter the rating"
      type="text"
      onChange={(e)=> setRating(e.target.value)}
        value={rating}
    />
  </FormGroup>
  <FormGroup>
    <Label for="brand">
    Brand
    </Label>
    <Input
      id="brand"
      name="brand"
      placeholder="Enter the brand"
      type="text"
      onChange={(e)=> setBrand(e.target.value)}
        value={brand}
    />
  </FormGroup>
  <FormGroup>
    <Label for="images">
      Image
    </Label>
    <Input
      id="images"
      name="images"
      placeholder="Enter The Image Link in jpg format"
      type="text"
      onChange={(e)=> setImages(e.target.value)}
        value={images}
    />
  </FormGroup>
  <FormGroup>
    <Label for="description">
    Description
    </Label>
    <Input
      id="description"
      name="description"
      placeholder="Enter the description"
      type="textarea"
      onChange={(e)=> setDescription(e.target.value)}
        value={description}
    />




  </FormGroup>
    <div className='button'>
  <Button
  
    onClick = {handleSubmit}
  >
    AddPhone
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

export default AddItems