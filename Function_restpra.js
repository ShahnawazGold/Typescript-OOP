function buildname(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    // set name
    return firstName + "" + restOfName.join("");
}
//call here
var empollyName = buildname("james", "david", "fari");
