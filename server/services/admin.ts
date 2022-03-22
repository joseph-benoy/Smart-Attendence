import bcrypt from 'bcrypt';
import { createToken } from '../middlewares/jwt';
import models from '../utils/db';
export const loginAdmin = (email:string,password:string)=>{
    models.admin.findOne({
        where:{
            email:email
        },
        raw:true
    }).then((data)=>{
        bcrypt.compare(password,data!.password)
        .then((result)=>{
            if(result){
                const accessToken = createToken({
                    email:data!.email,
                    id:data!.id
                })
            }
        })
    })
}