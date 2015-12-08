var has = require("has"),
    isNull = require("is_null"),
    nil = require("../lang/nil"),
    special_forms;


var ContextPrototype;


module.exports = Context;


special_forms = require("./special_forms");


function Context(scope, parent) {

    this.scope = scope;
    this.parent = parent;

    this.macros = {};
    this.special_forms = special_forms;
}
ContextPrototype = Context.prototype;

function Context_get_special_form(_this, key) {
    var special_forms = _this.special_forms,
        parent = _this.parent;

    if (has(special_forms, key)) {
        return special_forms;
    } else if (!isNull(parent)) {
        return Context_get_special_form(parent, key);
    } else {
        return null;
    }
}

ContextPrototype.has_special_form = function(key) {
    var special_forms = Context_get_special_form(this, key);

    if (isNull(special_forms)) {
        return false;
    } else {
        return has(special_forms, key);
    }
};

ContextPrototype.get_special_form = function(key) {
    var special_forms = Context_get_special_form(this, key);

    if (isNull(special_forms)) {
        throw new ReferenceError(key + " is not defined");
    } else {
        return special_forms[key];
    }
};

function Context_get_macro(_this, key) {
    var macros = _this.macros,
        parent = _this.parent;

    if (has(macros, key)) {
        return macros;
    } else if (!isNull(parent)) {
        return Context_get_macro(parent, key);
    } else {
        return null;
    }
}

ContextPrototype.has_macro = function(key) {
    var macros = Context_get_macro(this, key);

    if (isNull(macros)) {
        return false;
    } else {
        return has(macros, key);
    }
};

ContextPrototype.get_macro = function(key) {
    var macros = Context_get_macro(this, key);

    if (isNull(macros)) {
        throw new ReferenceError(key + " is not defined");
    } else {
        return macros[key];
    }
};

ContextPrototype.set_macro = function(key, value) {
    var macros = Context_get_macro(this, key);

    if (isNull(macros)) {
        this.macros[key] = value;
    } else {
        macros[key] = value;
    }

    return nil;
};

function Context_get_scope(_this, key) {
    var scope = _this.scope,
        parent = _this.parent;

    if (has(scope, key)) {
        return scope;
    } else if (!isNull(parent)) {
        return Context_get_scope(parent, key);
    } else {
        return null;
    }
}

ContextPrototype.has = function(key) {
    var scope = Context_get_scope(this, key);

    if (isNull(scope)) {
        return false;
    } else {
        return has(scope, key);
    }
};

ContextPrototype.get = function(key) {
    var scope = Context_get_scope(this, key);

    if (isNull(scope)) {
        throw new ReferenceError(key + " is not defined");
    } else {
        return scope[key];
    }
};

ContextPrototype.set = function(key, value) {
    var scope = Context_get_scope(this, key);

    if (isNull(scope)) {
        this.scope[key] = value;
    } else {
        scope[key] = value;
    }

    return nil;
};
