import "./home.css";
import * as React from 'react';
import Header from "../../layout/Header";
import { Form ,Button, Container, Row, Col} from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";

export interface IAppProps {
}

type Inputs = {
    email:string,
    password:string
}

export default function Home (props: IAppProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <div>
      <Header/>
        <Container>
            <Row>
                <Col id="login">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Select>
                                <option>Admin</option>
                                <option>Teacher</option>
                                <option>Student</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control {...register("email")} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control {...register("password")} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="link">Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
