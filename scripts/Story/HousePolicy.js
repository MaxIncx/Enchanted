(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Inventory/Inventory", "../Inventory/MirrorUX", "../Player/PlayerModel", "../Tasks/Tasks", "../Inventory/OutfitsAnalyser", "../Core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HousePolicy = void 0;
    const Inventory_1 = require("../Inventory/Inventory");
    const MirrorUX_1 = require("../Inventory/MirrorUX");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Tasks_1 = require("../Tasks/Tasks");
    const OutfitsAnalyser_1 = require("../Inventory/OutfitsAnalyser");
    const Core_1 = require("../Core");
    /**
     * Policy is a hodgepodge of experience support functions. Needs a better home.
     */
    class HousePolicy {
        static canLeaveHouse() {
            const outfitDescription = OutfitsAnalyser_1.OutfitsAnalyser.describeCurrentOutfit();
            const result = !Inventory_1.Inventory.has("luggage") &&
                outfitDescription.isDecentOutfit &&
                (outfitDescription.isAllMaleOutfit ||
                    (outfitDescription.isAllWomanOutfit &&
                        Inventory_1.Inventory.has("smart-watch") &&
                        (!Core_1.CoreUtils.hasPlayed("Arise from daze") || Inventory_1.Inventory.has("chasti-flex") || Inventory_1.Inventory.has("chastity-belt"))));
            return result;
        }
        static getLeaveHouseCommentary() {
            let result = "";
            const outfitDescription = OutfitsAnalyser_1.OutfitsAnalyser.describeCurrentOutfit();
            if (Tasks_1.Tasks.hasTask("drop-luggage")) {
                result += "You don't feel like heading out until you can put away your luggage.";
            }
            else if (!outfitDescription.isDecentOutfit) {
                result += MirrorUX_1.MirrorUX.explainOutfitIndecency();
            }
            else if (!outfitDescription.isAllMaleOutfit) {
                if (!Inventory_1.Inventory.has("smart-watch")) {
                    result += "You don't feel at all comfortable to be seen outside with girly clothes visible.";
                    if (PlayerModel_1.PlayerModel.isWearingMakeup()) {
                        result += "You still have makeup on.";
                    }
                }
                else if (Inventory_1.Inventory.has("smart-watch")) {
                    if (!outfitDescription.isAllWomanOutfit) {
                        result +=
                            "Your outfit isn't entirely feminine. You don't feel comfortable wearing an outfit with a mix of details right now, at least until you can give things a closer look with your bedroom mirror.";
                    }
                    else if (!Core_1.CoreUtils.hasPlayed("Arise from daze")) {
                        result = "You're a guy, but the computer needs you going out as <<print $player.heirName >>. You have no choice.";
                    }
                    else if (PlayerModel_1.PlayerModel.looksLikeAGirl()) {
                        result = "";
                    }
                    else if (PlayerModel_1.PlayerModel.checkClothingTolerance() >= 2) {
                        result = "Recent experiences have made you bolder. It's still not easy, but you feel comfortable with presenting yourself in this outfit. ";
                    }
                    else {
                        result =
                            "Going out as a girl was too overwhelming. It's too easy for someone to catch on. One panic attack blackout is more than enough for you. If you need to go out, you want to do it with normal clothes.";
                    }
                }
            }
            return result;
        }
        static getInnerDoorPageName() {
            if (Core_1.CoreUtils.hasPlayed("Inner chamber") && OutfitsAnalyser_1.OutfitsAnalyser.describeCurrentOutfit().isAllWomanOutfit) {
                return "Press Button for inner door 5";
            }
            switch (OutfitsAnalyser_1.OutfitsAnalyser.describeCurrentOutfit().yogaRating) {
                case 0:
                    return "Press Button for inner door";
                case 1:
                    return "Press Button for inner door 2";
                case 2:
                    return "Press Button for inner door 3";
                case 3:
                    return "Press Button for inner door 4";
                default:
                    return "Press Button for inner door 5";
            }
        }
    }
    exports.HousePolicy = HousePolicy;
});
