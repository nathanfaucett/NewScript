var isWhitespace = require("is_whitespace");


module.exports = number_reader;


function number_reader(reader, ch) {
    var raw_number = ch;

    while (true) {
        ch = reader.read();

        if (ch === -1 || isWhitespace(ch) || reader.is_marco(ch)) {
            reader.unread();
            break;
        }

        raw_number += ch;
    }

    return +raw_number;
}
