(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Story/Dialogue", "../Player/PlayerModel", "../Player/Skills", "../Tasks/Tasks", "../Images/Images", "../Story/OutfitSwitcher", "../Inventory/InventoryUX"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RunWalk = void 0;
    const Dialogue_1 = require("../Story/Dialogue");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const Tasks_1 = require("../Tasks/Tasks");
    const Images_1 = require("../Images/Images");
    const OutfitSwitcher_1 = require("../Story/OutfitSwitcher");
    const InventoryUX_1 = require("../Inventory/InventoryUX");
    class RunWalk {
        static runWalkStart() {
            const ctx = OutfitSwitcher_1.OutfitSwitcher.switchContext("fitness");
            if (!ctx.canProceed) {
                return ctx.switchOutcomeDescription;
            }
            PlayerModel_1.PlayerModel.deductMoney(25);
            Tasks_1.Tasks.removeTask("maristech-5k-runwalk");
            return `
        You pay up, are registered, given a tracking card and then you are corralled with some other employees and interns. The event is well organized, with a mix of volunteers and Lady-Sport Fit employees. The organizers send you off in a wave with a number of other runners.
        ${Images_1.Images.drawLocation("5k-run.jpg")}
        [[You get a good start]]
        `;
        }
        static runWalkFinish() {
            const cardioSkill = Skills_1.Skills.get(Skills_1.SkillTypes.cardio);
            PlayerModel_1.PlayerModel.setHasExercisedToday();
            let message = `${Dialogue_1.Dialogue.sporting(`Congratulations everyone on your participation with the 5K and your help with the fight against cancer! Here, this is yours. I hope we see you here next year.`)}
        You are given a ladies small T-Shirt as a memento for your participation at this event.
        ${Images_1.Images.drawItemById("5k-running-tshirt")};`;
            if (cardioSkill > 40) {
                message += `
            That 5k was a walk in the park. Well, figuratively speaking. You ran at a steady clip, and made top 10 for the Women's division. After reaching the finish line, you encounter Mariella.
            ${Dialogue_1.Dialogue.speak("clubLeader", "Wow, you're quite fit! Our little 5k may not have be a worthy challenge for a serious athlete like you. Perhaps you might like to join me in training for some bigger challenges? I'm getting ready for a Triathlon with some other athletic-minded ladies for this summer? It can be more fun with friends! No need to decide now, we can discuss later.")}`;
                Tasks_1.Tasks.addTask("mariella-triathlon-arc");
            }
            else if (cardioSkill > 20) {
                message += `
            Your exercises paid off. You were able to jog the entirety at a good steady pace, making a respectable showing.
            ${Dialogue_1.Dialogue.speak("clubLeader", `That was a respectable showing you made today. If you like running, perhaps you'd be up for something a bit more abitious? I have a small group of friends who are training for some events if you're interested. No need to decide now, we can discuss later.`)}`;
                Tasks_1.Tasks.addTask("mariella-triathlon-arc");
            }
            else {
                message += `
            ${Dialogue_1.Dialogue.speak("clubLeader", `You arrive at the finish line winded, but at least you completed it.`)}`;
            }
            InventoryUX_1.InventoryUX.add("5k-running-tshirt");
            message += `        
        [[Maristech Campus]]`;
            message += `${Dialogue_1.Dialogue.endOfLine()}`;
            return message;
        }
    }
    exports.RunWalk = RunWalk;
});
