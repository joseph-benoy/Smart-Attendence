export interface teacher{
    id:number,
    name:string,
    email:string,
    password?:string,
    did:number,
    dname:string
}
export interface dteacher{
    deptName:string,
    teachers:teacher[]
}