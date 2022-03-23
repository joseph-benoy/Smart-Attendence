import * as React from 'react';
import HeaderPlain from '../../layout/HeaderPlain';
import { Tabs,Tab } from 'react-bootstrap';
import Dept from './Dept';
import Course from './Course';
export interface IAdminProps {
}

export default function Admin (props: IAdminProps) {
  return (
    <>
    <HeaderPlain/>
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
        <Tab eventKey="student" title="Student">
        </Tab>
      </Tabs>
    </main>
    </>
  );
}
