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
    exports.getHairLengthValue = void 0;
    function getHairLengthValue(hairLength) {
        const map = { ear: 17, chin: 22, shoulder: 30, armpit: 40, midback: 60 };
        return map[hairLength];
    }
    exports.getHairLengthValue = getHairLengthValue;
});
