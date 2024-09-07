(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Link", "../Player/PlayerModel", "../Player/Skills", "./BalletLesson", "./EllipticalExercise", "./SwimExercise", "./YogaExercise"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExercisePlanner = exports.Direction = void 0;
    const Core_1 = require("../Core");
    const Link_1 = require("../Link");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const BalletLesson_1 = require("./BalletLesson");
    const EllipticalExercise_1 = require("./EllipticalExercise");
    const SwimExercise_1 = require("./SwimExercise");
    const YogaExercise_1 = require("./YogaExercise");
    var Direction;
    (function (Direction) {
        Direction[Direction["up"] = 0] = "up";
        Direction[Direction["down"] = 1] = "down";
    })(Direction = exports.Direction || (exports.Direction = {}));
    class ExercisePlanner {
        static makeAddLink(activity) {
            return Link_1.makeLink(activity, `SugarCube.getLib().ExercisePlanner.appendActivity('${activity}');`, `add-exercise ${activity}`);
        }
        static makeRemoveLink(index) {
            return Link_1.makeLink("X", `SugarCube.getLib().ExercisePlanner.removeActivity('${index}');`, `remove-exercise ${index}`);
        }
        static makeMoveLink(index, direction) {
            const action = direction == Direction.up ? -1 : 1;
            const label = direction == Direction.up ? "🔼" : "🔽";
            const directionClass = direction == Direction.up ? "up" : "down";
            const hidden = (index <= 0 && direction === Direction.up) || (index >= PlayerModel_1.PlayerModel.GetDailyExercises().length - 1 && direction === Direction.down) ? "hidden" : "";
            return `${Link_1.makeLink(label, `SugarCube.getLib().ExercisePlanner.moveActivity(${index},${action});`, `${action} ${directionClass} ${hidden}`)}`;
        }
        static appendActivity(activity) {
            const exercises = PlayerModel_1.PlayerModel.GetDailyExercises();
            exercises.push(activity);
            Core_1.CoreUtils.playPassage();
        }
        static removeActivity(index) {
            const exercises = PlayerModel_1.PlayerModel.GetDailyExercises();
            exercises.splice(index, 1);
            Core_1.CoreUtils.playPassage();
        }
        static moveActivity(index, direction) {
            const exercises = PlayerModel_1.PlayerModel.GetDailyExercises();
            const swapIndex = index + direction;
            const tmp = exercises[index];
            exercises[index] = exercises[swapIndex];
            exercises[swapIndex] = tmp;
            Core_1.CoreUtils.playPassage();
        }
        static plan() {
            let s = "";
            const activities = [new SwimExercise_1.SwimExercise(), new YogaExercise_1.YogaExercise(), new EllipticalExercise_1.EllipticalExercise(), new BalletLesson_1.BalletExercise()];
            s += "Add Activity:<br/>";
            s += activities
                .map((item) => {
                const exerciseName = item.getExerciseName();
                if (Skills_1.Skills.get(item.getExerciseSkill()) > 0)
                    return `<span class="exercise-link ${exerciseName}">${ExercisePlanner.makeAddLink(exerciseName)}</span>`;
            })
                .join("");
            s += "<br/>Note: You can only add exercises you have successfully done at least once before .<br/><br/>";
            s += "Exercise Rotation<br/>";
            const exercises = PlayerModel_1.PlayerModel.GetDailyExercises();
            if (exercises.length == 0) {
                s += "You don't have any exercises planned";
            }
            else {
                const index = Math.min(PlayerModel_1.PlayerModel.GetExerciseIndex(), exercises.length - 1);
                s += exercises
                    .map((item, idx) => {
                    const isActive = idx == index;
                    const activeLabel = isActive ? "Next" : "";
                    return `<div class="exercise-plan-row"><span class="exercise-label">${item}</span>  ${ExercisePlanner.makeMoveLink(idx, Direction.up)}  ${ExercisePlanner.makeMoveLink(idx, Direction.down)} ${ExercisePlanner.makeRemoveLink(idx)} </div> <span class="active-label">${activeLabel}</span>`;
                })
                    .join(" <br/>");
                s += "<br/>";
            }
            return s;
        }
    }
    exports.ExercisePlanner = ExercisePlanner;
});
