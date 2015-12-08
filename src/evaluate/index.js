var ImmutableList = require("immutable-list"),
    Symbol = require("../lang/Symbol"),
    nil = require("../lang/nil"),
    Context;


module.exports = evaluate;


Context = require("./Context");


evaluate_list = require("./evaluate_list");


function evaluate(input, context) {
    if (ImmutableList.isList(input)) {
        return evaluate_list(input, context);
    } else if (Symbol.is_symbol(input)) {
        return context.get(input);
    } else if (input) {
        return input;
    } else {
        return nil;
    }
}
