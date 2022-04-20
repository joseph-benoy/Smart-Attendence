import * as React from 'react';
import { Col, Container, Row ,Form,Button,Modal} from 'react-bootstrap';
import useDept from '../../../hooks/useDept';
import useCourseByDept from '../../../hooks/useCoureByDept';
import { course } from '../../../types/course';
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';
import { apiUrls } from '../../../utils/urls';
import qs from 'qs';


type Inputs = {
    name:string,
    date:string,
    start:string,
    end:string,
    cid:string,
    sem:string,
    before:string,
    validity:string,
    uuid?:string
};


export interface INewProps {
}

export default function New (props: INewProps) {
    const dept = useDept();
    const [deptName,setDeptName] = React.useState<string>('');
    const courses = useCourseByDept(deptName);
    const { register, handleSubmit,  formState: { errors } } = useForm<Inputs>();
    const [session,setSession] = React.useState<Inputs>({} as Inputs);
    const [show,setShow] = React.useState<boolean>(false);
    const onSubmit: SubmitHandler<Inputs> = async (data)=>{
        try{
            const res = await axios.post(apiUrls.session.new,qs.stringify(data));
            setSession(res.data);
            setShow(true);
        }
        catch(e){
            alert(e.message);
        }
    }
    var today:Date | string = new Date();
    var dd:string | number = today.getDate();
    var mm:string | number = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
    dd='0'+dd
    } 
    if(mm<10){
    mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("datefield")?.setAttribute('min',today);
  return (
    <Container>
        <Row>
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                Added new session
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{session.name}</h4>
                <p><b>Session ID : </b>{session.uuid}</p>
                <p><b>Date : </b>{session.date}</p>
                <p><b>Start time : </b>{session.start}</p>
                <p><b>End time : </b>{session.end}</p>
                <p><b>Allow entry before : </b>{session.before} minutes</p>
                <p><b>QR code validity : </b>{session.validity} minutes</p>
                <p><b>Semester : </b>{session.sem}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>setShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
        </Row>
        <Row>
            <Col>
                <h3>New session</h3>
            </Col>
        </Row>
        <Row>
            <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter session name" {...register("name")}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control id="datefield" required type="date" placeholder="Enter session date" {...register("date")}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Start time</Form.Label>
                            <Form.Control required pattern="[0-9]{2}:[0-9]{2}"{...register("start")} type="time" placeholder="Enter session start time" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>End time</Form.Label> 
                            <Form.Control required pattern="[0-9]{2}:[0-9]{2}" {...register("end")} type="time" placeholder="Enter session end time" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Department</Form.Label>
                    <Form.Select required onChange={(e)=>setDeptName(e.target.value)}>
                        <option selected disabled>Choose department</option>
                        {
                            dept.map((item)=>(
                                <option value={item.name}>{item.name}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Course</Form.Label>
                    <Form.Select required   {...register("cid")}>
                        <option selected disabled>Choose course</option>
                        {
                            courses.map((item:course)=>(
                                <option value={item.cid}>{item.cname}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label >Semester</Form.Label>
                    <Form.Select required   {...register("sem")}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Allow entry from</Form.Label>
                    <Form.Select required   {...register("before")}>
                        <option value={5}>5 minutes before</option>
                        <option value={10}>10 minutes before</option>
                        <option value={20}>20 minutes before</option>
                        <option value={30}>30 minutes before</option>
                        <option value={60}>1 hour before</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>QR code validity</Form.Label>
                    <Form.Select required  {...register("validity")} >
                        <option value={5}>5 minutes</option>
                        <option value={10}>10 minutes</option>
                        <option value={20}>20 minutes</option>
                        <option value={30}>30 minutes</option>
                        <option value={60}>1 hour</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
        </Row>
    </Container>
  );
}
