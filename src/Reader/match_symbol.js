var Symbol = require("../lang/Symbol"),
    Keyword = require("../lang/Keyword");


module.exports = match_symbol;


function match_symbol(token) {
    if (token.charAt(0) === ":") {
        return new Keyword(token);
    } else {
        return new Symbol(token);
    }
}
