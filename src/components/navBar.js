import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar(){
return(
        <>

           <Navbar expand="lg" className="bg-body-tertiary mb-3" >
           
           
      <Container  expand="xxl">
        
          
      <Navbar.Brand href="/"><b>DISPLAY PHONES</b>         </Navbar.Brand>
      <Button variant="primary"><Nav.Link href=''></Nav.Link></Button>{' '}
         <Button variant="primary"><Nav.Link href="/phones/add">ADD PHONE</Nav.Link></Button>{' '}
          
          
          <Button variant="primary"><Nav.Link href=''>LOG OUT</Nav.Link></Button>{' '}
          <Button variant="primary"><Nav.Link href=''>LOG OUT</Nav.Link></Button>{' '}
             
          <Nav className="me-auto">
          
          

            
            
          </Nav>
          </Container>
      
    </Navbar> 




        </>

)
}

export default NavBar