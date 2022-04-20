import * as React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import { useAppSelector } from '../../../hooks/store';
import QRCode from "react-qr-code";


export interface IProfileProps {
}

export default function Profile (props: IProfileProps) {
    const student = useAppSelector((state)=>state.student);
  return (
    <Container>
        <Row>
            <Col>
                <h3>Profile</h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <QRCode value={student.id.toString()}/>
            </Col>
        </Row>
    </Container>
  );
}
