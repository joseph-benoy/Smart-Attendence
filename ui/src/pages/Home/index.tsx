import "./home.css";
import * as React from 'react';
import Header from "../../layout/Header";
import { Form ,Button, Container, Row, Col} from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginAdmin} from "../../services/login";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/store";
import { adminLogin, studentLog, teacherLog } from "../../store/slices/auth";
import { teacherLogin } from "../../services/teacher";
import { studentLogin } from "../../services/student";
import { updateStudent } from "../../store/slices/student";
export interface IAppProps {
}

type Inputs = {
    email:string,
    password:string
}

export default function Home (props: IAppProps) {
    const { register, handleSubmit } = useForm<Inputs>();
    const [type,setType] = React.useState<string>("admin");
    const nav:NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();
    const onSubmit: SubmitHandler<Inputs> = React.useCallback(async(data)=>{
        if(type==="admin"){
            if(await loginAdmin(data)){
                dispatch(adminLogin());
                nav("/admin");
            }
        }
        else if(type==="student"){
            const studentData = await studentLogin(data);
            if(studentData){
                dispatch(studentLog());
                dispatch(updateStudent(studentData))
                nav("/student");
            }        
        }
        else{
            if(await teacherLogin(data)){
                dispatch(teacherLog());
                nav("/teacher");
            }
        }
    },[type]);
    const changeType:React.ChangeEventHandler<HTMLSelectElement>  = (e:React.FormEvent<HTMLSelectElement>)=>{
        setType((e.target as HTMLSelectElement).value);
    }
    const goToReg = ()=>{
        nav("/register");
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
                                <option value={"admin"}>Admin</option>
                                <option value={"teacher"}>Teacher</option>
                                <option value={"student"}>Student</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control {...register("email")} type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control {...register("password")} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="link" onClick={goToReg}>Register</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
