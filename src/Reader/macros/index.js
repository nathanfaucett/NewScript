var macros = exports;


macros["\""] = require("./string_reader");
macros[";"] = require("./comment_reader");

macros["("] = require("./list_reader");
macros[")"] = require("./unmatched_delimiter_reader");

macros["["] = require("./vector_reader");
macros["]"] = require("./unmatched_delimiter_reader");

macros["{"] = require("./hash_map_reader");
macros["}"] = require("./unmatched_delimiter_reader");
