import * as React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row,Form} from 'react-bootstrap';
import { Plus, Trash} from 'react-bootstrap-icons';
import useDept from '../../../hooks/useDept';
import { addNewDept, deleteDept } from '../../../services/dept';
import { dept } from '../../../types/dept';

export interface IDeptProps {
}


export default function Dept (props: IDeptProps) {
    const [reload,setReload] = React.useState<boolean>(false);
    const depts = useDept(reload);
    const [deptName,setDeptName] = React.useState<string>("");
    const add = ()=>{
        addNewDept(deptName);
        setReload(!reload);
        setDeptName("");
    }
  return (
    <Container>
        <Row>
            <Col lg={11}>
                <Form.Group className="mb-3">
                    <Form.Control value={deptName} id="addDept" type="text" placeholder="Department name" onChange={(e)=>setDeptName(e.target.value)} />
                </Form.Group>
            </Col>
            <Col lg={1}>
                <Button variant='dark' onClick={add}><Plus/></Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <ListGroup>
                    {
                        depts.map((item)=>(
                            <ListGroupItem>{item!.name}<Button variant='danger' className="float-end" onClick={()=>{deleteDept(item.id);setReload(!reload)}}><Trash/></Button></ListGroupItem>
                        ))
                    }
                </ListGroup>
            </Col>
        </Row>
    </Container>
  );
}
