import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {API} from "../global.js";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from "react-toastify";


const SignupForm=()=>{
     const [data, setData] = useState({
        email:"",
        password:""
     })

     const [state, setState] = useState("Signup")

     const navigate = useNavigate()

     const handleChange = (data)=>{
        setData({...data});
     }

     const handleSubmit = async (e) =>{
        setState("Loading....")
        e.preventDefault();
        fetch(`${API}/users/signup`, {
			    method: "POST",
			    body: JSON.stringify(data),
			    headers: {
			       "Content-Type": "application/json",
			    },
		  }).then((res)=>{
            if(res.status === 401){
                throw new Error(res.statusText);
            }else{
                setState("Success");
                 return res.json();
            }
        }).then((data)=>{
          console.log(data)
            if(data.message === "already exist"){
                 toast('already exist')
            }else if(data.message === 'password must be at least 8 characters'){
				toast('password must be 8 characters exist')
			}else{
				toast("Check your email and click the link to verify your E-Mail address")
				localStorage.setItem("x-Auth-token", data.token);
				    // getItems();
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
         
         <Form >

         <Row xs={2} md={4} lg={6}>
         <h3 style={{color:"black"}}>Create Account</h3>
          </Row>

         <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email Address" 
          onChange={handleChange}
          value={data.email}
        required />
      </Form.Group>
          </Row>
    
          <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Password" 
           onChange={handleChange}
           value={data.password}
           minLength='8'
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