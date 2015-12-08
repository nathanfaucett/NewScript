var isFunction = require("is_function"),
    evaluate;


module.exports = evaluate_list;


evaluate = require("./index");


function evaluate_list(input, context) {
    var first = input.first(),
        list;

    if (input.size() > 0) {
        if (context.has_special_form(first)) {
            return context.get_special_form(first)(input, context);
        } else if (context.has_macro(first)) {
            return context.get_macro(first)(input);
        }
    }

    list = input.map(function each(value) {
        return evaluate(value, context);
    });

    first = list.first();

    if (isFunction(first)) {
        return first(list.shift());
    } else {
        return list;
    }
}
