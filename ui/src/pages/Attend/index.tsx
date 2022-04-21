import * as React from 'react';
import HeaderPlain from '../../layout/HeaderPlain';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { studentOut } from '../../store/slices/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import { Col, Container, Row,Spinner,Button } from 'react-bootstrap';
import axios from 'axios';
import { apiUrls } from '../../utils/urls';
import qs from "qs";
export interface IAttendProps {
}

export default function Attend (props: IAttendProps) {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const logout = React.useCallback(()=>{
    dispatch(studentOut());
    nav("/");
  },[]);
  const [data, setData] = React.useState('');
  const [spin,setSpin] = React.useState<boolean>(false);
  const [marked,setMarked] = React.useState<boolean>(false);
  const [message,setMessage] =  React.useState('Scan the student QR code');
  const {sessionId} = useParams();
  const student = useAppSelector((state)=>state.student)
  return (
    <>
    <HeaderPlain logOut={logout}/>
    <main>
        {!marked?
    <QrReader 
            onResult={(result, error) => {
                if (!!result) {
                  setData(result.getText());
                  setSpin(true);
                  setMessage("Validating Student ID...");
                    axios.post(apiUrls.session.mark,qs.stringify({
                        sessionId:sessionId,
                        sid:student.id,
                        cid:student.cid,
                        sem:student.sem
                    })).then((res)=>{
                        setMessage(`Marked your attendance on ${res.data.date}`);
                        setSpin(false);
                        setMarked(true);
                    }).catch((e)=>{
                        alert("You have already marked attendance for this session");
                        setSpin(false);
                        setMessage("Scan the student QR code again");
                    })
                }
      
                if (!!error) {
                  console.info(error);
                }
              }}
              constraints={{ facingMode: 'user' }}
              containerStyle={{width:"30%",display:"block",marginLeft:"auto",marginRight:"auto"}}
    />:null}
    <Container className='scanMain'>
        <Row>
            <Col>
              <h4 className='textCenter'>{
                  message
              }</h4>
            </Col>
        </Row>
        <Row>
            <Col>
              <Button onClick={()=>nav("/student")}>Go back</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                {
                    spin?<Spinner animation="border" />:null
                }
              <p></p>
            </Col>
        </Row>
        <Row>
            <Col>
            </Col>
        </Row>
    </Container>
    </main>
    </>
  );
}
