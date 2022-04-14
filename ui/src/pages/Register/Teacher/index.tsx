import * as React from 'react';
import {Modal,Button,Form} from "react-bootstrap";
import useDept from '../../../hooks/useDept';
import { useForm } from "react-hook-form";
import { addTeacher } from '../../../services/teacher';
import { useNavigate } from 'react-router-dom';

export interface ITeacherRegistrationProps {
    show:boolean,
    handleClose:()=>void
}
type Inputs = {
    name: string,
    email: string,
    password:string,
    did:string
  };
export default function TeacherRegistration (props: ITeacherRegistrationProps) {
    const dept = useDept();
    const { register, handleSubmit} = useForm<Inputs>();
    const nav = useNavigate();
    const onSubmit = async (data:Inputs) =>{
        try{
            await addTeacher(data);
            nav("/");
        }
        catch(e){

        }
    }
  return (
    <>
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register as teacher</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control required {...register("name")} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control required {...register("email")} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control required {...register("password")} type="password" placeholder="Enter password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Department</Form.Label>
                    <Form.Select required {...register("did")}>
                        {
                            dept.map((item)=>(
                                <option value={item.id}>{item.name}</option>
                            ))
                        }
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
