import axios from 'axios';
import * as React from 'react';
import { Container, Row ,Col ,Card,Button} from 'react-bootstrap';
import { session } from '../../../types/session';
import { accessJoin } from '../../../utils/session';
import { apiUrls } from '../../../utils/urls';
import qs from 'qs';
import { useAppSelector } from '../../../hooks/store';
import { useNavigate } from 'react-router-dom';

export interface ISessionsProps {
}

export default function Sessions (props: ISessionsProps) {
    const [sessions,setSessions] = React.useState<Array<session>>([]);
    const student = useAppSelector((state)=>state.student);
    const nav = useNavigate();
    React.useEffect(()=>{
        axios.post(apiUrls.session.bySem,qs.stringify({
            cid:student.cid,
            sem:student.sem
        })).then((res)=>{
            setSessions(res.data.reverse());
        }).catch((e)=>{
            alert("Couldn't fetch sessions");
        })
    },[]);
    const joinSession = (sid:number)=>{
        nav(`/join/${sid}`);
    }
  return (
    <Container>
        <Row>
            <Col>
                <h3 style={{textAlign:"center"}}>Sessions</h3>
            </Col>
        </Row>
        <Row>
            {
                sessions.map((item)=>{
                    const permit = accessJoin(item.date,item.start,item.end,item.entrybefore,item.validity)
                    return(                    <Col>
                        <Card className="mb-2" bg={permit?'danger':'light'} text={permit?'light':'dark'} >
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
                                <Button variant="primary" disabled={!permit} onClick={()=>joinSession(item.sid)}>{permit?"Attend":"Session finished"}</Button>
                            </Card.Body>
                        </Card>
                    </Col>);
                })
            }
        </Row>
    </Container>
  );
}
