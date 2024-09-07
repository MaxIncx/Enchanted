(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Images/Images"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Images_1 = require("./Images/Images");
    /// <reference types="jest" />
    test("Images.corePath - Happy", () => {
        expect(Images_1.Images.corePath("fileName")).toBe("images/fileName");
    });
    test("drawRandomImage - Hardcoded", () => {
        expect(Images_1.Images.drawRandomImage("hello", 5)).toBe('<img class=" " src="images/hello" />');
    });
    test("drawRandomImage - Rando Number", () => {
        expect(Images_1.Images.drawRandomImage("hello-NNN.jpg", 1)).toBe('<img class=" " src="images/hello-1.jpg" />');
    });
});
