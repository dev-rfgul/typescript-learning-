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

const Fahad: Admin  ={
    dbId:1,
    id:2,
    age:22,
    role:"admin",
    name:"Fahad",

    githubId:"fahad",
    startTrial:()=>{
        return "Trial Started";
    },  
    getCoupon:(name:"fahad", value:111)=>{
        return 100
    }
}


//***************reopening of the interface*********************** */

// this is good if we want to add another property or function to the User we can do it again like this 

interface User{
    githubId?:string;
    //it will append the githubId to the User interface
}


// we can add inheritance with the help of inheritence 


interface Admin extends User{
    role: "admin" | "superAdmin" |"TA";
}

