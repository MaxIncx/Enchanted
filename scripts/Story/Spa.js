(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Hair/HairStyles", "../Player/PlayerModel", "./Dialogue"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Spa = void 0;
    const HairStyles_1 = require("../Hair/HairStyles");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Dialogue_1 = require("./Dialogue");
    class Spa {
        static getMenu() {
            return `
        ${this.makeLink("Get a trim with current style", this.trimCost)}
        ${this.makeLink("Get hair styled", this.styleCost)}
        ${this.makeLink("Get hair dyed", this.dyeCost)}`;
        }
        static makeLink(action, cost) {
            return PlayerModel_1.PlayerModel.hasMoney(cost) ? `[[${action}]] $${cost}` : `${action} $${cost}`;
        }
        static trimCurrentStyle() {
            const hairStyleId = PlayerModel_1.PlayerModel.getHairStyleId();
            PlayerModel_1.PlayerModel.setHairStyleId(hairStyleId);
            PlayerModel_1.PlayerModel.deductMoney(this.trimCost);
            return "Your hair is now trimmed back to the ideal look of this style. \n [[Beauty Lounge]]";
        }
        static cutHair() {
            const hairStyleId = PlayerModel_1.PlayerModel.getHairStyleId();
            const hairStyle = HairStyles_1.HairStyles.get(hairStyleId);
            PlayerModel_1.PlayerModel.deductMoney(this.styleCost);
            return `
        ${Dialogue_1.Dialogue.speak("spa", "What style would you like for today?")}
        ${HairStyles_1.HairStyles.renderLengthsCarousel("Beauty Lounge", hairStyle.color)}`;
        }
        static dyeHair() {
            PlayerModel_1.PlayerModel.deductMoney(this.dyeCost);
            return `
        ${Dialogue_1.Dialogue.speak("spa", "What color were you thinking of?")}
        ${HairStyles_1.HairStyles.renderStylesCarousel("Beauty Lounge")}`;
        }
    }
    exports.Spa = Spa;
    Spa.trimCost = 45;
    Spa.styleCost = 80;
    Spa.dyeCost = 105;
});
