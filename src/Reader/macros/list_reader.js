var ImmutableList = require("immutable-list");


module.exports = list_reader;


function list_reader(reader) {
    var array = [],
        READ_FINISHED = reader.READ_FINISHED,
        value = reader.next(")", READ_FINISHED);

    while (value !== READ_FINISHED) {
        array[array.length] = value;
        value = reader.next(")", READ_FINISHED);
    }

    return ImmutableList.fromArray(array);
}
