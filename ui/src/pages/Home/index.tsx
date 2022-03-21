import "./home.css";
import * as React from 'react';
import Header from "../../layout/Header";
import { Form ,Button, Container, Row, Col} from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginAdmin } from "../../services/login";

export interface IAppProps {
}

type Inputs = {
    email:string,
    password:string
}

export default function Home (props: IAppProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [type,setType] = React.useState<string>("admin");
    const onSubmit: SubmitHandler<Inputs> = React.useCallback((data)=>{
        if(type==="admin"){
            loginAdmin(data);
        }
        else if(type==="student"){
            loginAdmin(data);
        }
        else{
            loginAdmin(data);
        }
    },[type]);
    const changeType:React.ChangeEventHandler<HTMLSelectElement>  = (e:React.FormEvent<HTMLSelectElement>)=>{
        setType((e.target as HTMLSelectElement).value);
    }
  return (
    <div>
      <Header/>
        <Container>
            <Row>
                <Col id="login">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Login</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Select onChange={changeType}>
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
