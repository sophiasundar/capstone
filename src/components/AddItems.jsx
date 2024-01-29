import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { API } from './global';


function AddItems({itemData, setItemData}){
   const [title,setTitle] = useState("")
   const [price,setPrice] = useState("")
   const [discountPercentage,setDiscountPercentage] = useState("")
   const [salesPercentage,setSalesPercentage] = useState("")
   const  [rating,setRating] = useState("")
   const [stock,setStock]  = useState("")
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
            stock:stock,
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
          <h6>AddPhones</h6> 

          <Form>
  <FormGroup>
   <Label for="title">
      Title
    </Label>
    <Input
      id="title"
      name="title"
      placeholder="Enter the Phone Name"
      type="text"
        //    onChange={(e)=>e.target.value}
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
    />
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
      placeholder="Enter the link of the Discount Percentage"
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
      placeholder="Enter the link of the salesPercentage"
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
      placeholder="Enter the link of the rating"
      type="text"
      onChange={(e)=> setRating(e.target.value)}
        value={rating}
    />
  </FormGroup>
  <FormGroup>
    <Label for="stock">
    Stock
    </Label>
    <Input
      id="stock"
      name="stock"
      placeholder="Enter the link of the Stock"
      type="text"
      onChange={(e)=> setStock(e.target.value)}
        value={stock}
    />
  </FormGroup>
  <FormGroup>
    <Label for="brand">
    Brand
    </Label>
    <Input
      id="brand"
      name="brand"
      placeholder="Enter the link of the brand"
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
      placeholder="Enter the link of the image"
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
      placeholder="Enter the link of the description"
      type="text"
      onChange={(e)=> setDescription(e.target.value)}
        value={description}
    />
  </FormGroup>
    <div className='button'>
  <Button
  
    onClick = {handleSubmit}
  >
    Submit
  </Button>
    
  <Button
    onClick={()=>{
      navigate('/')
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