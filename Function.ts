


function add(a:number,b:number) :number
{
    return a+b;
}

var add1 = function add(a:number,b:number) :number// anymos function
{
    return a+b;
}

var add2: (a: number , b :number)=>number = function add(a:number,b:number) :number// anymos function excpity type
{
    return a+b;
}


var add3: (basevalye: number , icreament :number)=>number = function add(a:number,b:number) :number//bass value
{   
    return a+b;
}



var add4= (a: number , b :number)=> a+b;   // lamda function

