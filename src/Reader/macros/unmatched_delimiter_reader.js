module.exports = unmatched_delimiter_reader;


function unmatched_delimiter_reader(reader, ch) {
    throw SyntaxError("Unmatched delimiter: " + ch);
}
