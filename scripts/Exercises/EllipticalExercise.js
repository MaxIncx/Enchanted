(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Images/Images", "../Player/Skills", "../Tasks/Tasks", "./ExerciseBase", "../Story/Dialogue"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EllipticalExercise = void 0;
    const Images_1 = require("../Images/Images");
    const Skills_1 = require("../Player/Skills");
    const Tasks_1 = require("../Tasks/Tasks");
    const ExerciseBase_1 = require("./ExerciseBase");
    const Dialogue_1 = require("../Story/Dialogue");
    class EllipticalExercise extends ExerciseBase_1.ExerciseBase {
        getExerciseName() {
            return "Elliptical";
        }
        getExerciseSkill() {
            return Skills_1.SkillTypes.cardio;
        }
        getExerciseImage(className = null) {
            return Images_1.Images.drawRandomImage("elliptical-exercise-NNN.jpg", 9, className);
        }
        getStartupMessages() {
            return [
                `You start up the machine. You set the initial resistance to a level you feel you can handle, and start running.

        The watch prompts you to confirm that you have started physical activity, to start tracking.
        
        From there, the watch connects to the machine, and adjust the difficulty against your heart rate.`,
            ];
        }
        getFirstTimeUnderwayMessages() {
            return [
                `The first stretch was relatively easy, but elliptical really has you working your glutes on a hill like section, you are really starting to sweat now.

        The notion of the inheritance being connected to your health, makes you want to make a good showing of yourself. At the end, you are dripping in sweat, and the jog is done.`,
            ];
        }
        getUnmotivatedUnderwayMessages() {
            return [
                `This isn't your first time on this machine, it's a little boring. You can't help but find yourself drawn to the cute reflection you see in the mirror. At the end, you are not sure how much progress you actually made.`,
            ];
        }
        getMotivatedUnderwayMessages() {
            return [`You feel like things are going a bit slow, so you increase the difficulty a bit.`];
        }
        postExerciseMessage(verbose) {
            let message = super.postExerciseMessage(verbose);
            if (Tasks_1.Tasks.hasTask("first-elliptical")) {
                message += Dialogue_1.Dialogue.speaker("Congratulations. Initial jog health data collected. Running detailed analysis. In the meantime, please proceed on a regimen of conditioning to improve cardiovascular capacity to ready yourself for the special demands of your inheritance. As the analysis is completed, I shall provide you with supplemental instructions.");
                Tasks_1.Tasks.addTask("improve-conditioning");
                Tasks_1.Tasks.removeTask("first-elliptical");
            }
            return message;
        }
    }
    exports.EllipticalExercise = EllipticalExercise;
});
