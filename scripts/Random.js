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
    exports.Random = void 0;
    /**
     * A primitive Deterministically random generator. Not a good one, but a simple one.
     * For the storytelling purposes of "The Claim", it is quite adequate.
     * https://gist.github.com/blixt/f17b47c62508be59987b
     */
    class Random {
        constructor(seedVal) {
            this._seed = seedVal % 2147483647;
            if (this._seed <= 0)
                this._seed += 2147483646;
        }
        next(limit = null) {
            let result = (this._seed = (this._seed * 16807) % 2147483647);
            if (limit) {
                result = result % limit;
            }
            return result;
        }
        nextFloat() {
            return (this.next() - 1) / 2147483646;
        }
    }
    exports.Random = Random;
});
