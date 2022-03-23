import * as React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Plus, Trash} from 'react-bootstrap-icons';
import { deleteDept, getAllDepts } from '../../../services/dept';

export interface IDeptProps {
}

interface dept{
    name:string,
    id:number
}

export default function Dept (props: IDeptProps) {
    const [depts,setDepts] = React.useState<Array<dept>>([]);
    const [reload,setReload] = React.useState<Boolean>(false);
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
  return (
    <Container>
        <Row>
            <Col>
                <Button variant='dark' className="float-end"><Plus/></Button>
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
