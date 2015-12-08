var arrayMap = require("array-map"),
    isFunction = require("is_function"),
    nil = require("../lang/nil"),
    Context, evaluate;


var special_forms = exports;


evaluate = require("./index");
Context = require("./Context");


special_forms.evaluate = function(input, context) {
    return evaluate(input.get(1, nil), context);
};

special_forms.quote = function(input) {
    return input.get(1, nil);
};

special_forms.call = function(input, context) {
    var value = evaluate(input.get(1), context),
        name = input.get(2),
        fn = value[name];

    if (!isFunction(fn)) {
        throw new TypeError(value + "." + name + " is not a function");
    } else {
        return value[name].apply(value, arrayMap(input.toArray().slice(3), function(value) {
            return evaluate(value, context);
        }));
    }
};

special_forms["var"] = function(input, context) {
    return context.set(input.get(1), evaluate(input.get(2), context));
};

special_forms.defmacro = function(input, context) {
    var argNames = input.get(2);

    return context.set_macro(input.get(1), function marco(args) {
        var scope = {};

        args = args.shift();

        if (isFunction(argNames.reduce)) {
            argNames.reduce(function each(accumulator, value, index) {
                accumulator[value] = args.get(index);
                return accumulator;
            }, scope);
        } else {
            scope[argNames] = args;
        }

        return evaluate(input.get(3), new Context(scope, context));
    });
};

special_forms.fn = function(input, context) {
    var argNames = input.get(1);

    return function fn(args) {
        var scope = {};

        if (isFunction(argNames.reduce)) {
            argNames.reduce(function each(accumulator, value, index) {
                accumulator[value] = args.get(index);
                return accumulator;
            }, scope);
        } else {
            scope[argNames] = args;
        }

        return evaluate(input.get(2), new Context(scope, context));
    };
};

special_forms["let"] = function(input, context) {
    return evaluate(input.get(2), new Context(input.get(1).reduce(function each(accumulator, value) {
        accumulator[value.first()] = evaluate(value.get(1), context);
        return accumulator;
    }, {}), context));
};

special_forms["if"] = function(input, context) {
    if (evaluate(input.get(1), context)) {
        return evaluate(input.get(2), context);
    } else {
        return evaluate(input.get(3), context);
    }
};
