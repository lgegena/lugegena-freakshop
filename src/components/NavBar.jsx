import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src="../freakshop_iconnav.jpg" alt="logo" />  </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '350px' }}
                navbarScroll
                >
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Categoria" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/">Juegos PS4</NavDropdown.Item>
                    <NavDropdown.Item href="/">Juegos PS5</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">Funcos POP</NavDropdown.Item>
                    <NavDropdown.Item href="/">Comics</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">Manga</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sobre Nosotros" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/">Contacto</NavDropdown.Item>
                    <NavDropdown.Item href="/">Tiendas</NavDropdown.Item>
                    <NavDropdown.Item href="/">Trabaja con nosotros</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/" disabled>
                    Carrito
                </Nav.Link>
                <Nav.Link href="/">
                    <CartWidget />
                </Nav.Link>
                </Nav>
                <Form className="d-flex mx-auto">
                <FormControl
                    type="search"
                    placeholder="Busca tu producto:"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Ir</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;