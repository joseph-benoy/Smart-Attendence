import type { Sequelize } from "sequelize";
import { admin as _admin } from "./admin";
import type { adminAttributes, adminCreationAttributes } from "./admin";
import { attendance as _attendance } from "./attendance";
import type { attendanceAttributes, attendanceCreationAttributes } from "./attendance";
import { course as _course } from "./course";
import type { courseAttributes, courseCreationAttributes } from "./course";
import { dept as _dept } from "./dept";
import type { deptAttributes, deptCreationAttributes } from "./dept";
import { session as _session } from "./session";
import type { sessionAttributes, sessionCreationAttributes } from "./session";
import { student as _student } from "./student";
import type { studentAttributes, studentCreationAttributes } from "./student";
import { teacher as _teacher } from "./teacher";
import type { teacherAttributes, teacherCreationAttributes } from "./teacher";

export {
  _admin as admin,
  _attendance as attendance,
  _course as course,
  _dept as dept,
  _session as session,
  _student as student,
  _teacher as teacher,
};

export type {
  adminAttributes,
  adminCreationAttributes,
  attendanceAttributes,
  attendanceCreationAttributes,
  courseAttributes,
  courseCreationAttributes,
  deptAttributes,
  deptCreationAttributes,
  sessionAttributes,
  sessionCreationAttributes,
  studentAttributes,
  studentCreationAttributes,
  teacherAttributes,
  teacherCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const admin = _admin.initModel(sequelize);
  const attendance = _attendance.initModel(sequelize);
  const course = _course.initModel(sequelize);
  const dept = _dept.initModel(sequelize);
  const session = _session.initModel(sequelize);
  const student = _student.initModel(sequelize);
  const teacher = _teacher.initModel(sequelize);

  session.belongsTo(course, { as: "cid_course", foreignKey: "cid"});
  course.hasMany(session, { as: "sessions", foreignKey: "cid"});
  student.belongsTo(course, { as: "cid_course", foreignKey: "cid"});
  course.hasMany(student, { as: "students", foreignKey: "cid"});
  course.belongsTo(dept, { as: "did_dept", foreignKey: "did"});
  dept.hasMany(course, { as: "courses", foreignKey: "did"});
  teacher.belongsTo(dept, { as: "did_dept", foreignKey: "did"});
  dept.hasMany(teacher, { as: "teachers", foreignKey: "did"});
  attendance.belongsTo(session, { as: "sid_session", foreignKey: "sid"});
  session.hasMany(attendance, { as: "attendances", foreignKey: "sid"});
  attendance.belongsTo(student, { as: "st", foreignKey: "stid"});
  student.hasMany(attendance, { as: "attendances", foreignKey: "stid"});
  session.belongsTo(teacher, { as: "tid_teacher", foreignKey: "tid"});
  teacher.hasMany(session, { as: "sessions", foreignKey: "tid"});

  return {
    admin: admin,
    attendance: attendance,
    course: course,
    dept: dept,
    session: session,
    student: student,
    teacher: teacher,
  };
}
