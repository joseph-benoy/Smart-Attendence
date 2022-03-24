import * as React from 'react';
import HeaderPlain from '../../layout/HeaderPlain';
import { Tabs,Tab } from 'react-bootstrap';
import Dept from './Dept';
import Course from './Course';
import { useAppDispatch } from '../../hooks/store';
import { adminLogout } from '../../store/slices/auth';
import { useNavigate } from 'react-router-dom';
export interface IAdminProps {
}

export default function Admin (props: IAdminProps) {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const logout = React.useCallback(()=>{
    dispatch(adminLogout());
    nav("/");
  },[]);
  return (
    <>
    <HeaderPlain logOut={logout}/>
    <main>
      <Tabs defaultActiveKey="dept" className="mb-3">
        <Tab eventKey="dept" title="Departments">
          <Dept/>
        </Tab>
        <Tab eventKey="courses" title="Courses">
          <Course/>
        </Tab>
        <Tab eventKey="teachers" title="Teachers">
        </Tab>
        <Tab eventKey="student" title="Students">
        </Tab>
      </Tabs>
    </main>
    </>
  );
}
