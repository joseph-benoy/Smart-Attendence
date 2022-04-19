import * as React from 'react';
import { Col, Container, Row ,Form,Button} from 'react-bootstrap';
import useDept from '../../../hooks/useDept';
import useCourseByDept from '../../../hooks/useCoureByDept';
import { course } from '../../../types/course';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name:string,
    date:string,
    start:string,
    end:string,
    cid:string,
    sem:string,
    before:string,
    validity:string
};


export interface INewProps {
}

export default function New (props: INewProps) {
    const dept = useDept();
    const [deptName,setDeptName] = React.useState<string>('');
    const courses = useCourseByDept(deptName);
    const { register, handleSubmit,  formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <Container>
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
                    <Form.Control required type="date" placeholder="Enter session date" {...register("date")}/>
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
