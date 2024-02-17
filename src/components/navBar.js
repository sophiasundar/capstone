import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "./navBar.css"


function NavBar(){
return(
        <>

           <Navbar expand="lg" className="bg-body-tertiary mb-3" >
           
           
      <Container  expand="xxl">
        
      <Nav className="me-auto">
        <div className="dp">
      <Navbar.Brand href="/" ><b>DISPLAY PHONES</b>         </Navbar.Brand>
      </div>
      <div className='buttons'>  
      
          <Button variant="primary"><Nav.Link href="/phones/add">Addphone</Nav.Link></Button>{' '}
          
          
          <Button variant="primary"><Nav.Link href=''>Logout</Nav.Link></Button>{' '}
          {/* <Button variant="primary"><Nav.Link href=''>Logout</Nav.Link></Button>{' '} */}
          </div>
          </Nav>  
          
          </Container>
      
    </Navbar> 




        </>

)
}

export default NavBar