import { admin as _admin } from "./admin";
import { course as _course } from "./course";
import { dept as _dept } from "./dept";
import { student as _student } from "./student";
import { teacher as _teacher } from "./teacher";
export { _admin as admin, _course as course, _dept as dept, _student as student, _teacher as teacher, };
export function initModels(sequelize) {
    const admin = _admin.initModel(sequelize);
    const course = _course.initModel(sequelize);
    const dept = _dept.initModel(sequelize);
    const student = _student.initModel(sequelize);
    const teacher = _teacher.initModel(sequelize);
    student.belongsTo(course, { as: "cid_course", foreignKey: "cid" });
    course.hasMany(student, { as: "students", foreignKey: "cid" });
    course.belongsTo(dept, { as: "did_dept", foreignKey: "did" });
    dept.hasMany(course, { as: "courses", foreignKey: "did" });
    return {
        admin: admin,
        course: course,
        dept: dept,
        student: student,
        teacher: teacher,
    };
}
