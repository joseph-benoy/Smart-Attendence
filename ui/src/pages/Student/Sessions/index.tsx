import axios from 'axios';
import * as React from 'react';
import { Container, Row ,Col ,Card,Button} from 'react-bootstrap';
import { session } from '../../../types/session';
import { apiUrls } from '../../../utils/urls';

export interface ISessionsProps {
}

export default function Sessions (props: ISessionsProps) {
    const [sessions,setSessions] = React.useState<Array<session>>([]);
    React.useEffect(()=>{
        axios.get(apiUrls.session.all).then((res)=>{
            setSessions(res.data);
        }).catch((e)=>{
            alert("Couldn't fetch sessions");
        })
    },[]);
  return (
    <Container>
        <Row>
            <Col>
                <h3 style={{textAlign:"center"}}>Sessions</h3>
            </Col>
        </Row>
        <Row>
            {
                sessions.map((item)=>(
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    <p><b>Date : </b>{item.date}</p>
                                    <p><b>Start time : </b>{item.start}</p>
                                    <p><b>End time : </b>{item.end}</p>
                                    <p><b>Entry from : </b>{item.entrybefore} minutes before</p>
                                    <p><b>Access : </b>{item.validity} minutes</p>
                                    <p><b>Teacher : </b>{item.tname}</p>
                                </Card.Text>
                                <Button variant="primary">Attend</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </Container>
  );
}
