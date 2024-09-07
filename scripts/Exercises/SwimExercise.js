(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Images/Images", "../Inventory/Items", "../Inventory/Slot", "../ItemGenerators/ItemNouns", "../Player/Skills", "../Story/OutfitSwitcher", "./ExerciseBase"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SwimExercise = void 0;
    const Images_1 = require("../Images/Images");
    const Items_1 = require("../Inventory/Items");
    const Slot_1 = require("../Inventory/Slot");
    const ItemNouns_1 = require("../ItemGenerators/ItemNouns");
    const Skills_1 = require("../Player/Skills");
    const OutfitSwitcher_1 = require("../Story/OutfitSwitcher");
    const ExerciseBase_1 = require("./ExerciseBase");
    class SwimExercise extends ExerciseBase_1.ExerciseBase {
        getExerciseName() {
            return "Swimming";
        }
        getExerciseSkill() {
            return Skills_1.SkillTypes.swimming;
        }
        getExerciseImage(className = null) {
            return Images_1.Images.drawRandomImage("exercise-swim-NNN.jpg", 27, className);
        }
        switchContext() {
            const swimContext = super.switchContext();
            if (swimContext.canProceed) {
                return swimContext;
            }
            const wsContext = OutfitSwitcher_1.OutfitSwitcher.switchContext("open-water-swimming");
            if (wsContext.canProceed) {
                return wsContext;
            }
            return swimContext;
        }
        getOutfitContext() {
            return "swimming";
        }
        getStartupMessages() {
            if (Slot_1.Slot.getSlotItem("top") != null) {
                return [
                    `You slink into the water. Your figure-hugging wetsuit moderates the normal temperature drop of getting into the water. You slowly start to feel the wetness make its way to your torso under the suit.`,
                ];
            }
            else {
                return [`You dip a foot into the water. It's not hot, but warm enough that the water doesn't give you chills.`];
            }
        }
        getFirstTimeUnderwayMessages() {
            return [`Its been a while since you last went swimming. It's been a while, but after a few laps you start finding a rythm.`];
        }
        getUnmotivatedUnderwayMessages() {
            return [`You warm up by lazily splashing around the water, before getting underway on your swim.`];
        }
        getMotivatedUnderwayMessages() {
            return [`You feel eager to get a good swim in and really start kicking and paying attention to your motions.`];
        }
        postExerciseMessage() {
            let message = "";
            const itemId = Slot_1.Slot.get(ItemNouns_1.clothingSlots.head);
            const item = Items_1.Items.get(itemId);
            if (this.getIsFirstExercise() && (item == null || item.contextual.indexOf("swimming") < 0)) {
                message += `\nYou recall hearing of some hair horror stories from frequent pool-swimmers, as bleach can fade hair and damage wigs. You consider if you may want to use a swim cap.`;
            }
            return message;
        }
    }
    exports.SwimExercise = SwimExercise;
});
