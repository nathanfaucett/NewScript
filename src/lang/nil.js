var NilPrototype;


function Nil() {}
NilPrototype = Nil.prototype;

Nil.isNil = function(value) {
    return value instanceof Nil;
};

NilPrototype.to_string = function() {
    return "nil";
};

NilPrototype.inspect = NilPrototype.toString = NilPrototype.to_string;


module.exports = new Nil();
