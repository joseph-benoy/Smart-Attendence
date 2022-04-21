import * as React from 'react';
import HeaderPlain from '../../layout/HeaderPlain';
import { Tabs,Tab, Container, Row,Col } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks/store';
import { teacherOut } from '../../store/slices/auth';
import { useNavigate, useParams } from 'react-router-dom';
export interface ISessionProps {
}

export default function Session (props: ISessionProps) {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const logout = React.useCallback(()=>{
    dispatch(teacherOut());
    nav("/");
  },[]);
  const {sessionId} = useParams();
  return (
    <>
    <HeaderPlain logOut={logout}/>
    <main>
        <Container>
            <Row>
                <Col>
                    <h3></h3>
                </Col>
            </Row>
        </Container>
    </main>
    </>
  );
}
