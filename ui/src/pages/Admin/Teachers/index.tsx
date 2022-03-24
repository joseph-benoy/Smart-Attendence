import * as React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row,Form} from 'react-bootstrap';
import {Trash} from 'react-bootstrap-icons';
import {dteacher} from "../../../types/teacher";
import {getAllTeacherByDepts} from "../../../services/teacher";
export interface ITeachersProps {
}

export default function Teachers (props: ITeachersProps) {
    const [teachers,setTeacher] = React.useState<Array<dteacher>>([]);
    React.useEffect(()=>{
        (async()=>{
            const data = await getAllTeacherByDepts();
            setTeacher(data);
        })()
    },[]);
  return (
    <Container>
        <Row>
            <Col>
                {
                    teachers.map((dteacher)=>(
                        <>
                            <h3>{dteacher.deptName}</h3>
                            <ListGroup>
                                {
                                    dteacher.teachers.map((teacher)=>(
                                        <ListGroupItem>{teacher.tname}<Button variant="danger" className="float-end"><Trash/></Button></ListGroupItem>
                                    ))
                                }
                            </ListGroup>
                            <br/>
                        </>
                    ))
                }
            </Col>
        </Row>
    </Container>
  );
}
