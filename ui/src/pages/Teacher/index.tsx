import * as React from 'react';
import HeaderPlain from '../../layout/HeaderPlain';
import { Tabs,Tab } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks/store';
import { teacherOut } from '../../store/slices/auth';
import { useNavigate } from 'react-router-dom';
import Students from './Students';
import New from './New';
import All from './All';
export interface ITeacherProps {
}

export default function Teacher (props: ITeacherProps) {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const logout = React.useCallback(()=>{
    dispatch(teacherOut());
    nav("/");
  },[]);
  return (
    <>
    <HeaderPlain logOut={logout}/>
    <main>
      <Tabs defaultActiveKey="new" className="mb-3">
        <Tab eventKey="new" title="New session">
          <New/>
        </Tab>
        <Tab eventKey="all" title="All sessions">
          <All/>
        </Tab>
        <Tab eventKey="student" title="Students">
          <Students/>
        </Tab>
      </Tabs>
    </main>
    </>
  );
}
