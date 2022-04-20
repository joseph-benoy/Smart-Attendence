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
                <h3 style={{textAlign:"center"}}>Profile</h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <QRCode value={student.id.toString()} className="qr"/>
            </Col>
            <Col className="studentCol">
                <p><b>Name : </b>{student.name}</p>
                <p><b>Email : </b>{student.email}</p>
                <p><b>Sem : </b>{student.sem}</p>
            </Col>
        </Row>
        <Row>

        </Row>
    </Container>
  );
}
