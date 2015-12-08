var isWhitespace = require("is_whitespace");


module.exports = token_reader;


function token_reader(reader, ch) {
    var raw_token = ch;

    while (true) {
        ch = reader.read();

        if (ch === -1 || isWhitespace(ch) || reader.is_marco(ch)) {
            reader.unread();
            break;
        }

        raw_token += ch;
    }

    return raw_token;
}
