import * as React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row,Form} from 'react-bootstrap';
import { Plus, Trash} from 'react-bootstrap-icons';
import useCourse from '../../../hooks/useCourse';
import useDept from '../../../hooks/useDept';
import { addCourse, deleteCourse } from '../../../services/course';
import { dcourse } from '../../../types/course';
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
    const [reload,setReload] = React.useState<boolean>(false);
    const courses:dcourse[] = useCourse(reload);
    const depts = useDept();
    const add = ()=>{
        addCourse(courseName,did);
        setReload(!reload);
        setCoursename("");
    }
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
                <Button variant="dark" onClick={add}><Plus/></Button>
            </Col>
        </Row>
        <Row>
            <Col>
                        {
                            courses.map((dcourse:dcourse)=>(
                                <>
                                    <h3>{dcourse.deptName}</h3>
                                    <ListGroup>
                                        {
                                            dcourse.courses.map((course)=>(
                                                <ListGroupItem>{course.cname}<Button variant="danger" className="float-end" onClick={()=>{deleteCourse(course.cid);setReload(!reload)}}><Trash/></Button></ListGroupItem>
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
