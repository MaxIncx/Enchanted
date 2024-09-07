(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Images/Images", "../Inventory/Inventory", "../Player/PlayerModel", "../Player/Skills", "../Tasks/Tasks", "../TimeModel", "./ExerciseBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TriathlonExercise = void 0;
    const Core_1 = require("../Core");
    const Images_1 = require("../Images/Images");
    const Inventory_1 = require("../Inventory/Inventory");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const Tasks_1 = require("../Tasks/Tasks");
    const TimeModel_1 = require("../TimeModel");
    const ExerciseBase_1 = require("./ExerciseBase");
    class TriathlonExercise extends ExerciseBase_1.ExerciseBase {
        static canDoTriathlonToday() {
            const day = Core_1.CoreUtils.getDay();
            const dayOfWeek = TimeModel_1.TimeModel.getDate(day).weekday;
            const isTrainingDay = dayOfWeek === TimeModel_1.DayOfWeek.Tuesday || dayOfWeek === TimeModel_1.DayOfWeek.Thursday || dayOfWeek === TimeModel_1.DayOfWeek.Sunday;
            return isTrainingDay && Tasks_1.Tasks.hasTask("mariella-triathlon-arc-start-training");
        }
        getExerciseName() {
            return "Triathlon";
        }
        getExerciseSkill() {
            return Skills_1.SkillTypes.endurance;
        }
        exercise() {
            if (!PlayerModel_1.PlayerModel.canAttendedTriathlonPractice()) {
                return "You already participated in the triathlon practice. You'll need to wait for the next session. \n";
            }
            return super.exercise();
        }
        getExerciseCostMessage(verbose) {
            let message = super.getExerciseCostMessage(verbose);
            PlayerModel_1.PlayerModel.setHasAttendedTriathlonPractice();
            return message;
        }
        getExerciseImage(className = null) {
            if (Inventory_1.Inventory.has("race-bike")) {
                if (Math.random() > 0.5) {
                    return Images_1.Images.drawRandomImage("tri-bike-training-NNN.jpg", 7, className);
                }
                else {
                    return Images_1.Images.drawRandomImage("triathlon-endurance-NNN.jpg", 4, className);
                }
            }
            else {
                return Images_1.Images.drawRandomImage("triathlon-endurance-NNN.jpg", 4, className);
            }
        }
        getStartupMessages() {
            return [`Mariella get the group together and calls out the route your going to be doing today!`];
        }
        getFirstTimeUnderwayMessages() {
            return [
                `As things wrap up, Mariella introduces you to her triathlon "gang". Today's practice has 7 people, including you. They're a mix of amateur athletes, a mix of all ages in their 20s to 50s. `,
            ];
        }
        getUnmotivatedUnderwayMessages() {
            return [
                `You are starting to get familiar with the exercise, but you find your mind drifting. You wonder if there is something you could do to make your exercises more stimulating.`,
            ];
        }
        getMotivatedUnderwayMessages() {
            return [`You feel yourself getting a nice endorphin rush going.`];
        }
    }
    exports.TriathlonExercise = TriathlonExercise;
});
