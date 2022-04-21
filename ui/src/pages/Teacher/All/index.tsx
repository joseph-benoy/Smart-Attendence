import axios from 'axios';
import * as React from 'react';
import { Button, Col, Container, Row,Table } from 'react-bootstrap';
import { apiUrls } from '../../../utils/urls';
import {session} from "../../../types/session";
import { ArrowLeftSquare, ArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
export interface IAllProps {
}

export default function All (props: IAllProps) {
    const [sessions,setSessions] = React.useState<Array<session>>([]);
    React.useEffect(()=>{
        axios.get(apiUrls.session.all).then((res)=>{
            setSessions(res.data);
        }).catch((e)=>{
            alert("Couldn't fetch sessions");
        })
    },[]);
    const nav = useNavigate();
  return (
    <Container>
        <Row>
            <Col>
                <h3>Sessions</h3>
            </Col>
        </Row>
        <Row>
            <Col>
            <Table hover responsive>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th>Teacher</th>
                    <th>Course</th>
                    <th>Sem</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sessions.map((session)=>(
                            <tr>
                                <td>{session.sid}</td>
                                <td>{session.name}</td>
                                <td>{session.date}</td>
                                <td>{session.start}</td>
                                <td>{session.end}</td>
                                <td>{session.tname}</td>
                                <td>{session.cname}</td>
                                <td>{session.sem}</td>
                                <td><Button variant="dark" onClick={()=>nav(`/session/${session.sid}`)}><ArrowRight/></Button></td>
                            </tr>
                        ))
                    }   
                </tbody>  
            </Table>                   
            </Col>
        </Row>
    </Container>
  );
}
