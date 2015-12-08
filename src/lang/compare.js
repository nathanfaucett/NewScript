var isEqual = require("is_equal");


var compare = exports;


compare.greaterThan = function(a, b) {
    return a > b;
};
compare.greaterThanEqual = function(a, b) {
    return a >= b;
};

compare.lessThan = function(a, b) {
    return a < b;
};
compare.lessThanEqual = function(a, b) {
    return a <= b;
};

compare.isEqual = isEqual;

compare.not = function(value) {
    return !value;
};
