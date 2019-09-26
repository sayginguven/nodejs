let add = function (a, b) {
    return a + b;
};

let mul = function (a, b) {
    return a * b;
};

let sub = function (a, b) {
    return a - b;
}

//module.exports.calculateAdd = add; // exports this function to other files
//module.exports.calculateMul = mul; // exports this function to other files

//or we can add all functions into 1 object

module.exports = {
    calculateAdd : add,
    calculateMul : mul,
    calculateSub : sub
};