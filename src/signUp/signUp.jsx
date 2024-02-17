import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {API} from "../global.js";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';


function Signup(){
     const [data, setData] = useState({
        email:"",
        password:"",
        roleId:"0"
     })

     const [state, setState] = useState("Signup")

     const navigate = useNavigate()

     const handleChange = ({ currentTarget: <input type="text" /> })
return(
    <>
        <Container>
        <Col>
        
        <Container >
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
        </Container>
    
         <Form>
         <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" />
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
    <Button variant="primary">sign up</Button>{' '}
    </Row>
    </Col>
    </Container>

    </>

)

}

export default Signup