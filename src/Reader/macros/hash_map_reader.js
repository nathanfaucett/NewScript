var ImmutableHashMap = require("immutable-hash_map"),
    nil = require("../../lang/nil");


module.exports = hash_map_reader;


function hash_map_reader(reader) {
    var array = [],
        READ_FINISHED = reader.READ_FINISHED,
        value = reader.next("}", READ_FINISHED);

    while (value !== READ_FINISHED) {
        array[array.length] = value;
        value = reader.next("}", READ_FINISHED);
    }

    if (array.length % 2 !== 0) {
        array[array.length] = nil;
    }

    return ImmutableHashMap.fromArray(array);
}
