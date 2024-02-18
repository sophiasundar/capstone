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
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        roleId:"0"
     })

     const [state, setState] = useState("Signup")

     const navigate = useNavigate()

     const handleChange = ({currentTarget: input})=>{
        setData({...data, [input.name]: input.value});
     }

     const handleSubmit = async (e) =>{
        setState("Loading....")
        e.preventDefault();
        // inorder to avoid mandatory property 
        // of submit, use preventDefault
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
            if(data.message == "already exist"){
                 toast('already exist')
            }else if(data.message == 'password must be at least 8 characters'){
				toast('password must be 8 characters exist')
			}else{
				toast("Check your email and click the link to verify your E-Mail address")
				localStorage.setItem("x-Auth-token", data.token);
                sessionStorage.setItem("roleId", data.roleId);
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
              <div className="login">
        <Col>
         
         <Form>

         <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your First Name" required/>
      </Form.Group>
          </Row>

          <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Last Name" required />
      </Form.Group>
          </Row>

         <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email Address" required />
      </Form.Group>
          </Row>
    
          <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Password" required/>
      </Form.Group>
      </Row>

    </Form>
     <Row >
    <Button variant="primary"
          onClick={()=>{
            navigate(`/display`)
         }
     }
    >for demo display</Button>{' '}

    <Button variant="primary"
         onClick={()=>{
            navigate(`/signup`)
         }
     }
    >SIGN UP</Button>{' '}

    
    
    
    </Row>
    </Col>
    </div>

    
    </div>
    </div>
   

)

}

export default SignupForm