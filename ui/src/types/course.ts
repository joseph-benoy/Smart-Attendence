export interface course{
    cid:number,
    cname:string,
    did:number,
    dname:string
}

export interface dcourse{
    deptName:string,
    courses:course[]
}