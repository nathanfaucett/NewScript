var has = require("has"),
    macros = require("./macros"),
    token_reader = require("./macros/token_reader"),
    number_reader = require("./macros/number_reader"),
    interpret_token = require("./interpret_token"),
    isNumeric = require("is_numeric"),
    isWhitespace = require("is_whitespace");


var ReaderPrototype;


module.exports = Reader;


function Reader(string) {
    this.string = string;
    this.index = -1;
    this.length = string.length;
    this.column = 1;
    this.row = 1;
    this.macros = macros;
    this.options = {};
}
ReaderPrototype = Reader.prototype;

ReaderPrototype.READ_EOF = {};
ReaderPrototype.READ_FINISHED = {};

ReaderPrototype.is_marco = function(ch) {
    return has(this.macros, ch);
};

ReaderPrototype.read = function() {
    var index = this.index + 1;

    if (index !== this.length) {
        this.index = index;
        return this.string.charAt(index);
    } else {
        return -1;
    }
};

ReaderPrototype.unread = function() {
    var index = this.index - 1;

    if (index !== 0) {
        this.index = index;
    } else {
        return -1;
    }
};

ReaderPrototype.next = function(return_on_char, return_on_value) {
    var local_has = has,
        macros = this.macros,
        options = this.options,
        ch;

    while (true) {
        ch = this.read();

        while (ch !== -1 && isWhitespace(ch)) {
            ch = this.read();
        }

        if (ch === -1) {
            return this.READ_EOF;
        }

        if (ch === return_on_char) {
            return return_on_value;
        }

        if (isNumeric(ch)) {
            return number_reader(this, ch, options);
        }

        if (local_has(macros, ch)) {
            return macros[ch](this, ch, options);
        }

        return interpret_token(token_reader(this, ch, options));
    }
};
