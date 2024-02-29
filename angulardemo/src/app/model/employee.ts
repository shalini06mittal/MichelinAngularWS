export interface Employee{
    eid:number,
    ename:string,
    email:string,
    phone:string,
    password:string,
    address:{
        city?:string,
        country:string,
        zipcode?:number
    }
}

export class Employee1{
    // constructor(eid:number, ename:string){
    //     this.eid=eid
    //     this.ename= ename
    // }
    constructor(public eid:number, 
        public ename:string){
       
    }
}