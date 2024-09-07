(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Images/Images", "../Inventory/Clothing", "../Inventory/InventoryUX", "../Inventory/MirrorUX", "../Player/PlayerModel", "../Player/Skills", "../Story/Dialogue", "../Story/OutfitSwitcher", "../Tasks/Tasks"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExerciseBase = void 0;
    const Core_1 = require("../Core");
    const Images_1 = require("../Images/Images");
    const Clothing_1 = require("../Inventory/Clothing");
    const InventoryUX_1 = require("../Inventory/InventoryUX");
    const MirrorUX_1 = require("../Inventory/MirrorUX");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const Dialogue_1 = require("../Story/Dialogue");
    const OutfitSwitcher_1 = require("../Story/OutfitSwitcher");
    const Tasks_1 = require("../Tasks/Tasks");
    class ExerciseBase {
        constructor() {
            this.isFirstExercise = false;
        }
        getOutfitContext() {
            return "fitness";
        }
        switchContext() {
            return OutfitSwitcher_1.OutfitSwitcher.switchContext(this.getOutfitContext());
        }
        canExerciseToday() {
            return PlayerModel_1.PlayerModel.canExerciseToday();
        }
        explainExerciseBlocker() {
            if (!PlayerModel_1.PlayerModel.canExerciseToday()) {
                return "You don't have the energy for more exercise today. Maybe after some rest.\n";
            }
            return "";
        }
        exercise() {
            let message = "";
            if (!this.canExerciseToday()) {
                return this.explainExerciseBlocker();
            }
            //Check Outfit
            const switchOutcome = this.switchContext();
            message = switchOutcome.switchOutcomeDescription;
            if (!switchOutcome.canProceed) {
                return message;
            }
            const verbose = true;
            //Proceed with exercise
            message += Core_1.CoreUtils.getRandomString(this.getStartupMessages()) + "\n";
            message += this.getExerciseImage(null) + "\n" + "\n";
            message += this.getUnderwayMessage(verbose);
            message += this.getExerciseBenefitMessage(verbose);
            message += this.getExerciseCostMessage(verbose);
            message += this.postExerciseMessage(verbose);
            return message;
        }
        montageExercise() {
            let message = "";
            if (!this.canExerciseToday()) {
                return this.explainExerciseBlocker();
            }
            //Check Outfit
            const switchOutcome = this.switchContext();
            if (!switchOutcome.canProceed) {
                return message;
            }
            const verbose = false;
            //Proceed with exercise
            message +=
                `<div class="exercise-montage-card">` +
                    `<span class="montage-image">${this.getExerciseImage("compact-exercise")}</span>` +
                    `<span>` +
                    `<span class="montage-title">${this.getExerciseName()}</span>
            <span class="montage-benefit">${this.getExerciseBenefitMessage(verbose)}${this.getUnderwayMessage(verbose)}</span>` +
                    `<span class="montage-cost">${this.getExerciseCostMessage(verbose)}</span>` +
                    `</span>` +
                    `</div>`;
            message += this.postExerciseMessage(verbose);
            return message;
        }
        getUnderwayMessage(verbose) {
            let message = "";
            if (PlayerModel_1.PlayerModel.hasGirlyGenitals() && Clothing_1.Clothing.isWearing("chastity-belt")) {
                message += "During the exercise you feel the dilator teasing you, so frustrating! ";
            }
            if (Skills_1.Skills.get(this.getExerciseSkill()) <= 0) {
                message += Core_1.CoreUtils.getRandomString(this.getFirstTimeUnderwayMessages());
            }
            else if (!MirrorUX_1.MirrorUX.isWearing("motivator-plug")) {
                message += Core_1.CoreUtils.getRandomString(this.getUnmotivatedUnderwayMessages()) + "\n";
            }
            else {
                Skills_1.Skills.add(Skills_1.SkillTypes.hormones, 1, 100);
                message += Core_1.CoreUtils.getRandomString(this.getMotivatedUnderwayMessages());
                message += this.getMotivatorMessage();
            }
            return verbose ? message : "";
        }
        getExerciseBenefitMessage(verbose) {
            let message = "";
            const skillchange = this.updateSkill(this.getExerciseSkill());
            message += this.summarizeSkill(skillchange, verbose);
            return message;
        }
        getExerciseCostMessage(verbose) {
            let message = "";
            PlayerModel_1.PlayerModel.setHasExercisedToday();
            if (verbose) {
                message += this.canDoMore();
            }
            Tasks_1.Tasks.ensureTask("player-needs-shower");
            Core_1.CoreUtils.getVariables().clothesAreDirty = true;
            return message;
        }
        /**
         * Perform task specific eventing - no common Behavior
         */
        postExerciseMessage(verbose) {
            let message = "";
            const cardioCount = Core_1.CoreUtils.visitedCount("Elliptical") + Core_1.CoreUtils.visitedCount("Go Swimming");
            if (cardioCount >= 3 && !InventoryUX_1.InventoryUX.hasItem("motivator-plug") && !Tasks_1.Tasks.hasTask("get-motivator-plug")) {
                message += Dialogue_1.Dialogue.speaker("Thank you for your devotion to improved fitness. Please use the health screen at the inner chamber console - I have a surprise for you.");
                Tasks_1.Tasks.addTask("get-motivator-plug");
            }
            verbose;
            return message;
        }
        canDoMore() {
            let message;
            if (PlayerModel_1.PlayerModel.canExerciseToday()) {
                message = `
            After the exercise wraps up, you still feel like you could do some exercise today. 
            `;
            }
            else {
                message = `
             At this point, you are completely drained, and can't handle any more exercise. 
             `;
            }
            return message;
        }
        getMotivatorMessage() {
            let message;
            if (Skills_1.Skills.get(Skills_1.SkillTypes.hormones) < 5) {
                message = `
            You jolt a moment as you sense an icy cold spray inside your rear, coming from the plug.   

            After a couple minutes, you feel a renewed energy for the exercise, and find yourself putting more oomph in.
            
            `;
            }
            else {
                message = `
            As you feel yourself starting to get tired, you feel a now pleasurable sensation in your nether region, and you feel a renewed energy to push through the exercise.
            `;
            }
            return message;
        }
        getIsFirstExercise() {
            return Skills_1.Skills.get(this.getExerciseSkill()) <= 0 || this.isFirstExercise;
        }
        summarizeSkill(skillChange, verbosity = true) {
            let message = "";
            if (verbosity) {
                switch (skillChange.increaseRating) {
                    case 1:
                        if (Clothing_1.Clothing.isWearing("motivator-plug")) {
                            message =
                                "As you finish, you feel like you weren't able to push yourself. You don't feel like you made any notable progress today. Perhaps you just are feeling motivated enough.";
                        }
                        if (Skills_1.SkillLimits.isNearFitnessLimit(skillChange.skillBefore)) {
                            message = "As you finish, you feel like you are getting to the peak of what you can do with this exercise.";
                        }
                        else {
                            message = "You feel like you just had a bad workout today.";
                        }
                        break;
                    case 2:
                        message = "As you finish, you feel you had a modest workout.";
                        break;
                    case 3:
                        message = "As you finish, you feel you were able to get a decent workout.";
                        break;
                    case 4:
                        if (skillChange.hadFitGasm) {
                            message = `At your peak exertion, your body involuntarily shudders and you let out a quiet moan.
                    ${Images_1.Images.drawRandomImage("core-gasm-NNN.jpg", 3)}. 
                    That was one mind-blowing workout. You'll probably feel a little sore tommorow, but it was so worth it.`;
                        }
                        else {
                            message = `You got really into this workout and were in the zone.`;
                        }
                        break;
                    default:
                        message = "The time passed quickly, you totally enjoyed yourself and made great progress on your ongoing journey to better fitness.";
                        break;
                }
                message += ` Your skill at ${skillChange.skillName} has increased by ${Skills_1.Skills.roundSkill(skillChange.skillAfter - skillChange.skillBefore)} to ${Skills_1.Skills.roundSkill(skillChange.skillAfter)}.<br /> `;
            }
            else {
                message += `Your skill at ${skillChange.skillName} increased ${Skills_1.Skills.roundSkill(skillChange.skillAfter - skillChange.skillBefore)} to ${Skills_1.Skills.roundSkill(skillChange.skillAfter)}.<br /> `;
                if (skillChange.hadFitGasm) {
                    message += `This was a mind-blowing workout. You'll probably feel a little sore tommorow, but it was so worth it.`;
                }
            }
            return message;
        }
        updateSkill(skillName) {
            const skillBefore = Skills_1.Skills.get(skillName);
            this.isFirstExercise = skillBefore <= 0;
            const maxIncrease = MirrorUX_1.MirrorUX.isWearing("motivator-plug") ? 4 : 2;
            let increaseValue = Math.round((maxIncrease * Math.random() + 0.5) * 10) / 10;
            const increaseRating = Math.round(increaseValue);
            const scaleFactor = skillBefore / 50;
            const scaleDown = Math.pow(0.8, scaleFactor);
            increaseValue = increaseValue * scaleDown;
            const maxSkill = Skills_1.SkillLimits.maxFitnessSkill;
            const newSkill = Math.min(maxSkill, skillBefore + increaseValue);
            const skillIncrease = newSkill - skillBefore;
            Skills_1.Skills.add(skillName, skillIncrease, maxSkill);
            const skillAfter = Skills_1.Skills.get(skillName);
            const player = Core_1.CoreUtils.getVariables().player;
            const hadFitGasm = increaseRating >= 3 && !player.hadFitGasm;
            player.hadFitGasm = player.hadFitGasm || hadFitGasm;
            return {
                skillName: skillName,
                skillBefore: skillBefore,
                skillAfter: skillAfter,
                hadFitGasm: hadFitGasm,
                skillIncrease: skillIncrease,
                increaseRating: increaseRating,
            };
        }
    }
    exports.ExerciseBase = ExerciseBase;
});
