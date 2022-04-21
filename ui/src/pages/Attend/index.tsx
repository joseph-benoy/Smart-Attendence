import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export interface IAttendProps {
}

export default function Attend (props: IAttendProps) {
  return (
    <Container>
        <Row>
            <Col>
                <h3>Mark attendance</h3>
            </Col>
        </Row>
    </Container>
  );
}
