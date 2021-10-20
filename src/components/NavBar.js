import { Navbar, Container, Nav } from 'react-bootstrap'
const NavBar = () => {
    //Logic Develop
    return(
        <>
        <h2>Freak Shop / Tu tienda geek</h2>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Freak Shop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>    
    )
}
export default NavBar