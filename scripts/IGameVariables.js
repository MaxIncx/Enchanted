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
    exports.ClothingTolerance = void 0;
    var ClothingTolerance;
    (function (ClothingTolerance) {
        ClothingTolerance[ClothingTolerance["Dude"] = 0] = "Dude";
        ClothingTolerance[ClothingTolerance["Neccessity"] = 1] = "Neccessity";
    })(ClothingTolerance = exports.ClothingTolerance || (exports.ClothingTolerance = {}));
});
