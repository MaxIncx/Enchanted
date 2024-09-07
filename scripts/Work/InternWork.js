(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Story/Dialogue", "../Player/PlayerModel", "../Player/Skills", "./IWork", "./Work", "./Jobs", "../Tasks/Tasks"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InternWork = void 0;
    const Core_1 = require("../Core");
    const Dialogue_1 = require("../Story/Dialogue");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const IWork_1 = require("./IWork");
    const Work_1 = require("./Work");
    const Jobs_1 = require("./Jobs");
    const Tasks_1 = require("../Tasks/Tasks");
    class InternWork extends IWork_1.IWork {
        getJobType() {
            return Jobs_1.Jobs.intern;
        }
        getReturnPage() {
            return "Work at your Office";
        }
        generatePerfResultsMessage(workDescription) {
            const maxPerf = Work_1.Work.getPerformanceLimit();
            const performance = Math.round(maxPerf * Math.random() + 1);
            const message = Core_1.CoreUtils.getRandomString([
                `Hey, How's it going ${PlayerModel_1.PlayerModel.getHeirName()}? Given that you haven't had a mental breakdown with the work yet, I'd call that a success, hahahah. Don't worry, you'll figure this stuff out eventually. Hey, check out this cat meme!`,
            ]);
            return {
                work: workDescription,
                payment: Work_1.Work.internPay,
                supervisorName: "Jen",
                imageName: "jen-intern.jpg",
                message: message,
                skill: Skills_1.SkillTypes.corporate,
                skillIncrease: performance,
            };
        }
        describePreWork() {
            let messages = [""];
            const hasVisitedBefore = Core_1.CoreUtils.visitedCount() > 1;
            if (!hasVisitedBefore) {
                messages = [
                    `You're doing this... As you arrive you meet up with your boss.
            ${Dialogue_1.Dialogue.speak(Dialogue_1.Speakers.internSupervisor, "Good morning and welcome aboard! I'd like you to meet Jen, your peer mentor. She'll be helping you get started. I look forward to your contributions here at MarisTech.")}
            You can't place it, but you feel like this isn't your first time meeting her.
            ${Dialogue_1.Dialogue.speak(Dialogue_1.Speakers.internMentor, "... oh... Hi. So, Sook has asked me to help you learn the ropes. ")}
            You spend the day learning about your team and processes for arranging the right Ansible-Modem solutions for customers. Jen helps you get started, and refers you to piles of clumsy documents full of Three Letter Acronyms (TLAs) and overcomplicated gobbledegook.
            
            Midway through the day, your lead takes you out for lunch to get to know the team. It seems like some of the folks on the team are pretty chill and easy going.
            
            After you get back, lots more reading, and ramp up tasks, punctuated by chit-chat with Jen.`,
                ];
            }
            else {
                messages = [`You get to your desk. The work is a little familiar today.`];
            }
            return Core_1.CoreUtils.getRandomString(messages);
        }
        afterWorkMessage() {
            let message = "";
            if (Tasks_1.Tasks.hasTask("start-internship-mentoring")) {
                message += `\nYou see someone new pop in to your team room, and chat with your boss momentarily. He seems to gesture her to you, and she makes her way to you.\n
            ${Dialogue_1.Dialogue.speak(Dialogue_1.Speakers.clubLeader, "Hi, I'm Mariella! I'm an organizer for the 'Women of Maristech' group. We set up events to celebrate the achievements of women in tech, meet up with women leaders and have a little fun! Interns are welcome at our events.")}
            ${Dialogue_1.Dialogue.speak(Dialogue_1.Speakers.clubLeader, "Our next event is an on-campus 5K run-walkathon for breast cancer this Friday. Participation is open to interns, with a minimum donation of $25, which gets matched by Maristech. We'd love to see you there! We need to do our part to save the boobies. ;)")}            
            `;
                Tasks_1.Tasks.removeTask("start-internship-mentoring");
                Tasks_1.Tasks.addTask("maristech-5k-runwalk");
            }
            if (Tasks_1.Tasks.hasTask("mariella-triathlon-arc") && Core_1.CoreUtils.visitedCount("Arrange to leave station") >= 1) {
                message += `\nYou see Mariella approach your desk.\n
            ${Dialogue_1.Dialogue.speak(Dialogue_1.Speakers.clubLeader, "Hey! So, I was wondering if you would like to join my Triathlon training team? We have meets every Tuesday and Thursday, and extended sessions on Sundays.")}
            She hands you a card with the club meeting schedule and location.
            ${Dialogue_1.Dialogue.speak(Dialogue_1.Speakers.clubLeader, `The next Triathlon is in August 5th - I know it might be a bit intimidating, but I was impressed how you did with the 5K, and think you can handle the training. We find that participants who can consistently turn out for a good 15 sessions can make a good competitive showing.`)}
        
            ${Dialogue_1.Dialogue.speak("heir", `Hmm, that could be fun, I suppose... Umm, how much does it cost to compete?`)}
            ${Dialogue_1.Dialogue.speak(Dialogue_1.Speakers.clubLeader, `You will want to get a good racing bike with Aerobars. Those can go for a good 3 to 10 thousand dollars. I know an intern probably has other things to spend her money on than a brand new bike. I know an exec who is looking to sell a respectable bike to get a ridiculously fancy one. It's worth a good 10k new but, she'll let it go for 2500. You won't need gear to start attending practice, but it will allow you to round out the weekend sessions. When you have the cash, you can ask to buy it at one of our sessions.`)}
            ${Dialogue_1.Dialogue.speak(Dialogue_1.Speakers.clubLeader, `You'll want a sleek triathlon wetsuit for the swimming component. Lady Fit-sport provides some options that I'm sure will fit you nicely.`)}
                ${Dialogue_1.Dialogue.speak(Dialogue_1.Speakers.clubLeader, `Finally, the race event costs 300 to attend. When you have the stuff, let's talk- we can make sure you're all set with the gear, put in your registration and get your racer kit. Ok, see you soon!`)}
            `;
                Tasks_1.Tasks.removeTask("mariella-triathlon-arc");
                Tasks_1.Tasks.addTask("mariella-triathlon-arc-start-training");
                Tasks_1.Tasks.addTask("mariella-triathlon-arc-sign-up-and-get-gear");
            }
            return message;
        }
    }
    exports.InternWork = InternWork;
});
