(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./TimeModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const TimeModel_1 = require("./TimeModel");
    /// <reference types="jest" />
    test("Date presentation", () => {
        expect(TimeModel_1.TimeModel.getDateString(0)).toBe("Mon, May 1, 2023");
        expect(TimeModel_1.TimeModel.getDateString(5)).toBe("Sat, May 6, 2023");
        expect(TimeModel_1.TimeModel.getDateString(45)).toBe("Thu, Jun 15, 2023");
        expect(TimeModel_1.TimeModel.getDate(0).weekday).toBe(TimeModel_1.DayOfWeek.Monday);
        expect(TimeModel_1.TimeModel.getDate(5).weekday).toBe(TimeModel_1.DayOfWeek.Saturday);
    });
});
