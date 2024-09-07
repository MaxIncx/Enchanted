(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Player/Skills", "../Story/OutfitSwitcher", "./Work"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IWork = void 0;
    const Core_1 = require("../Core");
    const Skills_1 = require("../Player/Skills");
    const OutfitSwitcher_1 = require("../Story/OutfitSwitcher");
    const Work_1 = require("./Work");
    class IWork {
        changeOutfit() {
            let message = "";
            const outfitSwitch = OutfitSwitcher_1.OutfitSwitcher.switchContext("officeWork");
            if (Skills_1.Skills.get(Skills_1.SkillTypes.hormones) >= 10) {
                message += outfitSwitch.switchOutcomeDescription;
            }
            return message;
        }
        describeWorkAttitude() {
            let message = "";
            const maxPerf = Work_1.Work.getPerformanceLimit();
            if (maxPerf == 1) {
                message += "Your mind is completely in the gutter today. Today is going to be really tough.";
            }
            else if (maxPerf == 2) {
                message += "You are moderately aroused, and more easily distracted.";
            }
            else {
                message += "Your mind is relatively clear. You hope you can get some good work done today.";
            }
            return message;
        }
        finishWork() {
            let report = {
                job: this.getJobType(),
                returnPage: this.getReturnPage(),
            };
            Core_1.CoreUtils.getVariables().pageData = report;
            let message = "";
            message += `[[View Performance Report]]`;
            return message;
        }
    }
    exports.IWork = IWork;
});
