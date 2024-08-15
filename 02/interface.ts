interface User {
    readonly dbId: number;
    id: number;
    name: string;
    age: number;
    googleId?: string;
    // startTrial:()=>{}
    //the function can be defined in this way as well
    startTrial(): string;

    getCoupon(coupenName:string, value:number): number;
}

const histesh: User={
    dbId:1,
    id:2,
    age:22,
    name:"Fahad",
    startTrial:()=>{
        return "Trial Started";
    },  
    getCoupon:(name:"fahad", value:111)=>{
        return 100
    }
}