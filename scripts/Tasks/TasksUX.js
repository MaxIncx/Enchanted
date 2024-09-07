(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Tasks"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TasksUX = void 0;
    const Tasks_1 = require("./Tasks");
    class TasksUX {
        static render() {
            let content = "";
            const tasks = Tasks_1.Tasks.getTasks();
            if (tasks.length > 0) {
                content += `<ul class="tasks-list">`;
                for (let i = 0; i < tasks.length; i++) {
                    if (!tasks[i].isHidden) {
                        content += `<li class="tasks-list-item" name="${tasks[i].id}">`;
                        content += `${tasks[i].description}`;
                        if (tasks[i].requiredToday) {
                            content += ` <b>(Must be done today)</b>`;
                        }
                        if (tasks[i].pending) {
                            content += ` <b>(PENDING NEW CONTENT)</b>`;
                        }
                        content += `</li>`;
                    }
                }
                content += `</ul>`;
            }
            else {
                content += `You are completely carefree at the moment.`;
            }
            return content;
        }
    }
    exports.TasksUX = TasksUX;
});
