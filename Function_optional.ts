

function buildname(firstName:string, lastName? :string) :string // optinal 
{
    if (lastName) {

   return firstName+""+lastName;

    } else {
        return firstName;
    }
}
var rsult =buildname ("shah");
var reslt2 =buildname("jon","james");



var buildName4 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}