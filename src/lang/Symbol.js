var SymbolPrototype;


module.exports = Symbol;


function Symbol(value) {
    this.value = value;
}

Symbol.is_symbol = function(value) {
    return value && value.constructor === Symbol;
};

SymbolPrototype = Symbol.prototype;

SymbolPrototype.to_string = function() {
    return this.value;
};

SymbolPrototype.inspect = SymbolPrototype.toString = SymbolPrototype.to_string;
