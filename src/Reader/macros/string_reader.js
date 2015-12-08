module.exports = string_reader;


function string_reader(reader) {
    var ch = reader.read(),
        raw_string = "";

    while (ch !== "\"") {
        if (ch === -1) {
            throw new SyntaxError("EOF while reading string");
        } else if (ch === "\\") {
            ch = reader.read();

            if (ch === -1) {
                throw new SyntaxError("EOF while reading string");
            } else {
                switch (ch) {
                    case "t":
                        ch = "\t";
                        break;
                    case "r":
                        ch = "\r";
                        break;
                    case "n":
                        ch = "\n";
                        break;
                    case "\\":
                        break;
                    case "\"":
                        break;
                    case "b":
                        ch = "\b";
                        break;
                    case "f":
                        ch = "\f";
                        break;
                }
            }
        }

        raw_string += ch;
        ch = reader.read();
    }

    return raw_string;
}
