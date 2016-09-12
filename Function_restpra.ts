

function buildname(firstName:string,...restOfName:string[]) 
{
    // set name
    return firstName+""+restOfName.join("");
}

//call here
var empollyName= buildname ("james","david","fari");