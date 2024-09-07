(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "luxon", "./Core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DayOfWeek = exports.TimeModel = exports.DateTime = void 0;
    const luxon_1 = require("luxon");
    Object.defineProperty(exports, "DateTime", { enumerable: true, get: function () { return luxon_1.DateTime; } });
    const Core_1 = require("./Core");
    class TimeModel {
        static now() {
            const date = TimeModel.getDate(Core_1.CoreUtils.getDay());
            return date;
        }
        static getDate(dayNum) {
            const date = luxon_1.DateTime.fromObject({ day: 1, month: 5, year: 2023 });
            const duration = luxon_1.Duration.fromObject({ days: dayNum });
            const newDate = date.plus(duration);
            const dateString = this.formatDateString(newDate);
            return newDate;
        }
        static getDateString(day) {
            return TimeModel.formatDateString(TimeModel.getDate(day));
        }
        static formatDateString(date) {
            return date.toLocaleString(luxon_1.DateTime.DATE_MED_WITH_WEEKDAY);
        }
    }
    exports.TimeModel = TimeModel;
    var DayOfWeek;
    (function (DayOfWeek) {
        DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
        DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
        DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
        DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
        DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
        DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
        DayOfWeek[DayOfWeek["Sunday"] = 7] = "Sunday";
    })(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
});
