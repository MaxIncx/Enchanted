(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Player/Skills"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mood = void 0;
    const Skills_1 = require("../Player/Skills");
    class Mood {
        static addDefiance(message = null) {
            Skills_1.Skills.add(Skills_1.SkillTypes.defiant, 1);
            if (message == null) {
                message = "You aren't sure if this the right thing to do, but you feel more bold.";
            }
            return message;
        }
        static addCompliance(message = null) {
            Skills_1.Skills.add(Skills_1.SkillTypes.compliant, 1);
            if (message == null) {
                message = "Cooperating seems like the sensible thing to do here.";
            }
            return message;
        }
        static defiantLink(link, level = 0, text = link) {
            const skip = this.compliance() == 0;
            const lvl = level > 0 && !skip ? ` ${level}` : "";
            const label = `<span class="defiant-text">(Defiant${lvl})</span>`;
            let content;
            if (this.defiance() >= level || skip) {
                content = `[[${link}|${text}]]`;
            }
            else {
                content = link;
            }
            return `${content} ${label} `;
        }
        static compliantLink(link, level = 0, text = link) {
            const skip = this.defiance() == 0;
            const lvl = level > 0 && !skip ? ` ${level}` : "";
            const label = `<span class="compliant-text">(Compliant${lvl})</span>`;
            let content;
            if (this.compliance() >= level || skip) {
                content = `[[${link}|${text}]]`;
            }
            else {
                content = link;
            }
            return `${content} ${label} `;
        }
        static defiance() {
            return Skills_1.Skills.get(Skills_1.SkillTypes.defiant);
        }
        static compliance() {
            return Skills_1.Skills.get(Skills_1.SkillTypes.compliant);
        }
    }
    exports.Mood = Mood;
});
