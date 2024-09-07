(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Exercises/BalletLesson", "../Exercises/EllipticalExercise", "../Exercises/SwimExercise", "../Exercises/YogaExercise", "../Exercises/TriathlonExercise", "../Exercises/PairYogaExercise", "../Player/PlayerModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Exercises = void 0;
    const BalletLesson_1 = require("../Exercises/BalletLesson");
    const EllipticalExercise_1 = require("../Exercises/EllipticalExercise");
    const SwimExercise_1 = require("../Exercises/SwimExercise");
    const YogaExercise_1 = require("../Exercises/YogaExercise");
    const TriathlonExercise_1 = require("../Exercises/TriathlonExercise");
    const PairYogaExercise_1 = require("../Exercises/PairYogaExercise");
    const PlayerModel_1 = require("../Player/PlayerModel");
    class Exercises {
        static doElliptical() {
            return new EllipticalExercise_1.EllipticalExercise().exercise();
        }
        static doSwim() {
            return new SwimExercise_1.SwimExercise().exercise();
        }
        static doYoga() {
            return new YogaExercise_1.YogaExercise().exercise();
        }
        static doStationYoga(doPairYoga = true) {
            return new PairYogaExercise_1.StationYogaExercise(doPairYoga).exercise();
        }
        static doBallet() {
            return new BalletLesson_1.BalletExercise().exercise();
        }
        static doTriathlon() {
            return new TriathlonExercise_1.TriathlonExercise().exercise();
        }
        static getExercise(exerciseName) {
            const exercises = [new EllipticalExercise_1.EllipticalExercise(), new SwimExercise_1.SwimExercise(), new YogaExercise_1.YogaExercise(), new BalletLesson_1.BalletExercise()];
            const map = {};
            exercises.forEach((item) => {
                map[item.getExerciseName()] = item;
            });
            return map[exerciseName];
        }
        static montage() {
            let s = "";
            const exercises = PlayerModel_1.PlayerModel.GetDailyExercises();
            const index = Math.min(PlayerModel_1.PlayerModel.GetExerciseIndex(), exercises.length - 1);
            const iterations = PlayerModel_1.PlayerModel.getStamina();
            let i = 0;
            if (PlayerModel_1.PlayerModel.getStamina() <= 0) {
                s += "You don't have any stamina.";
            }
            else if (PlayerModel_1.PlayerModel.GetDailyExercises().length <= 0) {
                s += "You don't have any exercises planned.";
            }
            else {
                for (i = 0; i < iterations; i++) {
                    const exerciseName = exercises[(i + index) % exercises.length];
                    const exercise = this.getExercise(exerciseName);
                    s += `<div class="exercise-montage-${i}">${exercise.montageExercise()}</div>`;
                }
                PlayerModel_1.PlayerModel.SetExerciseIndex((i + index) % exercises.length);
            }
            return s;
        }
    }
    exports.Exercises = Exercises;
});
