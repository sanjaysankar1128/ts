interface User {
    name: string,
    age: number
}

const user: User = {
    name: 'test',
    age: 40
}

interface Function {
     ( x: number, y: number ): number
}

let add:Function =(p1:number,p2:number) =>{
    return p1+p2
}
interface Employee extends User {
    employeeId:number
}
const employee:Employee ={
    name:'john',
    age:20,
    employeeId:100
}

type StrorNum = string|number
let errorcode:StrorNum = '401'
errorcode =401