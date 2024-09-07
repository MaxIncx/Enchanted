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
    exports.makeLink = void 0;
    /**
     * Encapsulates player invokable operations
     */
    function makeLink(label, clickScript, className = "") {
        let link = `<a `;
        link += `onClick="${clickScript}" `;
        if (className) {
            link += `class="${className}" `;
        }
        link += `>${label}</a>`;
        return link;
    }
    exports.makeLink = makeLink;
});
