(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Player/PlayerModel", "../Tasks/Tasks", "../Story/Dialogue", "../Exercises/TriathlonExercise", "../Inventory/Outfits", "../Inventory/OutfitsAnalyser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkModel = void 0;
    const Core_1 = require("../Core");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Tasks_1 = require("../Tasks/Tasks");
    const Dialogue_1 = require("../Story/Dialogue");
    const TriathlonExercise_1 = require("../Exercises/TriathlonExercise");
    const Outfits_1 = require("../Inventory/Outfits");
    const OutfitsAnalyser_1 = require("../Inventory/OutfitsAnalyser");
    class WorkModel {
        static canWorkToday() {
            return !Core_1.CoreUtils.getVariables().player.workedToday;
        }
        static getWorkNotRequiredMessage() {
            return PlayerModel_1.PlayerModel.isWeekend()
                ? Dialogue_1.Dialogue.speaker("Note: It is the weekend. you are not required to work today. Human business literature often refers to the importance of maintaining a healthy 'work-life balance'.")
                : "";
        }
        static hasSideGig() {
            const hasBeenToOffice = Core_1.CoreUtils.hasPlayed("You are guided into the office") || Tasks_1.Tasks.hasTask("start-internship-today");
            return hasBeenToOffice;
        }
        static canWorkAtComputer() {
            if ((WorkModel.hasSideGig() && !PlayerModel_1.PlayerModel.isWeekend()) || !WorkModel.canWorkToday()) {
                return false;
            }
            return true;
        }
        static explainWorkAtComputer() {
            const hasSideGig = WorkModel.hasSideGig();
            if (hasSideGig && !PlayerModel_1.PlayerModel.isWeekend()) {
                return "Now that you are an intern, you need to work in the office on weekdays.";
            }
            if (!WorkModel.canWorkToday()) {
                return "You've already worked today.";
            }
            return "";
        }
        static canWorkAtOffice() {
            if (!WorkModel.canWorkToday()) {
                return false;
            }
            return !PlayerModel_1.PlayerModel.isWeekend();
        }
        static explainWorkAtOffice() {
            if (PlayerModel_1.PlayerModel.isWeekend()) {
                return "It's the weekend. You don't need to do anything for MarisTech today.";
            }
            if (!WorkModel.canWorkToday()) {
                return "You've already worked today.";
            }
            return "";
        }
        static linkToExercise() {
            const isTrainingDay = TriathlonExercise_1.TriathlonExercise.canDoTriathlonToday();
            if (isTrainingDay) {
                return "[[Join for Triathlon Session]]\\";
            }
            else if (Tasks_1.Tasks.hasTask("mariella-triathlon-arc-start-training")) {
                return "[[Join for Triathlon Session]]\\";
            }
            return "";
        }
        static hasTriathlonWetsuitOutfit() {
            var targetContext;
            targetContext = "open-water-swimming";
            const outfits = Outfits_1.Outfits.getOutfits();
            for (let i = 0; i < outfits.length; i++) {
                const outfit = OutfitsAnalyser_1.OutfitsAnalyser.describeOutfit(outfits[i].items);
                if (OutfitsAnalyser_1.OutfitsAnalyser.isValid(outfit.assessments[targetContext])) {
                    return true;
                }
            }
            return false;
        }
    }
    exports.WorkModel = WorkModel;
});
