import * as React from 'react';
import HeaderPlain from '../../layout/HeaderPlain';
import { useAppDispatch } from '../../hooks/store';
import { studentOut } from '../../store/slices/auth';
import { useNavigate } from 'react-router-dom';
import { QrReader } from 'react-qr-reader';
import { Col, Container, Row,Spinner } from 'react-bootstrap';
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
  const [message,setMessage] =  React.useState('Scan the student QR code');
  return (
    <>
    <HeaderPlain logOut={logout}/>
    <main>
    <QrReader 
            onResult={(result, error) => {
                if (!!result) {
                  setData(result.getText());
                  setSpin(true);
                  setMessage("Validating Student ID...");
                    
                }
      
                if (!!error) {
                  console.info(error);
                }
              }}
              constraints={{ facingMode: 'user' }}
              containerStyle={{width:"30%",display:"block",marginLeft:"auto",marginRight:"auto"}}
    />
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
                {
                    spin?<Spinner animation="border" />:null
                }
              <p></p>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>{data}</p>
            </Col>
        </Row>
    </Container>
    </main>
    </>
  );
}
