(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Link"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Link_1 = require("./Link");
    /// <reference types="jest" />
    test("Generate clickable Image", () => {
        expect(Link_1.makeLink("hello", "onClick", "TESTCLASS")).toBe('<a onClick="onClick" class="TESTCLASS" >hello</a>');
    });
});
