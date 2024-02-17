import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {API} from "../components/global.js";
import "./signUp.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';




const Signup=()=>{
     const [data, setData] = useState({
        email:"",
        password:"",
        id:"0"
     })

     const [state, setState] = useState("Signup")

     const navigate = useNavigate()

     const handleChange = ({currentTarget: input})=>{
        setData({...data})
     }
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

    
         <Form>
         <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email Address" />
      </Form.Group>
          </Row>
    
          <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Password" />
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
    <Button variant="primary">LOG IN</Button>{' '}
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
      
        <Button className='button' variant="primary">SIGN UP</Button>
        <h6>Not have an account ? Just Signup </h6>
    

    </div>

    
    </div>
    </div>
   

)

}

export default Signup