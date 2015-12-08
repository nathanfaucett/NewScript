var isNullOrUndefined = require("is_null_or_undefined"),
    nil = require("../lang/nil"),
    match_symbol = require("./match_symbol");


module.exports = interpret_token;


function interpret_token(token) {
    var ret;

    if (token === "nil") {
        return nil;
    } else if (token === "true") {
        return true;
    } else if (token === "false") {
        return false;
    }

    ret = match_symbol(token);

    if (isNullOrUndefined(ret)) {
        return nil;
    } else {
        return ret;
    }
}
