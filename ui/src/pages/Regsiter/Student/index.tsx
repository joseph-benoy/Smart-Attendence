import * as React from 'react';
import {Modal,Button,Form} from "react-bootstrap";

export interface IStudentRegistrationProps {
    show:boolean,
    handleClose:()=>void
}

export default function StudentRegistration (props: IStudentRegistrationProps) {
  return (
    <>
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Regsiter as Student</Modal.Title>
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
                            <Form.Label>Course</Form.Label>
                            <Form.Select>
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
                            <Form.Label>Semester</Form.Label>
                            <Form.Select>
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
