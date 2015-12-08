module.exports = comment_reader;


function comment_reader(reader) {
    var ch;

    do {
        ch = reader.read();
    } while (ch !== -1 && ch !== "\n" && ch !== "\r");

    return reader;
}
