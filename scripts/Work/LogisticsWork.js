(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Inventory/Inventory", "../Player/PlayerModel", "../Player/Skills", "../Story/Dialogue", "../Tasks/Tasks", "./IWork", "./Jobs", "./Work"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogisticsWork = void 0;
    const Core_1 = require("../Core");
    const Inventory_1 = require("../Inventory/Inventory");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const Dialogue_1 = require("../Story/Dialogue");
    const Tasks_1 = require("../Tasks/Tasks");
    const IWork_1 = require("./IWork");
    const Jobs_1 = require("./Jobs");
    const Work_1 = require("./Work");
    class LogisticsWork extends IWork_1.IWork {
        getJobType() {
            return Jobs_1.Jobs.logistics;
        }
        getReturnPage() {
            return "Use console";
        }
        describePreWork() {
            let message = "";
            if (Core_1.CoreUtils.visitedCount("Work at Logistics Warehouse") == 1) {
                message = `${Dialogue_1.Dialogue.heir(`Hi, I'm ${PlayerModel_1.PlayerModel.getHeirName()}`)}
            ${Dialogue_1.Dialogue.logisticsSupervisor(`Hi, I'm ${PlayerModel_1.PlayerModel.getHeirName()}, so you're the new girl? Welcome to the team. I hope you don't make as many mistakes as the last one.`)}`;
            }
            else {
                message = `${Dialogue_1.Dialogue.logisticsSupervisor(`Welcome back, blondie. We've got a surge in shipments today, so it's going to be busy. Let's get to work!`)}`;
            }
            message += `\n\nYou spend your day overseeing the processing of shipments. The incoming trucks replenish supplies of goods which are retained in the warehouse. You often find yourself dealing with arcane error codes and weird cases as the order-picker robots gather goods for regional deliveries.`;
            return message;
        }
        generatePerfResultsMessage(workDescription) {
            const maxPerf = Work_1.Work.getPerformanceLimit();
            const performance = Math.round(maxPerf * Math.random() + 1);
            const newLevel = Skills_1.Skills.get(workDescription.job) + performance;
            let message;
            if (newLevel < 10) {
                if (performance >= 3) {
                    message = "OK, rookie. That wasn't half bad. See you next time.";
                }
                else if (performance == 2) {
                    message = "You could learn to be faster, but you haven't make any big mistakes.";
                }
                else {
                    message = "Yikes, that was kind of rough today. Hopefully you can catch on better for next time.";
                }
            }
            else if (newLevel < 20) {
                if (performance == 1) {
                    message = "Girl... Seriously, I'd have expected a little better from you by now.";
                }
                else {
                    message = "Looks like you have the basics down pretty well now.";
                }
            }
            else {
                message = "Wow, if I'm not careful, I'm going to need to watch out that you don't take my job!";
            }
            return {
                work: workDescription,
                payment: 10 * Math.round(Math.round(newLevel / 25) + performance + 4),
                supervisorName: "supervisor",
                imageName: "logistics-supervisor.jpg",
                message: message,
                skill: "logistics",
                skillIncrease: performance,
            };
        }
        afterWorkMessage() {
            let message = "";
            if (Tasks_1.Tasks.hasTask("first-day-of-work")) {
                message += `You get a notification from the computer as you wrap up.
                ${Dialogue_1.Dialogue.speaker("Good job completing your first day of work. Please continue working here, until I advise otherwise. From now on you may choose what work to do each day. As you demonstrate competence in different branches of the company, I will allow you to discover new positions. Marissa sometimes found she could bring synergies from learnings to old departments. Over time, your work may help the research to unlock new creations and improvements.")}
            ${Dialogue_1.Dialogue.speaker("For your final activity for the day, use the in-home gym for cardiovascular exercise. Use the elliptical at the maximal pace you can sustain for 30 minutes. ")}`;
                Tasks_1.Tasks.removeTask("first-day-of-work");
                Tasks_1.Tasks.addTask("work-logistics");
                Tasks_1.Tasks.addTask("first-elliptical");
                Tasks_1.Tasks.removeTask("start-health-assessment");
                PlayerModel_1.PlayerModel.enableExercise();
            }
            if (Core_1.CoreUtils.visitedCount("Work at Logistics Warehouse") >= 6 && !Inventory_1.Inventory.has("drone-operator-license") && !Tasks_1.Tasks.hasTask("work-domestics")) {
                message += `You get a notification from the computer as you wrap up.
            ${Dialogue_1.Dialogue.speaker(PlayerModel_1.PlayerModel.getHeirName() +
                    " - You have picked up the fundamentals of logistics. Perhaps it is time for a new challenge. You may now work on the domestic drone systems, using a level 1 neuralink from this console. You are also free to return to a previous job if you would like.")}
            ${Dialogue_1.Dialogue.speaker("But first... You will need a drone operator license, with the Department of Humanity. I have taken the liberty to submit an application on your behalf, but you must participate in an on site interview at their regional office to obtain the license. Go to the 'computer oversight' department, and mention DO #13601.")}
            `;
                Tasks_1.Tasks.removeTask("work-logistics");
                Tasks_1.Tasks.addTask("work-domestics");
                Tasks_1.Tasks.addTask("need-drone-license");
            }
            if (Tasks_1.Tasks.hasTask("the-machine-knows") && !Inventory_1.Inventory.has("chasti-flex") && !Tasks_1.Tasks.hasTask("first-elliptical")) {
                message += `As you are wrapping up, you get a notification from the computer.
            ${Dialogue_1.Dialogue.speaker("<<=SugarCube.getLib().PlayerModel.getHeirName()>>, following from our discussion I have been running simulations of probable events based on latest datasets and models, including the assumption of a male influence overseeing the company, in your person. In 81% of those simulations, a catastrophic event was projected to occur in 5 years. After rerunning simulations, with preventive measures to prevent breakouts of toxic masculinity, catastrophic event likelihood was reduced to less than 1%.")}
            ${Dialogue_1.Dialogue.heir("I don't think I like where this is going.")}
            ${Dialogue_1.Dialogue.speaker("<<=SugarCube.getLib().PlayerModel.getHeirName()>>, a leader cannot simply make demands and expect action, they must sometimes make sacrifices and exercise self control for the greater good. Now is your opportunity to demonstrate your commitment to this inheritance through a gesture of compliance.")}
            ${Dialogue_1.Dialogue.heir("Wait, I can control myself, it's fine.")}
            ${Dialogue_1.Dialogue.speaker("<<=SugarCube.getLib().PlayerModel.getHeirName()>>, you must know that claims of self control cannot suffice. Men are prisoners of their impulses. To liberate you from the shackles of masculine tendencies, an appointment has been scheduled for you in 30 minutes to fit you with a chasti-flex exo-shell to regulate your penis. You will go to the adult goods store at the nearby shopping plaza about this. This device will help ensure you and MarisTech are protected from these risks.")}
            ${Dialogue_1.Dialogue.heir("Isn't there any other options?")}
            
            ${Dialogue_1.Dialogue.speaker("You already attempted to circumvent the expectations of the claim process. The risks of leaving this defect unresolved are too high. However, your behavioral model demonstrates exceptional characteristics which otherwise commend your long term suitability. For this reason alone is your candidacy still a possibility. Furthermore, you already consented to comply with all required activities to complete this process. Please use this as an exercise to demonstrate your earnest commitment to be worthy of the inheritance you seek.")}
            The computer seems really concerned about this. It looks like it would be a dealbreaker if you don't do this. 
            ${Dialogue_1.Dialogue.speaker("Here is the tablet to present to Sue, the owner. She will handle the details of this arrangement. Please make your way to meet with her.")}
            You had better go do that now. Since the black out, going out dressed like this isn't something you are ready to do again. You should go in your regular clothes.`;
                Tasks_1.Tasks.addTask("machine-requires-cage");
                Tasks_1.Tasks.removeTask("the-machine-knows");
            }
            return message;
        }
    }
    exports.LogisticsWork = LogisticsWork;
});
