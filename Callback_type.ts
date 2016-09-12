

function callBacxk(text:string) {
    console.log("inside text"+Text)
}

function calling(intialText:string,callBacxk : (text:string)=>void) 
{
    callBacxk(intialText);
}


calling("calinf","calbck");