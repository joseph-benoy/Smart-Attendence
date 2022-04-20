import models from '../utils/db';
import { v4 as uuidv4 } from 'uuid';


type session = {
    name:string,
    date:string,
    start:string,
    end:string,
    before:number,
    validity:number,
    sem:number,
    cid:number
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