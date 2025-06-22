let hobbies = ["tt",'cooking'];


// let users: (string | number)[];    -  General way
let users: Array <string | number>; // - More Adbvance type

users = [1,'max']
users = [1,2]

let possibleresults : [number,number];
possibleresults=[1,2]
// possibleresults=[1,2,3] - wrong input for fix length specified array

let user:{
    name : string;
    age : string|number;
    hobbies : string[];
    role:{
        description:string;
        id:number
    }
}={
    name:"Abhi",
    hobbies:['Sports','Cooking'],
    age:24,
    role:{
        description:'SWE',
        id:295
    }
}

let val : { }='It should be null or undefined'


let data : Record < string ,string|number >;

data ={}
data={
    'name':'Abhi',
    'age':24
}