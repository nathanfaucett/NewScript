var extend = require("extend"),
    evaluate = require("./evaluate"),
    global = require("./lang/global"),
    Context = require("./evaluate/Context");


module.exports = evaluate_reader;


function evaluate_reader(reader, context) {
    var READ_EOF = reader.READ_EOF,
        input = reader.next(),
        ret;

    context = context || new Context(extend({}, global), null);

    while (input !== READ_EOF) {
        ret = evaluate(input, context);
        input = reader.next();
    }

    return ret;
}
