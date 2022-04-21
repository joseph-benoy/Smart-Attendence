// @ts-nocheck
import * as React from 'react';
import HeaderPlain from '../../layout/HeaderPlain';
import { Tabs,Tab, Container, Row,Col } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks/store';
import { teacherOut } from '../../store/slices/auth';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { apiUrls } from '../../utils/urls';
import QueryString from 'qs';
import { session } from '../../types/session';
import { Pie } from 'react-chartjs-2';

export interface ISessionProps {
}
type count = {
    student_count:number
}
type sdetails = {
    session:session,
    attendance:[],
    studentCount:string
}

export default function Session (props: ISessionProps) {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const logout = React.useCallback(()=>{
    dispatch(teacherOut());
    nav("/");
  },[]);
  const {sessionId} = useParams();
  const [sessionData,setSessionData] = React.useState<sdetails>({session:{},attendance:[],studentCount:''});
  React.useEffect(()=>{
    axios.post(apiUrls.session.byId,QueryString.stringify({
        id:sessionId
    })).then((res)=>{
        setSessionData(res.data);
    }).catch((e)=>{
        alert("Couldn't fetch session details");
    })
  },[]);
  return (
    <>
    <HeaderPlain logOut={logout}/>
    <main>
        <Container>
            <Row>
                <Col>
                    <h3>{sessionData!.session.name}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p><b>Date : </b>{sessionData!.session.date}</p>
                    <p><b>Start time : </b>{sessionData!.session.start}</p>
                    <p><b>End time : </b>{sessionData!.session.end}</p>
                    <p><b>Participation : </b>{sessionData!.attendance.length} out of {sessionData!.studentCount}</p>
                </Col>
            </Row>
        </Container>
    </main>
    </>
  );
}
