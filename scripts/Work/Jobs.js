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
    exports.Jobs = void 0;
    class Jobs {
    }
    exports.Jobs = Jobs;
    Jobs.logistics = "logistics";
    Jobs.consoleDrone = "console-drone";
    Jobs.intern = "intern";
    Jobs.dollsuitDrone = "dollsuit-drone";
});
