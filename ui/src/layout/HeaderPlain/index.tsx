import * as React from 'react';
import { Container,Navbar,Nav,Offcanvas } from 'react-bootstrap';


export interface IHeaderProps {
}

export default function HeaderPlain (props: IHeaderProps) {
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
            <Navbar.Brand href="#">Edu</Navbar.Brand>
        </Container>
        </Navbar>
    </div>
  );
}