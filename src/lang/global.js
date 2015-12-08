var ImmutableList = require("immutable-list"),
    ImmutableHashMap = require("immutable-hash_map"),
    ImmutableVector = require("immutable-vector"),
    nil = require("./nil");


var global = exports;


global.global = global;

global.math = require("./math");
global.compare = require("./compare");

global.List = ImmutableList;
global.HashMap = ImmutableHashMap;
global.Vector = ImmutableVector;

global.log = function() {
    console.log.apply(console, arguments);
    return nil;
};
