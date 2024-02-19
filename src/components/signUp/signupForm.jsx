import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {API} from "../global.js";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from "react-toastify";


const SignupForm=()=>{
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
    //  const [register, setRegister] = useState("")

     const [state, setState] = useState("Signup")

     const navigate = useNavigate()

      
        
     const handleSubmit =  (e) =>{
        setState("Loading....")
        e.preventDefault();
        const data ={
          email,
          password,
        }
        fetch(`${API}/users/signup`, {
			    method: "POST",
			    body: JSON.stringify(data),
			    headers: {
			       "Content-Type": "application/json",
			    }
          
		  }).then(async(res)=>{
            console.log(res)
            let data = await res.json()
            console.log(data)
            if(res.status === 401){
                throw new Error(res.statusText);
            }else{
                setState("Success");
                 return res.json();
            }
        }).then((data)=>{
         
            if(data.message === "already exist"){
                 toast('already exist')
            }else if(data.message === 'password must be at least 8 characters'){
				toast('password must be 8 characters exist')
			}else{
				toast("Check your email and click the link to verify your E-Mail address")
				localStorage.setItem("x-Auth-token", data.token);
				    
                    navigate('/')
            }
        }).catch((err)=>{
			console.log(err);
			setState("Error")
		  })
     }


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
           minLength='8'
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