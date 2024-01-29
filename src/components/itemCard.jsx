import {useState} from 'react';
import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";






 

// "discountPercentage" "salesPercentage""rating"
    function ItemCard({value}){
        
        const [show,setShow]=useState(false)  
         const toggleSummary={
            display:show?"block":"none"
         }
        console.log(toggleSummary.display);
       
       
        return(
            <div  className="itemContainer">
               <Card className="itemCard" >
                        <Card.Img className="itemImg" alt={value.title} variant="top" src={value.images} />
                        
                        <Card.Body>
                            <Card.Title className="title"  ><b>{value.title}</b></Card.Title>
                        </Card.Body>
      
                        <ListGroup className="list-group-flush">
                            
                            <ListGroup.Item><b>Price  :  </b> {value.price}</ListGroup.Item>
                            <ListGroup.Item><b>Brand  :  </b> {value.brand}</ListGroup.Item>
                            <ListGroup.Item><Card.Text>
                            <b>Description : </b> {value.description}
                            </Card.Text> </ListGroup.Item>   

                        </ListGroup>

                        <Card.Body>
                            < div className="itemSpecs" >
                                <button
                                onClick={()=>{
                                    setShow(!show)
                                    console.log(show)
                                }}
                                > click {  show?"🔽":"🔼"}
                                </button> 
                            </div>
                                { show? <div className='itemDesp'> <ListGroup className="list-group-flush" >
                                            <ListGroup.Item><b>Rating  ⭐ :  </b>{value.rating} </ListGroup.Item>
                                            <ListGroup.Item><b>Discount Percentage : </b>{value.discountPercentage} </ListGroup.Item>
                                            <ListGroup.Item><b>Sales Percentage : </b> {value.salesPercentage} </ListGroup.Item>
                                            <ListGroup.Item><b>Stock  : </b>{value.stock} </ListGroup.Item>         
                                            </ListGroup> 
                                            </div>
                                        :null}
                        </Card.Body>
      
                        <Card.Body className='button'>
                           <Button variant="primary"><MdEdit />EDIT</Button>
                           <Button variant="$gray-100"><AiFillDelete />DELETE</Button>
                           <Button variant="$danger, 40%"></Button>
                        </Card.Body>
            
                </Card>
            </div>
        )
    }

export default ItemCard    


