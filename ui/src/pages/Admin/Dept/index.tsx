import * as React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row,Form} from 'react-bootstrap';
import { Plus, Trash} from 'react-bootstrap-icons';
import { addNewDept, deleteDept, getAllDepts } from '../../../services/dept';

export interface IDeptProps {
}

interface dept{
    name:string,
    id:number
}

export default function Dept (props: IDeptProps) {
    const [depts,setDepts] = React.useState<Array<dept>>([]);
    const [reload,setReload] = React.useState<Boolean>(false);
    const [deptName,setDeptName] = React.useState<string>("");
    React.useEffect(()=>{
        (
            async()=>{
                try{
                const data = await getAllDepts();
                setDepts(data);
                }
                catch(e){
                    alert("Couldn't fetch departements");
                }
            }
        )()
    },[reload]);
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
