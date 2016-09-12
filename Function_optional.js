function buildname(firstName, lastName) {
    if (lastName) {
        return firstName + "" + lastName;
    }
    else {
        return firstName;
    }
}
var rsult = buildname("shah");
var reslt2 = buildname("jon", "james");
var buildName4 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
