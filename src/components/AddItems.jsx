import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { API } from './global';


function AddItems({setItemData}){
  const [validated, setValidated] = useState(false);
   const [title,setTitle] = useState("")
   const [price,setPrice] = useState("")
   const [discountPercentage,setDiscountPercentage] = useState("")
   const [salesPercentage,setSalesPercentage] = useState("")
   const  [rating,setRating] = useState("")
   const [brand,setBrand]  = useState("")
   const [images,setImages] = useState("")
    const [description,setDescription] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
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

        if(newPhone.title === ""){
          setValidated("Title is required ");
          return;
      }else if( newPhone.price === "" ){
          setValidated("Price is required ");
          return;
      }else if( newPhone.discountPercentage === "" ){
        setValidated("Discount Percentage is required ");
        return;
      }
      else if( newPhone.salesPercentage === "" ){
        setValidated("Sales Percentage is required ");
        return;
      }
      else if( newPhone.rating === "" ){
        setValidated("Rating is required ");
        return;
      }
      else if( newPhone.brand === "" ){
        setValidated("Brand is required ");
        return;
      }
      else if( newPhone.images === "" ){
        setValidated("Image is required ");
        return;
      }
      else if( newPhone.description === "" ){
        setValidated("Description is required ");
        return;
      }
      else{
          setValidated("")
      }
        
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
        setValidated(true);

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
          <h6 className="valid">{validated}</h6>
          

          <Form.Group className="mb-3" validate controlId="validationCustom01">
           <Form.Label>Title</Form.Label>
           <input required={true} id="title"
            name="title" type="text" placeholder="Enter the Phone Name" 
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom01">
           <Form.Label>Price</Form.Label>
           <input required id="price"
            name="price" type="text" placeholder="Enter the Price" 
            onChange={(e)=> setPrice(e.target.value)}
            value={price}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom01">
           <Form.Label>Discount Percentage</Form.Label>
           <input required id="discountPercentage"
            name="discountPercentage" type="text" placeholder="Enter the Discount Percentage" 
            onChange={(e)=> setDiscountPercentage(e.target.value)}
            value={discountPercentage}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom01">
           <Form.Label>Sales Percentage</Form.Label>
           <input required id="salesPercentage"
            name="salesPercentage" type="text" placeholder="Enter the Sales Percentage" 
            onChange={(e)=> setSalesPercentage(e.target.value)}
            value={salesPercentage}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Rating</Form.Label>
           <input required id="rating"
            name="rating" type="text" placeholder="Enter the Rating" 
            onChange={(e)=> setRating(e.target.value)}
            value={rating}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Brand</Form.Label>
           <input required id="brand"
            name="brand" type="text" placeholder="Enter the brand" 
            onChange={(e)=> setBrand(e.target.value)}
            value={brand}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Image</Form.Label>
           <input required id="image"
            name="image" type="text" placeholder="Enter The Image Link in jpg format" 
            onChange={(e)=> setImages(e.target.value)}
            value={images}
           />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
           <Form.Label>Description</Form.Label>
           <input required id="description"
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