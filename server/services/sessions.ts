import models from '../utils/db';
import { v4 as uuidv4 } from 'uuid';
import { teacher } from '../models/teacher';
import { sequelize } from "../utils/db";
import { QueryTypes } from "sequelize";
import { studentBySem } from '../controllers/student';

type session = {
    name:string,
    date:string,
    start:string,
    end:string,
    before:number,
    validity:number,
    sem:number,
    cid:number,
    tid:number
}

export const createSession = async (data:session) => {
    try{
        const uuidSession = uuidv4();
        await models.session.create({
            ...data,
            uuid:uuidSession
        })
        return{
            ...data,
            uuid:uuidSession
        }
    }
    catch(e){
        return{
            error:e.message
        }
    }
}

export const getAll =async () => {
    try{
        const sessions = await sequelize.query("select session.name as name,session.id as sid,session.start as start,session.before as entrybefore,session.validity as validity,session.end as end,session.date as date,session.sem as sem,session.cid as cid,session.tid as tid,teacher.name as tname,course.name as cname from session ,course,teacher where session.tid=teacher.id and course.id=session.cid",{
            type:QueryTypes.SELECT
        })
        return sessions;
    }
    catch(e){
        return{
            error:e.message
        }
    }
}
export const deleteSession = async(id:number)=>{
    try{
        await models.session.destroy({
            where:{
                id:id
            }
        });
        return {
            message:"session deleted"
        }
    }
    catch(e){
        return{
            error:e.message
        }
    }
}
export const getSessionByCidSem =async (cid:number,sem:number) => {
    try{
        const sessions = await sequelize.query(`select session.name as name,session.id as sid,session.start as start,session.before as entrybefore,session.validity as validity,session.end as end,session.date as date,session.sem as sem,session.cid as cid,session.tid as tid,teacher.name as tname from session inner join teacher where session.tid=teacher.id and session.cid=${cid} and session.sem=${sem}`,{
            type:QueryTypes.SELECT
        })
        return sessions;
    }
    catch(e){
        return{
            error:e.message
        }
    }
}
export const markAttendance = async(sessionId:number,sid:number,cid:number,sem:number)=>{
    try{
        const sessionData = await models.session.findOne({
            where:{
                id:sessionId
            }
        });
        if(sessionData?.cid==cid&&sessionData?.sem==sem){
            const res = await models.attendance.findOne({
                where:{
                    stid:sid,
                    sid:sessionId
                }
            });
            if(res===null){
                await models.attendance.create({
                    sid:sessionId,
                    stid:sid,
                    logtime:new Date()
                })
                return {
                    message:`Marked attendance by ${sid} on ${new Date().toUTCString()}`,
                    date:new Date().toUTCString()
                }
            }
            throw new Error("Already marked attendance");
        }
        throw new Error("Session and student credentials don't match");
    }
    catch(e){
        return{
            error:e.message
        }
    }
}
export const getSessionById =async (id:number) => {
    try{
        const session = await models.session.findOne({
            where:{
                id:id
            }
        })
        const attendance = await  sequelize.query(`select student.id as studId,student.name as sname from student,attendance where student.id = attendance.stid and sid=${id}`,{
            type:QueryTypes.SELECT
        })
        const studentCount = await sequelize.query(`select count(id) as student_count from student group by cid having student.cid=${session?.cid}`,{
            type:QueryTypes.SELECT
        })
        return {
            session:session,
            attendance:attendance,
            studentCount:studentCount
        }

    }
    catch(e){
        return{
            error:e.message
        }
    }
}