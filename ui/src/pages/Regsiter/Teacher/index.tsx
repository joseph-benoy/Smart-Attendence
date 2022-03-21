import * as React from 'react';
import {Modal,Button,Form} from "react-bootstrap";

export interface ITeacherRegistrationProps {
    show:boolean,
    handleClose:()=>void
}

export default function TeacherRegistration (props: ITeacherRegistrationProps) {
  return (
    <>
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Regsiter as teacher</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                            <Form.Label>Department</Form.Label>
                            <Form.Select>
                                <option>Admin</option>
                                <option>Teacher</option>
                                <option>Student</option>
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
