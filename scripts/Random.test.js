(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Random"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Random_1 = require("./Random");
    /// <reference types="jest" />
    test("Deterministically Random Seed", () => {
        const r = new Random_1.Random(0);
        expect(r.next(100)).toBe(40);
        expect(r.next(100)).toBe(98);
        expect(r.next(100)).toBe(74);
        expect(r.next(100)).toBe(89);
        expect(r.next(100)).toBe(17);
    });
});
