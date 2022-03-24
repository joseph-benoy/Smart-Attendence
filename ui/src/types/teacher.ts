export interface teacher{
    tid:number,
    tname:string,
    temail:string,
    password?:string,
    did:number,
    dname:string
}
export interface dteacher{
    deptName:string,
    teachers:teacher[]
}