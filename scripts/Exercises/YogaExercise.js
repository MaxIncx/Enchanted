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
    exports.YogaExercise = void 0;
    const Images_1 = require("../Images/Images");
    const Skills_1 = require("../Player/Skills");
    const ExerciseBase_1 = require("./ExerciseBase");
    class YogaExercise extends ExerciseBase_1.ExerciseBase {
        getExerciseName() {
            return "Yoga";
        }
        getExerciseSkill() {
            return Skills_1.SkillTypes.flexibility;
        }
        getExerciseImage(className = null) {
            return Images_1.Images.drawRandomImage("yoga-exercise-NNN.jpg", 8, className);
        }
        getStartupMessages() {
            return [`You put on a training video, and put your watch into exercise mode.`];
        }
        getFirstTimeUnderwayMessages() {
            return [`Yoga is new to you you find yourself sweating a lot as you try to imitate the poses, but your flexibility isn't great.`];
        }
        getUnmotivatedUnderwayMessages() {
            return [
                `You are starting to get familiar with the exercise, but you find your mind drifting. You wonder if there is something you could do to make your exercises more stimulating.`,
            ];
        }
        getMotivatedUnderwayMessages() {
            return [`You hope that you can do a little better at some poses today.`];
        }
    }
    exports.YogaExercise = YogaExercise;
});
