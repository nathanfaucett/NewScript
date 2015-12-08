var KeywordPrototype;


module.exports = Keyword;


function Keyword(value) {
    this.value = value;
}

Keyword.is_keyword = function(value) {
    return value && value.constructor === Keyword;
};

KeywordPrototype = Keyword.prototype;

KeywordPrototype.value_type = "Keyword";

KeywordPrototype.to_string = function() {
    return this.value;
};

KeywordPrototype.inspect = KeywordPrototype.toString = KeywordPrototype.to_string;
