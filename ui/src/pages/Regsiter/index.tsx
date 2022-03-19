import "./register.css";
import * as React from 'react';
import Header from "../../layout/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FilePerson, PersonCircle } from "react-bootstrap-icons";
import TeacherRegistration from "./Teacher";
import StudentRegistration from "./Student";
export interface IRegsiterProps {
}

export default function Regsiter (props: IRegsiterProps) {
    const [tModal,setTModal] = React.useState<boolean>(false);
    const [sModal,setSModal] = React.useState<boolean>(false);
    const handleCloseT = React.useCallback(()=>{
        setTModal(false);
    },[]);
    const handleCloseS = React.useCallback(()=>{
        setSModal(false);
    },[]);
  return (
    <div>
      <Header/>
      <Container>
            <Row>
                <TeacherRegistration show={tModal} handleClose={handleCloseT}/>
            </Row>
            <Row>
                <StudentRegistration show={sModal} handleClose={handleCloseS}/>
            </Row>
          <Row>
              <Col lg={6}>
                <FilePerson/>
                <Button variant="primary" onClick={()=>setTModal(true)}>New teacher</Button>
              </Col>
              <Col lg={6}>
                <PersonCircle/>
                <Button variant="primary"  onClick={()=>setSModal(true)}>New student</Button>
              </Col>
          </Row>
      </Container>
    </div>
  );
}
