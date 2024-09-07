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
    exports.emojifyContext = void 0;
    function emojifyContext(context) {
        let result;
        switch (context) {
            case "fitness":
                result = "⚽";
                break;
            case "swimming":
                result = "🏊‍♀️";
                break;
            case "sleeping":
                result = "🌙";
                break;
            case "officeWork":
                result = "💼";
                break;
            case "casual":
                result = "😃";
                break;
            case "allPurpose":
                result = "♾️";
                break;
            case "fetish":
                result = "🔥";
                break;
            default:
                result = "";
        }
        return result;
    }
    exports.emojifyContext = emojifyContext;
});
