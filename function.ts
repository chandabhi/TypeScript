// Function return number specific values
function add(a: number,b: number): number{
    return a+b;
}
// function doesn't return anything/void
function log(message : string):void{
    console.log(message)
}

// 
function logAndThrow(errorMessage: string){
    console.log(errorMessage)
    throw new console.error(errorMessage);  
}