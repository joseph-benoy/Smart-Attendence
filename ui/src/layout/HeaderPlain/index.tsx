import * as React from 'react';
import { Container,Navbar,Nav,Offcanvas } from 'react-bootstrap';
import { BoxArrowRight } from 'react-bootstrap-icons';


export interface IHeaderProps {
  logOut:()=>void
}

export default function HeaderPlain (props: IHeaderProps) {
  return (
    <div>
      <Navbar bg="dark"  variant="dark">
        <Container fluid>
            <Navbar.Brand href="#">Edu</Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Nav.Link onClick={props.logOut}><BoxArrowRight/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  );
}
