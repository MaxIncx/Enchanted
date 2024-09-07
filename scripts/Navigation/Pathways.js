(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Exercises/TriathlonExercise", "../Inventory/OutfitsAnalyser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pathways = exports.Locations = void 0;
    const Core_1 = require("../Core");
    const TriathlonExercise_1 = require("../Exercises/TriathlonExercise");
    const OutfitsAnalyser_1 = require("../Inventory/OutfitsAnalyser");
    class Locations {
    }
    exports.Locations = Locations;
    Locations.GrandHallway = "Grand Hallway";
    Locations.InnerChamber = "Inner chamber";
    Locations.Console = "Use console";
    Locations.Pod = "Pod";
    Locations.YourBedroom = "Your Bedroom";
    Locations.RetailStrip = "Retail Strip";
    Locations.BaldricHouse = "Baldric House";
    Locations.CentralMall = "Central Mall";
    Locations.Triathlon = "Join for Triathlon Session";
    Locations.BalletStudio = "Ballet Studio";
    Locations.FitnessRoom = "Fitness room";
    class Pathways {
        static makeJumpLink(source, destination) {
            let result;
            if (Pathways.canGo(source, destination)) {
                result = `<a class="jump-link" onClick="SugarCube.getLib().Pathways.go('${source}', '${destination}');">(⏭️ ${destination})</a>`;
            }
            else {
                result = "";
            }
            return result;
        }
        static canGo(source, destination) {
            const description = OutfitsAnalyser_1.OutfitsAnalyser.describeCurrentOutfit();
            if ((source == Locations.GrandHallway || source == Locations.YourBedroom || source == Locations.FitnessRoom) && destination == Locations.InnerChamber) {
                return Core_1.CoreUtils.hasPlayed("Inner chamber") && OutfitsAnalyser_1.OutfitsAnalyser.describeCurrentOutfit().isAllWomanOutfit;
            }
            else if (source == Locations.InnerChamber && (destination == Locations.GrandHallway || destination == Locations.YourBedroom || destination == Locations.FitnessRoom)) {
                return true;
            }
            else if (source == Locations.Pod && destination == Locations.InnerChamber) {
                return Core_1.CoreUtils.hasPlayed("Open Omni-pod door");
            }
            else if (source == Locations.InnerChamber && destination == Locations.Pod) {
                return Core_1.CoreUtils.hasPlayed("Close Omni-pod Door");
            }
            else if (source == Locations.BaldricHouse && destination == Locations.CentralMall) {
                return Core_1.CoreUtils.hasPlayed(Locations.CentralMall) && description.isAllWomanOutfit;
            }
            else if (source == Locations.CentralMall && destination == Locations.BaldricHouse) {
                return description.isAllWomanOutfit;
            }
            else if (destination == Locations.Triathlon) {
                return TriathlonExercise_1.TriathlonExercise.canDoTriathlonToday();
            }
            else if (source == Locations.FitnessRoom && destination == Locations.BalletStudio) {
                return description.isDecentOutfit && Core_1.CoreUtils.hasPlayed(destination);
            }
            else {
                return Core_1.CoreUtils.hasPlayed(destination);
            }
        }
        //Used by html from makeJumpLink
        static go(source, destination) {
            if (Pathways.canGo(source, destination)) {
                const variables = Core_1.CoreUtils.getVariables();
                if ((source == Locations.GrandHallway || source == Locations.YourBedroom || source == Locations.FitnessRoom) && destination == Locations.InnerChamber) {
                    variables.innerDoorUnlocked = true;
                }
                else if (source == Locations.InnerChamber &&
                    (destination == Locations.GrandHallway || destination == Locations.YourBedroom || destination == Locations.FitnessRoom)) {
                    variables.innerDoorUnlocked = false;
                }
                if (source == Locations.Pod && destination == Locations.InnerChamber) {
                    variables.omniPodDoorClosed = false;
                }
                else if (source == Locations.InnerChamber && destination == Locations.Pod) {
                    variables.omniPodDoorClosed = true;
                }
                if (source == Locations.Pod && destination == Locations.Console) {
                    variables.omniPodDoorClosed = false;
                }
                else if (source == Locations.Console && destination == Locations.Pod) {
                    variables.omniPodDoorClosed = true;
                }
                Core_1.CoreUtils.playPassage(destination);
            }
        }
    }
    exports.Pathways = Pathways;
});
