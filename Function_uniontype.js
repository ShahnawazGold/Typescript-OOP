function addUnion(arg1, agr2) {
    if (typeof arg1 === "String") {
        return agr1 + "String";
    }
    if (typeof arg1 === "number") {
        return agr1 + 7;
    }
    if (typeof arg1 === "Boolean") {
        return agr1 && false;
    }
}
