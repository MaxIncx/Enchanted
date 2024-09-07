(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Images/Images", "../Player/Skills", "./ExerciseBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StationYogaExercise = void 0;
    const Images_1 = require("../Images/Images");
    const Skills_1 = require("../Player/Skills");
    const ExerciseBase_1 = require("./ExerciseBase");
    class StationYogaExercise extends ExerciseBase_1.ExerciseBase {
        constructor(isPair) {
            super();
            this.isPair = isPair;
        }
        getOutfitContext() {
            return "casual";
        }
        getExerciseName() {
            return "Yoga";
        }
        getExerciseSkill() {
            return Skills_1.SkillTypes.flexibility;
        }
        getExerciseImage(className = null) {
            if (this.isPair) {
                return Images_1.Images.drawRandomImage("yoga-pair-NNN.jpg", 19, className);
            }
            else {
                return Images_1.Images.drawRandomImage("yoga-exercise-NNN.jpg", 8, className);
            }
        }
        getStartupMessages() {
            if (this.isPair) {
                return [
                    `The serene look of the water is just so inviting for you to practice your yoga. Margaret is all too happy to have a yoga companion, obviously given how little there is to do here.`,
                ];
            }
            else {
                return [`The serene look of the water is just so inviting for you to practice your yoga.`];
            }
        }
        getFirstTimeUnderwayMessages() {
            return [`You get started. You're not sure what it is, but practicing Yoga here is so exciting.`];
        }
        getUnmotivatedUnderwayMessages() {
            if (this.isPair) {
                return [
                    `Exercising with a friend like this is really helping you to try new poses. At times, you find with all the intimate holds and bumping into Margaret, you are embarrassed as your mind sometimes drifts to... Un-yoga-like activities... You don't get quite as much exercise out of it as you would have hoped... You hope she doesn't notice that you aren't completely focused on the yoga, but she still seems to be smiling.`,
                ];
            }
            else {
                return [`Alone with your horny thoughts, you aren't able to focus on the yoga, and you don't have an outlet for your sexual frustrations...`];
            }
        }
        getMotivatedUnderwayMessages() {
            return [`Practicing your yoga with a view of the sea gives you a sense of solitude.`];
        }
    }
    exports.StationYogaExercise = StationYogaExercise;
});
