var ImmutableVector = require("immutable-vector");


module.exports = vector_reader;


function vector_reader(reader) {
    var array = [],
        READ_FINISHED = reader.READ_FINISHED,
        value = reader.next("]", READ_FINISHED);

    while (value !== READ_FINISHED) {
        array[array.length] = value;
        value = reader.next("]", READ_FINISHED);
    }

    return ImmutableVector.fromArray(array);
}
