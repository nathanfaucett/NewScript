var fs = require("fs"),
    tape = require("tape"),
    new_script = require("..");


var Reader = new_script.Reader,
    test_file = fs.readFileSync(__dirname + "/test.ns").toString();


tape("Reader(string: String)", function(assert) {
    var reader = new Reader(test_file),
        next = reader.next();

    while (next !== reader.READ_EOF) {
        console.log(next);
        next = reader.next();
    }

    assert.end();
});
