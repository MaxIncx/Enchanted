(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FieldSet = exports.FieldIndex = void 0;
    class FieldIndex {
        constructor() {
            this.map = [];
        }
        addField(name) {
            if (this.getField(name) != undefined) {
                this.map.push(name);
            }
            else {
                throw "Element already exists in set.";
            }
        }
        getField(name) {
            return this.map.indexOf(name);
        }
    }
    exports.FieldIndex = FieldIndex;
    class FieldSet {
        constructor() {
            this.index = new FieldIndex();
            this.field = 0;
        }
        addField(name) {
            this.index.addField(name);
        }
        setValue(key, value) {
            let bitmask = 1 << this.index.getField(key);
            if (value === true) {
                this.field |= bitmask;
            }
            else {
                this.field &= ~bitmask;
            }
        }
        getValue(key) {
            let bitmask = 1 << this.index.getField(key);
            return (this.field & bitmask) !== 0;
        }
        getActual() {
            return this.field;
        }
    }
    exports.FieldSet = FieldSet;
});
