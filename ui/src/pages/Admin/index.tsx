import * as React from 'react';
import HeaderPlain from '../../layout/HeaderPlain';
import { Tabs,Tab } from 'react-bootstrap';
export interface IAdminProps {
}

export default function Admin (props: IAdminProps) {
  return (
    <>
    <HeaderPlain/>
    <main>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="dept" title="Departments">
        </Tab>
        <Tab eventKey="courses" title="Courses">
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
