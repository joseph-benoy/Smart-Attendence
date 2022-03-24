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
        getAllTeachersByDept:"/api/teacher/bydepts"
    }
}