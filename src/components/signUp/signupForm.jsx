import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {API} from "../global.js";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const SignupForm=()=>{
    
    const [data, setData] = useState({email:"",password:""})
     const [state, setState] = useState("Signup")
     const [validated, setValidated] = useState(false);
     const navigate = useNavigate();

     const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]: input.value });
    };
      


     const handleSubmit = async (e) =>{
        setState("Submitting...")
        e.preventDefault();

        if(data.email===""){
          setValidated("email is required and valid");
          return;
      }else if(data.password==="" || data.password.length < 4){
          setValidated("password is required and more than 5 chr");
          return;
      }else{
          setValidated("")
      }
        
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
        setValidated(true);
       
        try{ 
             
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
         
         <Form  onSubmit={handleSubmit}>

         <Row xs={2} md={4} lg={6}>
         <h3 style={{color:"black"}}>Create Account</h3>
          </Row>
          <h6   className="valid" >{validated}</h6>
         <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        
        <input type="email" name="email" placeholder="Enter Your Email Address" 
          onChange={handleChange}
          value={data.email}
          
        required />
      </Form.Group>
          </Row>
    
          <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input type="password" name="password" placeholder="Enter Your Password" 
           onChange={handleChange}
           value={data.password}

        required/>
      </Form.Group>
      </Row>

    </Form>
     <Row >

    <Button variant="primary" type="submit"
         onClick = {handleSubmit}
     
    >{state}</Button>{' '}

    
    
    
    </Row>
    </Col>
    </div>

    
    </div>
    </div>
   

)

}

export default SignupForm