import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { API } from './global';


function AddItems({setItemData}){
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
       .then(()=> navigate("/display"))
    };


    return(
        <div>
          <h5>AddPhones</h5> 

          <Form >
             <p></p>
          

          <Form.Group className="mb-3" controlId="validationCustom01">
           <Form.Label>Title</Form.Label>
           <Form.Control required={true} id="title"
            name="title" type="text" placeholder="Enter the Phone Name" 
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom01">
           <Form.Label>Price</Form.Label>
           <Form.Control required={2} id="price"
            name="price" type="text" placeholder="Enter the Price" 
            onChange={(e)=> setPrice(e.target.value)}
            value={price}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom01">
           <Form.Label>Discount Percentage</Form.Label>
           <Form.Control required id="discountPercentage"
            name="discountPercentage" type="text" placeholder="Enter the Discount Percentage" 
            onChange={(e)=> setDiscountPercentage(e.target.value)}
            value={discountPercentage}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom01">
           <Form.Label>Sales Percentage</Form.Label>
           <Form.Control required id="salesPercentage"
            name="salesPercentage" type="text" placeholder="Enter the Sales Percentage" 
            onChange={(e)=> setSalesPercentage(e.target.value)}
            value={salesPercentage}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Rating</Form.Label>
           <Form.Control required id="rating"
            name="rating" type="text" placeholder="Enter the Rating" 
            onChange={(e)=> setRating(e.target.value)}
            value={rating}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Brand</Form.Label>
           <Form.Control required id="brand"
            name="brand" type="text" placeholder="Enter the brand" 
            onChange={(e)=> setBrand(e.target.value)}
            value={brand}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Image</Form.Label>
           <Form.Control required id="image"
            name="image" type="text" placeholder="Enter The Image Link in jpg format" 
            onChange={(e)=> setImages(e.target.value)}
            value={images}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Description</Form.Label>
           <Form.Control required id="description"
            name="description" type="text" placeholder="Enter The Description" 
            onChange={(e)=> setDescription(e.target.value)}
            value={description}
           />
          </Form.Group>

 
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