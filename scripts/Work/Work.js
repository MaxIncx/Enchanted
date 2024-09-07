(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Story/Dialogue", "../Player/PlayerModel", "../Player/Skills", "./LogisticsWork", "./ConsoleDrone", "./InternWork", "./DollsuitWork"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Work = void 0;
    const Core_1 = require("../Core");
    const Dialogue_1 = require("../Story/Dialogue");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const LogisticsWork_1 = require("./LogisticsWork");
    const ConsoleDrone_1 = require("./ConsoleDrone");
    const InternWork_1 = require("./InternWork");
    const DollsuitWork_1 = require("./DollsuitWork");
    function getJob(jobType) {
        let workModels = {};
        let addJob = (model, job) => {
            model[job.getJobType()] = job;
        };
        addJob(workModels, new LogisticsWork_1.LogisticsWork());
        addJob(workModels, new ConsoleDrone_1.ConsoleDrone());
        addJob(workModels, new InternWork_1.InternWork());
        addJob(workModels, new DollsuitWork_1.DollsuitWork());
        let workModel = workModels[jobType];
        if (workModel === undefined) {
            throw "no job found";
        }
        return workModel;
    }
    class Work {
        static addMessage(content) {
            return content != null && content.length > 0 ? content + "\n\n" : "";
        }
        static doWork(jobType) {
            let job = getJob(jobType);
            let message = "";
            message += this.addMessage(job.changeOutfit());
            message += this.addMessage(job.describeWorkAttitude());
            message += this.addMessage(job.describePreWork());
            message += this.addMessage(job.finishWork());
            return message;
        }
        static getPerformanceLimit() {
            const maxPerf = PlayerModel_1.PlayerModel.getArousalLevel() > 80 ? 1 : PlayerModel_1.PlayerModel.getArousalLevel() > 40 ? 2 : 3;
            return maxPerf;
        }
        static generatePerformanceResults(workDescription) {
            return getJob(workDescription.job).generatePerfResultsMessage(workDescription);
        }
        static presentPerformanceReport() {
            const description = Core_1.CoreUtils.getVariables().pageData;
            const results = Work.generatePerformanceResults(description);
            let message = "";
            PlayerModel_1.PlayerModel.addMoney(results.payment);
            PlayerModel_1.PlayerModel.setHasWorked();
            const skillBefore = Skills_1.Skills.get(results.skill);
            Skills_1.Skills.add(results.skill, results.skillIncrease);
            const skillAfter = Skills_1.Skills.get(results.skill);
            message += Dialogue_1.Dialogue.generic(results.supervisorName, results.message, "humantext", results.imageName);
            message += `You get a notification confirming that ${PlayerModel_1.PlayerModel.getHeirName()} has received a payment of $${results.payment} based on her skill and performance today.<br /> `;
            const actualIncrease = skillAfter - skillBefore;
            message += `Your skill at ${results.skill} has increased by ${actualIncrease} to ${skillAfter}.<br /> `;
            let job = getJob(description.job);
            message += job.afterWorkMessage();
            return message;
        }
        static presentLeaveReportLink() {
            const report = Core_1.CoreUtils.getVariables().pageData;
            let message = "";
            message += `[[continue|${report.returnPage}]]`;
            return message;
        }
    }
    exports.Work = Work;
    Work.internPay = 32 * 8;
});
