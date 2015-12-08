var fs = require("fs"),
    tape = require("tape"),
    new_script = require("..");


var Reader = new_script.Reader,
    evaluate_reader = new_script.evaluate_reader,

    test_file = fs.readFileSync(__dirname + "/test.ns").toString();


tape("evaluate(value: Value)", function(assert) {
    var reader = new Reader(test_file),
        ret = evaluate_reader(reader);

    console.log(ret);

    assert.end();
});
