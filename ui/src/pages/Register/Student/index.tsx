import * as React from 'react';
import {Modal,Button,Form} from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import useCourseByDept from '../../../hooks/useCoureByDept';
import useCourse from '../../../hooks/useCourse';
import useDept from '../../../hooks/useDept';
import { addStudent } from '../../../services/student';
import { course } from '../../../types/course';

export interface IStudentRegistrationProps {
    show:boolean,
    handleClose:()=>void
}
type Inputs = {
    name: string,
    email: string,
    password: string,
    cid: string,
    sem: string,
  };
export default function StudentRegistration (props: IStudentRegistrationProps) {
    const { register, handleSubmit } = useForm<Inputs>();
    const nav = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = async(data)=>{
        try{
            await addStudent(data);
            nav("/");
        }
        catch(e){}
    }
    const dept = useDept();
    const [deptName,setDeptName] = React.useState<string>('');
    const courses = useCourseByDept(deptName);
  return (
    <>
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Regsiter as Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter name"  {...register("name")} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email"  {...register("email")} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Enter password"  {...register("password")} />
                </Form.Group>
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
                    <Form.Select required  {...register("cid")} >
                        <option selected disabled>Choose course</option>
                        {
                            courses.map((item:course)=>(
                                <option value={item.cid}>{item.cname}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Semester</Form.Label>
                    <Form.Select required  {...register("sem")} >
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
