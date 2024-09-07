(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Player/PlayerModel", "../Player/Skills", "../Story/Dialogue", "../Tasks/Tasks", "./IWork", "./Jobs", "./Work", "../Images/Images"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConsoleDrone = void 0;
    const Core_1 = require("../Core");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const Dialogue_1 = require("../Story/Dialogue");
    const Tasks_1 = require("../Tasks/Tasks");
    const IWork_1 = require("./IWork");
    const Jobs_1 = require("./Jobs");
    const Work_1 = require("./Work");
    const Images_1 = require("../Images/Images");
    class ConsoleDrone extends IWork_1.IWork {
        getJobType() {
            return Jobs_1.Jobs.consoleDrone;
        }
        getReturnPage() {
            return "Use console";
        }
        describePreWork() {
            let messages = [""];
            const hasVisitedBefore = Core_1.CoreUtils.visitedCount() > 1;
            if (!hasVisitedBefore) {
                messages = [`You're doing this... You're operating a drone for the first time today.`];
            }
            else {
                messages = [
                    `You are back in for work running a drone. This time, you are assigned to cleaning up a series of vacated units in an affordable housing complex. You don't encounter any folks, the day goes pretty quickly. `,
                    `This time, you are sent to an upper crust gated community to do an initial cleaning visits. One house had 9 bedrooms and a bowling alley. The housewife seems to eye you curiously, and kind of follows you around. It doesn't seem like she thinks you're going to steal anything as such (not that the drones could hide stolen goods very well, given their distinct lack of pockets). That said, you seem to capture her attention for some reason.`,
                    `Today you find the drone was sent to a seniors home which had a staffing shortage. You have the drone going room by room, cleaning up countless little messes.
            
            From time to time, you think you see some dirty old men leering at you. One old lady comments on 'what nice posture the maid has'.`,
                ];
            }
            return Core_1.CoreUtils.getRandomString(messages);
        }
        generatePerfResultsMessage(workDescription) {
            const maxPerf = Work_1.Work.getPerformanceLimit();
            const performance = Math.round(maxPerf * Math.random() + 1);
            const newLevel = Skills_1.Skills.get(workDescription.job) + performance;
            const message = Core_1.CoreUtils.getRandomString([
                "Good work. That's what it's like to drone up!",
                "The customer seemed satisfied, it looks like they'll hire a drone for another job in two weeks. Good job!",
                "The customer sounded vaguely disappointed, but didn't seem to mention any particular problems with the work performed. Maybe we can figure out how to better satisfy this customer on a future visit.",
                "The customer didn't leave any particular feedback, but did request another visit.",
            ]);
            return {
                work: workDescription,
                payment: 10 * Math.round(Math.round(newLevel / 25) + performance + 4),
                supervisorName: "Drone Ops Mentor",
                imageName: "drone-mentor.jpg",
                message: message,
                skill: Skills_1.SkillTypes.cleaning,
                skillIncrease: performance,
            };
        }
        afterWorkMessage() {
            let message = "";
            if (!Tasks_1.Tasks.hasTask("train-for-doll-suit") && !Tasks_1.Tasks.hasTask("slim-for-doll-suit") && !Tasks_1.Tasks.hasTask("wear-doll-suit") && !Core_1.CoreUtils.hasPlayed("Doll Suit Closing")) {
                message += `You get a notification from the computer as you wrap up.
            ${Dialogue_1.Dialogue.speaker(PlayerModel_1.PlayerModel.getHeirName() + " Congratulations on your start as a drone operator. A gift from Marissa to you.")}
            A panel in the room opens up - You see a glistening sight before you.
            ${Images_1.Images.drawAction("doll-suit.jpg")}
            ${Dialogue_1.Dialogue.speaker("As your mentor has made clear, you can be much more effective if you have your own interface suit. This suit was constructed to Marissa's personal dimensions to allow her to remotely operate any Maristech drone with extreme precision. Once you are fitted to the interface suit, you will be able to participate in more 'rigorous' onboarding activities with higher customer premiums.")}
            The thought of wearing that thing seems like a bit of a stretch. It looks to be like six feet tall, with legs that just keep going, and the waist seems impossibly tiny. How can a person even walk like that?

            

            ${Dialogue_1.Dialogue.heir("But, the feet... They go straight up. I could never walk like that.")}
            ${Dialogue_1.Dialogue.speaker("You have demonstrated notable progress in your fitness training to improve conditioning. Please start attending ballet lessons. One lesson daily in short order will prepare you for wearing the suit. Continue other exercise also, and always include the motivator plug further accelerate your bodily refinement.")}
            ${Dialogue_1.Dialogue.heir("Ballet!?")}
            
            The prospect of that is so wierd, but there is something undeniably alluring about that suit...
            `;
                Tasks_1.Tasks.addTask("train-for-doll-suit");
                Tasks_1.Tasks.removeTask("improve-flexibility");
                Tasks_1.Tasks.removeTask("need-drone-license");
            }
            //TODO: Ensure the Visited count >5 becomes "keep-working
            //When keep working and need hair styling is reached, trigger this notification.
            if (Tasks_1.Tasks.hasTask("work-domestics") && Core_1.CoreUtils.visitedCount("Work in Domestic Services via Neuralink") > 5) {
                message +=
                    Dialogue_1.Dialogue.speak("computer", `${PlayerModel_1.PlayerModel.getHeirName()}, You have been making good progress with passive oversight on Neuralink. Your working skills metrics show you are a self starter who can take on challenges as an intern at Maristech.
            
            Once I verify your physical fitness for your new role, we can proceed.`) + "\n";
                Tasks_1.Tasks.removeTask("work-domestics");
                Tasks_1.Tasks.addTask("keep-working-while-training");
            }
            if (!PlayerModel_1.PlayerModel.isWeekend() &&
                Tasks_1.Tasks.hasTask("keep-working-while-training") &&
                Tasks_1.Tasks.hasTask("need-hair-styling") &&
                Core_1.CoreUtils.hasPlayed("Request Relief from Sue") &&
                !Core_1.CoreUtils.hasPlayed("Go out for hair styling with Sue")) {
                message +=
                    Dialogue_1.Dialogue.speak("computer", `${PlayerModel_1.PlayerModel.getHeirName()}, You have been making good progress with passive oversight on Neuralink. You are ready for the next step in your development. 

An audit of your of your hair and appearance suggests that your use of the motivator plug has had it's intended effect, and facilitated your physical preparations to become a fine candidate for work at MarisTech.
                
                It is time for you to prepare for your on-site internship at MarisTech.`) + "\n";
                message +=
                    Dialogue_1.Dialogue.speak("computer", `You have been scheduled to participate in the next on-site orientation on Monday at Maristech Corporate Headquarters.

                You will take your car to work on site at the head office. You need will need to wear professional attire of your choosing, and ensure your hair is properly groomed.`) + "\n";
                message += Dialogue_1.Dialogue.speak("computer", `Stores such as Olddorf-Goodman provide a good selection of such women's professional outfits.

                Sue's assistance has been solicited to help with your hair styling preparations, on Saturday. 
                `);
                Tasks_1.Tasks.removeTask("need-hair-styling");
                Tasks_1.Tasks.removeTask("continue-motivator-plug");
                Tasks_1.Tasks.removeTask("keep-working-while-training");
                Tasks_1.Tasks.addTask("get-hair-styled-for-internship-saturday");
                Tasks_1.Tasks.addTask("start-internship-on-monday");
            }
            return message;
        }
    }
    exports.ConsoleDrone = ConsoleDrone;
});
