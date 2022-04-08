import axios from 'axios';
import * as React from 'react';
import { Button, Col, Container, ListGroup, ListGroupItem, Row,Form, Table} from 'react-bootstrap';
import {Trash} from 'react-bootstrap-icons';
import { student } from '../../../types/student';
import { apiUrls } from '../../../utils/urls';
import qs from "qs";

export interface IStudentProps {
}

export default function Student (props: IStudentProps) {
    const [studentData,setStudentData] = React.useState<Array<student>>([]);
    const [reload,setReload] = React.useState<boolean>(false);
    const deleteStudent = async (id:number) => {
        try{
            await axios.delete(apiUrls.student.delete,{
                headers:{ 
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  data:qs.stringify({id:id})
            });
            alert("Deleted student");
            setReload(!reload);
        }
        catch(e){
            alert(e.message);
        }
    }
    React.useEffect(()=>{
        axios.get("/api/student/all").then((res)=>{
            setStudentData(res.data);
        })
        .catch((e)=>{
            alert("Couldn't fetch students");
        })
    },[reload]);

  return (
    <Container>
        <Row>
            <Col>
            <Table hover responsive>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Sem</th>
                    <th>Course</th>
                    <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentData.map((student)=>(
                            <tr>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.sem}</td>
                                <td>{student.cname}</td>
                                <td>{student.dname}</td>
                                <td><Button variant='danger' onClick={()=>{deleteStudent(student.sid);}}><Trash/></Button></td>
                            </tr>
                        ))
                    }   
                </tbody>  
            </Table>           
            </Col>
        </Row>
    </Container>
  );
}
