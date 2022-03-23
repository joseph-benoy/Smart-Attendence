import * as React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row,Form} from 'react-bootstrap';
import { Plus, Trash} from 'react-bootstrap-icons';
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
    const [did,setDid] = React.useState<number>();
    const [courses,setCourses] = React.useState<Array<course>>();
    const [depts,setDepts] = React.useState<Array<dept>>();
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
                    <Form.Select>
                        <option disabled selected>choose Department</option>
                        {
                            
                        }
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col lg={1}>
                <Button variant="dark"><Plus/></Button>
            </Col>
        </Row>
    </Container>
  );
}
