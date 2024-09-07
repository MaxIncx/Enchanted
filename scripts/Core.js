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
    exports.CoreUtils = void 0;
    const TimeModel_1 = require("./TimeModel");
    class CoreUtils {
        static isOnSamePageAsBefore() {
            let prevIndex = SugarCube.State.activeIndex - 1;
            let prevPage = SugarCube.State.history[prevIndex];
            return prevPage != null && SugarCube.State.active.title == prevPage.title;
        }
        static getDay() {
            return CoreUtils.getVariables().day;
        }
        static getDayString() {
            return TimeModel_1.TimeModel.getDateString(CoreUtils.getDay());
        }
        static getDate() {
            return TimeModel_1.TimeModel.getDate(CoreUtils.getDay());
        }
        static getPageTestName() {
            return `<span class="hidden page_${SugarCube.State.turns}"></span>\\`;
        }
        static getVariables() {
            return SugarCube.State.active.variables;
        }
        static setVariables(vars) {
            SugarCube.State.active.variables = vars;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        static groupBy(getItem, items) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            // eslint-disable-next-line @typescript-eslint/ban-types
            return items.reduce((groups, obj) => {
                const identifier = getItem(obj) || "";
                groups[identifier] = (groups[identifier] || []).concat(obj);
                return groups;
            }, {});
        }
        static playPassage(passage = undefined) {
            passage = passage || SugarCube.State.passage;
            SugarCube.Engine.play(passage);
        }
        static getPassageName() {
            return SugarCube.State.active.title;
        }
        static hasPlayed(passage = null) {
            const played = SugarCube.State.hasPlayed(passage != null ? passage : CoreUtils.getPassageName());
            return played;
        }
        static visitedCount(passage = null) {
            passage = passage != null ? passage : CoreUtils.getPassageName();
            let count = SugarCube.Scripting.evalTwineScript(`visited('${passage}')`);
            return count;
        }
        static getRandomArbitrary(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        static getRandomString(messages) {
            const index = CoreUtils.getRandomArbitrary(0, messages.length - 1);
            return messages[index];
        }
        static getToggleLink() {
            return `<<link "🔎Toggle Details">><<toggleclass ".toggled-container" "visibility-collapse">><</link>>\ `;
        }
        static import(event) {
            SugarCube.Save.import(event);
        }
        static capitalize(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
        }
        static isAlphaNumericOrDash(text) {
            return /^[a-z0-9-]+$/i.test(text);
        }
    }
    exports.CoreUtils = CoreUtils;
});
