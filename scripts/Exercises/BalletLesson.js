(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Images/Images", "../Inventory/Clothing", "../Inventory/Inventory", "../Player/PlayerModel", "../Player/Skills", "../Story/Dialogue", "../Story/InnerChamber", "../Tasks/Tasks", "./ExerciseBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BalletExercise = void 0;
    const Images_1 = require("../Images/Images");
    const Clothing_1 = require("../Inventory/Clothing");
    const Inventory_1 = require("../Inventory/Inventory");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const Dialogue_1 = require("../Story/Dialogue");
    const InnerChamber_1 = require("../Story/InnerChamber");
    const Tasks_1 = require("../Tasks/Tasks");
    const ExerciseBase_1 = require("./ExerciseBase");
    class BalletExercise extends ExerciseBase_1.ExerciseBase {
        getExerciseName() {
            return "Ballet";
        }
        getExerciseSkill() {
            return Skills_1.SkillTypes.ballet;
        }
        getExerciseImage(className) {
            return Images_1.Images.drawRandomImage("ballet-lesson-NNN.jpg", 24, className);
        }
        canExerciseToday() {
            let canExercise = super.canExerciseToday();
            canExercise && (canExercise = PlayerModel_1.PlayerModel.hasMoney(50));
            canExercise && (canExercise = PlayerModel_1.PlayerModel.canAttendedBalletClass());
            return canExercise;
        }
        explainExerciseBlocker() {
            if (!PlayerModel_1.PlayerModel.hasMoney(50))
                return "You don't have enough money for class today. Stop by when you have some more cash. \n";
            if (!PlayerModel_1.PlayerModel.canAttendedBalletClass())
                return "You have already attended the Adult Beginner class for today. Stop by tommorow for the next class. \n";
            return super.explainExerciseBlocker();
        }
        exercise() {
            if (!PlayerModel_1.PlayerModel.hasMoney(50)) {
                return "You don't have enough money for class today. Stop by when you have some more cash. \n";
            }
            if (!PlayerModel_1.PlayerModel.canAttendedBalletClass()) {
                return "You have already attended the Adult Beginner class for today. Stop by tommorow for the next class. \n";
            }
            return super.exercise();
        }
        switchContext() {
            const context = super.switchContext();
            if (context.canProceed && this.getIsFirstExercise()) {
                Inventory_1.Inventory.add("ballet-slippers");
                Inventory_1.Inventory.add("ballet-leotard");
                Inventory_1.Inventory.add("ballet-tights");
                Clothing_1.Clothing.wear("ballet-slippers");
                Clothing_1.Clothing.wear("ballet-leotard");
                Clothing_1.Clothing.wear("ballet-tights");
                context.switchOutcomeDescription = "You have dressed yourself in some exercise clothes but, the instructor pulls you aside.";
                context.switchOutcomeDescription += Dialogue_1.Dialogue.speak("ballet", "Bonjour! Welcome to your first lesson at my studio! To truly experience ballet, there is no substitute for these!");
                context.switchOutcomeDescription +=
                    "You see she has handed you a leotard, tights and some slippers. When in Rome, you sigh to yourself... After discreetly putting the new items on in the changeroom, you return to the studio just in time for class to start.\n\n";
            }
            return context;
        }
        getStartupMessages() {
            if (Skills_1.Skills.get(this.getExerciseSkill()) > 5) {
                return [
                    `The instructor has the class start practicing at the barre. Your other exercises have helped you get a bit of a baseline of flexibility and strength, but the poses are challenging.`,
                ];
            }
            else {
                //https://www.everydayballet.com/the-7-movements-of-ballet/
                return [
                    Dialogue_1.Dialogue.speak("ballet", "Bonjour mes étudiants! For today, let's work on our plié, the bending of the knees. Getting this movement right is the most important step, as allow your knees and ankles to absorbe the force of your movements like a spring. With practice, your mastery of the Plié will make your dancing look elegant and effortless!"),
                    Dialogue_1.Dialogue.speak("ballet", "Bonjour mes étudiants! Today, let's look at the Étendre, to create the aesthetic of the pointed toe. Tendu stretch exercises help us to develop foot and leg strength..."),
                    Dialogue_1.Dialogue.speak("ballet", "Bonjour mes étudiants! Today, let's work on a smooth Glisser motion. We slide our feet against the floor, like the motion of ice skating. This helps us to propel the leg into extension and off the ground..."),
                    Dialogue_1.Dialogue.speak("ballet", "Bonjour mes étudiants! Reveler! We rise to lift our heels off the ground, balancing on the balls of our feet. With practice, we can create an impression of floating! Notice how you feel the muscles of the calf, ankle and feet!"),
                    Dialogue_1.Dialogue.speak("ballet", "Bonjour mes étudiants! Let me see you Sauter! With this, we push off from the Plie into the air, leaving the floor with pointed toes.  But what goes up must go down, mes amis! The true secret is the quiet and soft landing..."),
                    Dialogue_1.Dialogue.speak("ballet", "Bonjour mes étudiants! Tourner is any turning of the body. Turns can be on the floor, in place or in the Air. Next, let's look at our Pirouette, a whirl we do on one leg..."),
                    Dialogue_1.Dialogue.speak("ballet", "Bonjour mes étudiants! At times we dart along the floor, with strongly stretched legs and pointed toes. We call this movement Elancer, as we jump along the floor, rather than into the air..."),
                    Dialogue_1.Dialogue.speak("ballet", "Bonjour mes étudiants! Ballet is not just rapid motion. Slow, sustained graceful movements of the Adagio can create memorable impressions..."),
                ];
            }
        }
        getFirstTimeUnderwayMessages() {
            return [`You feel kind of nervous with this class. All your exercises up to now had kind of been on your own. It's different now with other people around. `];
        }
        getUnmotivatedUnderwayMessages() {
            return [
                `You find yourself a bit unmotivated with today's lesson.`,
                `It's difficult to stay focused. You find your attention keeps drifting to a sexy classmate, not the motions`,
                `Your head just isn't in the ballet today.`,
            ];
        }
        getMotivatedUnderwayMessages() {
            return [
                `Wow, today you are really finding yourself getting immersed in emulating the basic positions!`,
                `You are surprised at how engaging this lesson is. You want to do more!`,
                `Today's lesson feels effortless. You really push yourself with this one!`,
            ];
        }
        getExerciseCostMessage(verbose) {
            let message = super.getExerciseCostMessage(verbose);
            PlayerModel_1.PlayerModel.deductMoney(50);
            PlayerModel_1.PlayerModel.setHasAttendedBalletClass();
            if (verbose) {
                message += "$50 was deducted from your account for the lesson. \n";
                message += Dialogue_1.Dialogue.speak("ballet", "Au revoir! Remember not to leave your Ballet in the studio. With poise and balance, you can make every moment beautiful.");
            }
            return message;
        }
        postExerciseMessage() {
            let message = "";
            if (InnerChamber_1.InnerChamber.meetsBalletReq() && Tasks_1.Tasks.hasTask("train-for-doll-suit")) {
                message += "<br/>";
                message += Dialogue_1.Dialogue.speaker("User movements are now indicative of core proficiency of ballet fundamentals for introductory use of the dollsuit.");
                Tasks_1.Tasks.removeTask("train-for-doll-suit");
                if (InnerChamber_1.InnerChamber.meetsWaistReq()) {
                    message += "<br/>";
                    message += Dialogue_1.Dialogue.speaker("It appears that your dimensions now meet the exacting tolerances required of the dollsuit. Please report to the inner chamber for dollsuit training.");
                    if (!Tasks_1.Tasks.hasTask("wear-doll-suit")) {
                        Tasks_1.Tasks.addTask("wear-doll-suit");
                    }
                }
                else {
                    message += "<br/>";
                    message += Dialogue_1.Dialogue.speaker("Your waist dimensions are trending well, but do not conform to maximum limits required of the dollsuit, as yet.");
                    if (!Tasks_1.Tasks.hasTask("slim-for-doll-suit")) {
                        Tasks_1.Tasks.addTask("slim-for-doll-suit");
                    }
                }
            }
            return message;
        }
    }
    exports.BalletExercise = BalletExercise;
});
