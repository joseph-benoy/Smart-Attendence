import * as React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row,Form} from 'react-bootstrap';
import { Plus, Trash} from 'react-bootstrap-icons';
import useDept from '../../../hooks/useDept';
import { addCourse } from '../../../services/course';
import { dept } from '../../../types/dept';

export interface ICourseProps {
}

interface course{
    name:string,
    id:number,
    did:number
}
export default function Course (props: ICourseProps) {
    const [courseName,setCoursename] = React.useState<string>("");
    const [did,setDid] = React.useState<string>("");
    const [courses,setCourses] = React.useState<Array<course>>();
    const depts = useDept();
  return (
    <Container>
        <Row>
            <Col lg={7}>
                <Form.Group className="mb-3">
                    <Form.Control value={courseName} type="text" placeholder="Course name" onChange={(e)=>setCoursename(e.target.value)} />
                </Form.Group>
            </Col>
            <Col lg={4}>
                <Form.Group className="mb-3">
                    <Form.Select onChange={(e)=>setDid(e.target.value)}>
                        <option disabled selected>choose Department</option>
                        {
                            depts.map((item:dept)=>(
                                <option value={item.id}>{item.name}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col lg={1}>
                <Button variant="dark" onClick={()=>addCourse(courseName,did)}><Plus/></Button>
            </Col>
        </Row>
        <Row>
            <Col>
                        
            </Col>
        </Row>
    </Container>
  );
}
