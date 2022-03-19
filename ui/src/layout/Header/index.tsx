import * as React from 'react';
import { Container,Navbar,Nav,Offcanvas } from 'react-bootstrap';


export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
            <Navbar.Brand href="#">Edu</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar>
    </div>
  );
}
