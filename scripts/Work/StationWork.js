(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Player/PlayerModel", "../Tasks/Tasks", "./Work"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StationWork = void 0;
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Tasks_1 = require("../Tasks/Tasks");
    const Work_1 = require("./Work");
    class StationWork {
        static completeTask(taskId) {
            PlayerModel_1.PlayerModel.addMoney(Work_1.Work.internPay);
            Tasks_1.Tasks.removeTask(taskId);
            PlayerModel_1.PlayerModel.setHasWorked();
            return `For completing this day's work, ${PlayerModel_1.PlayerModel.getHeirName()} has recieved her intern salary of $${Work_1.Work.internPay}.`;
        }
        static completeTaskNoPay(taskId) {
            Tasks_1.Tasks.removeTask(taskId);
            PlayerModel_1.PlayerModel.setHasWorked();
            return ``;
        }
    }
    exports.StationWork = StationWork;
});
