import type { Sequelize } from "sequelize";
import { admin as _admin } from "./admin";
import type { adminAttributes, adminCreationAttributes } from "./admin";
import { course as _course } from "./course";
import type { courseAttributes, courseCreationAttributes } from "./course";
import { dept as _dept } from "./dept";
import type { deptAttributes, deptCreationAttributes } from "./dept";
import { student as _student } from "./student";
import type { studentAttributes, studentCreationAttributes } from "./student";
import { teacher as _teacher } from "./teacher";
import type { teacherAttributes, teacherCreationAttributes } from "./teacher";

export {
  _admin as admin,
  _course as course,
  _dept as dept,
  _student as student,
  _teacher as teacher,
};

export type {
  adminAttributes,
  adminCreationAttributes,
  courseAttributes,
  courseCreationAttributes,
  deptAttributes,
  deptCreationAttributes,
  studentAttributes,
  studentCreationAttributes,
  teacherAttributes,
  teacherCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const admin = _admin.initModel(sequelize);
  const course = _course.initModel(sequelize);
  const dept = _dept.initModel(sequelize);
  const student = _student.initModel(sequelize);
  const teacher = _teacher.initModel(sequelize);

  student.belongsTo(course, { as: "cid_course", foreignKey: "cid"});
  course.hasMany(student, { as: "students", foreignKey: "cid"});
  course.belongsTo(dept, { as: "did_dept", foreignKey: "did"});
  dept.hasMany(course, { as: "courses", foreignKey: "did"});

  return {
    admin: admin,
    course: course,
    dept: dept,
    student: student,
    teacher: teacher,
  };
}