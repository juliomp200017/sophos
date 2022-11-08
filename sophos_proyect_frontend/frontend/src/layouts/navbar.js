import { Navbar, Nav, Container,NavDropdown } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >GamesRental</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                
                <NavDropdown title="Clientes" id="Clientes">
                     <NavDropdown.Item as={Link} to ="/Clientes">Todos</NavDropdown.Item>
                     <NavDropdown.Item as={Link} to ="/ClienteMasFrecuente">Cliente Mas Frecuente</NavDropdown.Item>
                     
                </NavDropdown>
                <NavDropdown title="Alquileres" id="Alquileres">
                     <NavDropdown.Item as={Link} to ="/Alquileres">Todos</NavDropdown.Item>
                     <NavDropdown.Item as={Link} to ="/AlquileresDelDia">Del Dia</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Juegos" id="Juegos">
                     <NavDropdown.Item as={Link} to ="/Productor">Productor</NavDropdown.Item>
                     <NavDropdown.Item as={Link} to ="/Protagonista">Protagonista</NavDropdown.Item>
                     <NavDropdown.Item as={Link} to ="/FechaEstreno">FechaEstreno</NavDropdown.Item>
                     <NavDropdown.Item as={Link} to ="/Director">Director</NavDropdown.Item>
                     <NavDropdown.Item as={Link} to ="/JuegoMasRentado">Juego Mas Rentado</NavDropdown.Item>
                </NavDropdown>
                               
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample