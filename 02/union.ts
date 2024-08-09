let number :number| string = 10;

//that's how we can use union type in typescript to mix two or more data types in a single variable.


number = "ten";
number =12;

//both are allowed when we have both the types in union type.

type user={
    name:string;
    id:number;
}

type admin ={
    userName:string;
    id:number;
    role:string;
}

let fahad:user|admin = {
    name:"fahad",
    id:785,
}

fahad={userName:"fahad",id:785,role:"admin"};  

const data:number []=[1,2,3,4,5,6,7,8,9,10];
const data2:string[]=["1","2","3","4","5","6","7","8","9","10"];
const data3:(number | string | boolean)[]=[1,2,3,4,5,6,7,8,9,10,"1","2","3","4","5","6","7","8","9","10", true, false]; 
