export const apiUrls = {
    adminAuth:"/api/admin/login",
    dept:{
        new:"/api/department/new",
        all:"/api/department/all",
        delete:"/api/department/delete"
    },
    course:{
        new:"/api/course/new",
        getAllByDepts:"/api/course/allbydepartment",
        delete:"/api/course/delete"
    },
    teacher:{
        getAllTeachersByDept:"/api/teacher/bydepts",
        delete:"/api/teacher/delete",
        add:"/api/teacher/new",
        login:"/api/teacher/auth/login"
    },
    student:{
        delete:"/api/student/delete",
        all:"/api/student/all",
        new:"/api/student/new",
        login:"/api/student/auth/login"
    },
    session:{
        new:"/api/session/new",
        all:"/api/session/all",
        delete:"/api/session/delete"
    }
}