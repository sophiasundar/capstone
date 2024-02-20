import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {API} from "../global.js";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const SignupForm=()=>{
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [state, setState] = useState("Signup")
     const navigate = useNavigate();

      
     const handleSubmit = async (e) =>{
        setState("Submitting...")
        e.preventDefault();
       
        try{
              const data ={
                email,
                password,
              }
              const response = await fetch(`${API}/users/signup`, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json",
                }
                });
                if (response.ok) {
                  alert('Email Submitted!')
                  navigate("/");
              } else {
                  alert('Email Already Exists!')
                  navigate("/");
              }}catch(error){
                console.error('error:',error);
                setState("");
              }
            };


return(
    
        <div className="container">
            <div className="form">
              <div className="signup">
        <Col>
         
         <Form onSubmit={(e)=>handleSubmit(e)}>

         <Row xs={2} md={4} lg={6}>
         <h3 style={{color:"black"}}>Create Account</h3>
          </Row>

         <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter Your Email Address" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        required />
      </Form.Group>
          </Row>
    
          <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Enter Your Password" 
           onChange={(e) => setPassword(e.target.value)}
           value={password}

        required/>
      </Form.Group>
      </Row>

    </Form>
     <Row >

    <Button variant="primary" type="submit"
         onClick = {(e)=>handleSubmit(e)}
     
    >{state}</Button>{' '}

    
    
    
    </Row>
    </Col>
    </div>

    
    </div>
    </div>
   

)

}

export default SignupForm