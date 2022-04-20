import "./student.css";
import * as React from 'react';
import HeaderPlain from '../../layout/HeaderPlain';
import { Tabs,Tab } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks/store';
import { studentOut } from '../../store/slices/auth';
import { useNavigate } from 'react-router-dom';
import Profile from "./Profile";
import Sessions from "./Sessions";
export interface IStudentProps {
}

export default function Student (props: IStudentProps) {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const logout = React.useCallback(()=>{
    dispatch(studentOut());
    nav("/");
  },[]);
  return (
    <>
    <HeaderPlain logOut={logout}/>
    <main>
      <Tabs defaultActiveKey="sessions" className="mb-3">
        <Tab eventKey="sessions" title="Sessions">
          <Sessions/>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Profile/>
        </Tab>
      </Tabs>
    </main>
    </>
  );
}
