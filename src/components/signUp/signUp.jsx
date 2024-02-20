import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {API} from "../global.js";
import "./signUp.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';



const Signup=()=>{
     
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState("Login")
  

  const navigate = useNavigate();

   
  const handleSubmit = async (e) =>{
    const form = e.currentTarget;
    setValidated(true);
    if (form.checkValidity() === false) {
      e.preventDefault();
      return;
    }
     e.preventDefault();
    
     try{
           const data ={
             email,
             password,
           }
           const response = await fetch(`${API}/users/login`, {
                 method: "POST",
                 body: JSON.stringify(data),
                 headers: {
                   "Content-Type": "application/json",
             }
             })

             if (response.ok) {
              
              const authToken = localStorage.getItem("x-Auth-token");
              console.log("localStorage", authToken);
               
              alert('Successfully LoggedIn')
               navigate("/display");
           } else {
               alert('Invalid Credentials')
               navigate("/");
            }}catch(err){
             console.log("err");
             setState("");
           }
         };


   

     

   
return(
    
        <div className="container">
            <div className="form">
              <div className="login">
        <Col>
         <Col xs={2}>
        <Figure>
      <Figure.Image
        width={291}
        height={290}
        alt="authImage"
        src="https://themesdesign.in/jobcy/layout/assets/images/auth/sign-up.png"
      />
      
    </Figure>

        </Col>

    
         <Form noValidate validated={validated} onSubmit={(e)=>handleSubmit(e)} >
         <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email Address" 
           onChange={(e) => setEmail(e.target.value)}
           value={email}
         required 
        />
      </Form.Group>
          </Row>
    
          <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Your Password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
     required
        />
      </Form.Group>
      </Row>

    </Form>
     <Row >
    
    <Button variant="primary"
        onClick = {(e)=>handleSubmit(e)}
    >{state}</Button>{' '}
    <h6>Already have an account? Just LogIn </h6>
    
    
    
    </Row>
    </Col>
    </div>

    <div  className="signup">
   
    <Figure>
      <Figure.Image
        width={251}
        height={251}
        alt="welcome"
        src="https://tse1.mm.bing.net/th?id=OIP.MgkugHlSpXm930w6zLbomgHaDt&pid=Api&P=0&h=180"
      />
      
    </Figure>
      
        <Button className='button' variant="primary"
             onClick={()=>{
              navigate(`/signup`)
           }
       }
        >SIGN UP</Button>
        <h6>Not have an account ? Just Signup </h6>
    

    </div>

    
    </div>
    </div>
   

)

}

export default Signup