(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Player/PlayerModel", "../Player/Skills", "../Story/Dialogue", "./IWork", "./Jobs", "./Work", "../Images/Images", "../ImageEffects", "../Tasks/Tasks"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DollsuitWork = void 0;
    const Core_1 = require("../Core");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const Dialogue_1 = require("../Story/Dialogue");
    const IWork_1 = require("./IWork");
    const Jobs_1 = require("./Jobs");
    const Work_1 = require("./Work");
    const Images_1 = require("../Images/Images");
    const ImageEffects_1 = require("../ImageEffects");
    const Tasks_1 = require("../Tasks/Tasks");
    class DollsuitWork extends IWork_1.IWork {
        getJobType() {
            return Jobs_1.Jobs.dollsuitDrone;
        }
        getReturnPage() {
            return "Get out of Doll suit";
        }
        changeOutfit() {
            return "";
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
        describePreWork() {
            let messages = "";
            const hasVisitedBefore = Core_1.CoreUtils.visitedCount("Get out of Doll suit") > 0;
            if (!hasVisitedBefore) {
                messages += `You're doing this... You're operating a drone for the first time today.`;
            }
            messages += `You initiate the dollsuit drone work protocol. Your awareness of the discomfort of your body fades into the background, as the suit "converses" with you.
        
        You are presented a detailed pre-work briefing which outlines your assignment for this shift.
        `;
            let isEffective = DollsuitWork.hasEffectiveAldopril();
            let encounters = PlayerModel_1.PlayerModel.getCompletedStaceyEncounters();
            if (hasVisitedBefore && isEffective && Tasks_1.Tasks.hasTask("meet-stacy-as-drone")) {
                messages = `You are dropped off  at a hotel. It's a pretty routine visit...
                ${ImageEffects_1.ImageEffects.glitchRandom("hotel-NNN.jpg", 3)}
                Until, you see her out on a deck at  of the suites. Holy shit.
                ${Images_1.Images.drawAction("stacey-meet-1.jpg")}
                And she sees you! You freeze.
                ${Dialogue_1.Dialogue.speak("stacey", "Oh, good - it's you again...")}\
                She casually takes off her jacket and lies down on the bed. You don't know what to say...
                ${Dialogue_1.Dialogue.speak("stacey", "Can you put those cleaning supplies down? My muscles are all tense from my last session at the gym. Could you help... loosen me up?")}\
                You feel a reflexive instinct to gulp... The drone doesn't do that. Instead, you feel yourself drawn to her, as you get her a towel as she strips in front of you.
                ${Images_1.Images.drawAction("stacey-massage.jpg")}
                You feel an irresistable need to  serve take over you. As you begin to give her a very tender massage... She seems to enjoy it. If only *you* could do this with her.
                <<=SugarCube.getLib().Dialogue.endOfLine()>>
                `;
                PlayerModel_1.PlayerModel.setCompletedStaceyEncounters(1);
                Tasks_1.Tasks.removeTask("meet-stacy-as-drone");
                Tasks_1.Tasks.addTask("meet-stacy-again-drone");
            }
            else {
                //Baseline jobs
                messages += Core_1.CoreUtils.getRandomString([
                    `You are dropped off at a sizable penthouse, you diligently clean the the rooms.
                    ${ImageEffects_1.ImageEffects.glitchRandom("penthouse-NNN.jpg", 3)}
                    ${isEffective
                        ? `The owner watches the you expectantly as he gives you instructions. Perhaps if you are more enthusiastic, it will lead to a better tips?`
                        : `The owner watches the you expectantly as he gives you instructions. With your current dose of aldopril, you feel impossibly compelled to do *whatever* the client asks.  `}`,
                    `You are assigned to provide cleaning support at a hotel which is under-staffed right now. 
                    ${ImageEffects_1.ImageEffects.glitchRandom("hotel-NNN.jpg", 3)}
                    You cycle through a number of rooms. The layout of the rooms gets repetitive - as you figure it out, you do a little dance as you clean each.`,
                    `This job has you sent to clean up a tech-bro's New Zealand multi-million dollar apocalypse-beach-house.
                    ${ImageEffects_1.ImageEffects.glitchRandom("beach-house-NNN.jpg", 3)}
                    It's a wierd gig, the place is already pretty much spotless, but work is work.`,
                ]);
            }
            return messages;
        }
        generatePerfResultsMessage(workDescription) {
            let isEffective = DollsuitWork.hasEffectiveAldopril();
            const maxPerf = Work_1.Work.getPerformanceLimit() + (isEffective ? 2 : 0);
            const performance = Math.round(maxPerf * Math.random() + 1);
            const newLevel = Skills_1.Skills.get(workDescription.job) + performance;
            let message = "";
            if (!DollsuitWork.hasUnsafeAldopril()) {
                message = Core_1.CoreUtils.getRandomString([
                    "It takes a certain single-minded dedication to service to operate a doll well. Just be careful to maintain boudaries between yourself and the doll.",
                    "Another day in Paradise, right?",
                ]);
            }
            else {
                message = Core_1.CoreUtils.getRandomString(["Watch out that you don't become... too good of a drone. "]);
            }
            return {
                work: workDescription,
                payment: (isEffective ? 30 : 20) * Math.round(Math.round(newLevel / 25) + performance + 4),
                supervisorName: "Drone Ops Mentor",
                imageName: "drone-mentor.jpg",
                message: message,
                skill: Skills_1.SkillTypes.perfectCustomerSatisfaction,
                skillIncrease: performance,
            };
        }
        afterWorkMessage() {
            let message = "";
            const hasVisitedBefore = Core_1.CoreUtils.visitedCount("Get out of Doll suit") >= 1;
            if (!hasVisitedBefore) {
                message += ` ${Dialogue_1.Dialogue.speaker(PlayerModel_1.PlayerModel.getHeirName() + " Congratulations on exploring your career opportunities as a Dollsuit based drone operator.")}
            
            ${Dialogue_1.Dialogue.speaker("An analysis of your performance indicates that your service levels are... lackluster. Mild doses of a performance enhancing medication as 'Aldopril' can improve your level of performance.")}
            ${Dialogue_1.Dialogue.heir("What does that do?")}
            ${Dialogue_1.Dialogue.speaker("A human operator lives with traditional human mores, fears and assumptions which human evolution and culture have devised to protect individuals from dangerous situations. The limiting factor of modern drones isn't the hardware, it is the inhibitions of the operator. When operating a drone, normal danger factors of bodily harm are not applicable, but many operators still exercise significant inhibitions which result in less than maximal work performance. Your Dollsuit will prevent your own body from being damaged, and the Drones are equiped with emergency failsafes, if an operator is operating in a manner which is unsafe to the surrounding environment.")}
            ${Dialogue_1.Dialogue.speaker("Under normal circumstances, Aldopril has no pracical effect with the human nervous system, but when a dollsuit-link detects these pathways, they allow an operator to maximize the performance of the dollsuit beyond normal human constraints. Operators have been noted to report euphoric experiences of what they previously observed as slow, high drudgery chores. Maristech Analytics has reported a 352% increase of repeat clientele, and a 232% increase of requests for visits with Aquion augmented operators.")}
            ${Dialogue_1.Dialogue.speaker(`Note: Aldopril should be maintained at limited levels to produce optimal output. Ideal dosage range is 20-50 mg. Below that level has minimal practical effect. You are strongly advised not to exceed recommended dose levels for safety reasons.`)}
            ${Dialogue_1.Dialogue.speaker("I have enabled an Aldopril dosing menu for your discretion while in the dollsuit.")}`;
                Tasks_1.Tasks.addTask("try-aldopril");
            }
            return message;
        }
        static hasEffectiveAldopril() {
            return Skills_1.Skills.get("aldopril") > 20;
        }
        static hasUnsafeAldopril() {
            return Skills_1.Skills.get("aldopril") > 50;
        }
        static hasDangerousAldopril() {
            return Skills_1.Skills.get("aldopril") > 100;
        }
    }
    exports.DollsuitWork = DollsuitWork;
});
