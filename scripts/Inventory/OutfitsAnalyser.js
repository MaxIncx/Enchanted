(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./MirrorUX", "./IItem", "./Clothing", "./Items", "../ItemGenerators/ItemNouns", "./Outfits", "./Slot", "./Slots", "../Player/PlayerModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLabelableOutfitContexts = exports.getvisibleOutfitContexts = exports.emojifyOutFitContext = exports.OutfitsAnalyser = void 0;
    const MirrorUX_1 = require("./MirrorUX");
    const IItem_1 = require("./IItem");
    const Clothing_1 = require("./Clothing");
    const Items_1 = require("./Items");
    const ItemNouns_1 = require("../ItemGenerators/ItemNouns");
    const Outfits_1 = require("./Outfits");
    const Slot_1 = require("./Slot");
    const Slots_1 = require("./Slots");
    const PlayerModel_1 = require("../Player/PlayerModel");
    /**
     * Manages persistence of outfits
     * (Representation only. No UI/Experience Code)
     */
    class OutfitsAnalyser {
        static isValid(explanation) {
            let valid = true;
            for (let i = 0; i < explanation.length; i++) {
                valid && (valid = explanation[i].meetsCriteria);
            }
            return valid;
        }
        static isCosplay() {
            return OutfitsAnalyser.isValid(OutfitsAnalyser.describeCurrentOutfit().assessments["cosplayInBoyClothes"]);
        }
        static describeCurrentOutfit() {
            try {
                const items = Slot_1.Slot.getAllContents();
                const extendedDescription = {
                    ...OutfitsAnalyser.describeOutfit(items),
                    yogaRating: OutfitsAnalyser.getYogaRating(),
                    isDecentOutfit: OutfitsAnalyser.isDecentOutfit(),
                    isNotNakedOutfit: OutfitsAnalyser.isNotNakedOutfit(),
                    isAllWomanOutfit: OutfitsAnalyser.isAllWomanOutfit(),
                    isAllMaleOutfit: OutfitsAnalyser.isAllMaleOutfit(),
                    isAllWomenClothing: OutfitsAnalyser.isAllWomenClothing(),
                };
                return extendedDescription;
            }
            catch (exception) {
                throw exception;
            }
        }
        static describeOutfit(outfitItems) {
            const mappedOutfit = Outfits_1.Outfits.packOutfit(outfitItems);
            const outfitDescription = {
                assessments: {
                    fitness: OutfitsAnalyser.checkOutfit(mappedOutfit, OutfitsAnalyser.makeFilters("fitness")),
                    casual: OutfitsAnalyser.checkOutfit(mappedOutfit, OutfitsAnalyser.makeFilters("casual")),
                    sleeping: OutfitsAnalyser.checkOutfit(mappedOutfit, OutfitsAnalyser.makeFilters("sleeping")),
                    "open-water-swimming": OutfitsAnalyser.checkOutfit(mappedOutfit, OutfitsAnalyser.makeFilters("open-water-swimming")),
                    swimming: OutfitsAnalyser.checkOutfit(mappedOutfit, OutfitsAnalyser.makeFilters("swimming")),
                    officeWork: OutfitsAnalyser.checkOutfit(mappedOutfit, OutfitsAnalyser.makeFilters("officeWork")),
                    cosplayInBoyClothes: OutfitsAnalyser.checkOutfit(mappedOutfit, OutfitsAnalyser.makeFilters("cosplayInBoyClothes")),
                    casualMale: OutfitsAnalyser.checkOutfit(mappedOutfit, OutfitsAnalyser.makeFilters("casualMale")),
                    feminineOutfit: OutfitsAnalyser.checkOutfit(mappedOutfit, OutfitsAnalyser.makeFilters("feminineOutfit")),
                },
            };
            return outfitDescription;
        }
        static describeOutfitByName(outfitName) {
            const outfit = Outfits_1.Outfits.getOutfit(outfitName);
            return OutfitsAnalyser.describeOutfit(outfit.items);
        }
        static checkContext(item, context) {
            return item != null && item.contextual != null && (item.contextual.indexOf(context) >= 0 || item.contextual.indexOf("allPurpose") >= 0);
        }
        static getYogaRating() {
            let outfitLevel = 0;
            if (!MirrorUX_1.MirrorUX.isWearing("black-thong") || !MirrorUX_1.MirrorUX.isWearing("stacy-bra") || !MirrorUX_1.MirrorUX.isWearing("tank-top") || !MirrorUX_1.MirrorUX.isWearing("yoga-pants")) {
                outfitLevel = 0;
            }
            else if (!MirrorUX_1.MirrorUX.isWearing("blonde-wig") || !MirrorUX_1.MirrorUX.isWearing("first-heels") || MirrorUX_1.MirrorUX.isWearing("mens-white-socks")) {
                outfitLevel = 1;
            }
            else if (!PlayerModel_1.PlayerModel.isWearingMakeup()) {
                outfitLevel = 2;
            }
            else if (!MirrorUX_1.MirrorUX.isWearing("ring-gaff")) {
                outfitLevel = 3;
            }
            else {
                outfitLevel = 10;
            }
            return outfitLevel;
        }
        static isNotNakedOutfit() {
            const check = (slotName) => {
                return Slot_1.Slot.getSlotItem(slotName) != null;
            };
            return check(ItemNouns_1.clothingSlots.underwear) && check(ItemNouns_1.clothingSlots.bra);
        }
        static isDecentOutfit() {
            const check = (slotName) => {
                return Slot_1.Slot.getSlotItem(slotName) != null;
            };
            return (check(ItemNouns_1.clothingSlots.feet) &&
                check(ItemNouns_1.clothingSlots.waist) &&
                check(ItemNouns_1.clothingSlots.underwear) &&
                check(ItemNouns_1.clothingSlots.top) &&
                (check(ItemNouns_1.clothingSlots.bra) || !PlayerModel_1.PlayerModel.needsBra()));
        }
        static isUnderGarment(item) {
            return (item.slots.indexOf(ItemNouns_1.clothingSlots.underwear) >= 0 ||
                item.slots.indexOf(ItemNouns_1.clothingSlots.penis) >= 0 ||
                item.slots.indexOf(ItemNouns_1.clothingSlots.bra) >= 0 ||
                item.slots.indexOf(ItemNouns_1.clothingSlots.ass) >= 0);
        }
        static isAllWomenClothing() {
            return MirrorUX_1.MirrorUX.doesOutfitSatisfyTest((item) => {
                return item.isFeminine || (item.slots != null && Clothing_1.Clothing.isUnderGarment(item));
            });
        }
        static isAllWomanOutfit() {
            let result = OutfitsAnalyser.isAllWomenClothing();
            result && (result = PlayerModel_1.PlayerModel.isWearingMakeup());
            result && (result = Slot_1.Slot.getSlotItem(ItemNouns_1.clothingSlots.head) != null || PlayerModel_1.PlayerModel.hasGirlyHair());
            return result;
        }
        static isAllMaleOutfit() {
            const result = MirrorUX_1.MirrorUX.doesOutfitSatisfyTest((item) => {
                return !item.isFeminine || (item.slots != null && Clothing_1.Clothing.isUnderGarment(item));
            }) && !PlayerModel_1.PlayerModel.isWearingMakeup();
            return result;
        }
        static isFemAthleticOutfit() {
            const check = (slotName) => {
                const itemName = Slot_1.Slot.get(slotName);
                const item = Items_1.Items.get(itemName);
                const isValid = item != null && item.contextual != null && item.contextual.indexOf("fitness") >= 0 && item.isFeminine == true;
                return isValid;
            };
            const result = check(ItemNouns_1.clothingSlots.feet) && check(ItemNouns_1.clothingSlots.hosiery) && check(ItemNouns_1.clothingSlots.waist) && check(ItemNouns_1.clothingSlots.top);
            return result;
        }
        static doesOutfitSatisfyTest(test) {
            return (Slots_1.Slots.getAll()
                .map((slot) => {
                const itemName = Slot_1.Slot.get(slot);
                if (itemName != null) {
                    const item = Items_1.Items.get(itemName);
                    return test(item);
                }
                return true;
            })
                .findIndex((result) => {
                return result == false;
            }) < 0);
        }
        static makeOutfitFilter(slots, activeDescription, defaultDescription = null) {
            const description = {};
            const defaultSlots = Slots_1.Slots.getAll();
            for (let i = 0; i < defaultSlots.length; i++) {
                description[defaultSlots[i]] = defaultDescription;
            }
            for (let i = 0; i < slots.length; i++) {
                description[slots[i]] = activeDescription;
            }
            return description;
        }
        static makeFemaleOutfitFilter(slots, activeDescription, defaultDescription = null) {
            const description = {};
            const defaultSlots = Slots_1.Slots.getAll();
            for (let i = 0; i < defaultSlots.length; i++) {
                description[defaultSlots[i]] = defaultDescription;
            }
            if (!PlayerModel_1.PlayerModel.hasGirlyHair()) {
                description[ItemNouns_1.clothingSlots.head] = activeDescription;
            }
            for (let i = 0; i < slots.length; i++) {
                description[slots[i]] = activeDescription;
            }
            return description;
        }
        static makeFilters(identifier) {
            let slotFilter = {};
            let targetSlots = [];
            if (identifier == "casualMale") {
                slotFilter = { context: "casual", expectMale: true };
                targetSlots = [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.feet];
                const defaultFilter = { expectMale: false };
                const description = OutfitsAnalyser.makeOutfitFilter(targetSlots, slotFilter, defaultFilter);
                description[ItemNouns_1.clothingSlots.head] = { expectMale: true };
                description[ItemNouns_1.clothingSlots.bra] = {};
                description[ItemNouns_1.clothingSlots.underwear] = { context: "casual" };
                return description;
            }
            else if (identifier == "cosplayInBoyClothes") {
                slotFilter = { context: "casual", expectMale: true };
                targetSlots = [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.underwear, ItemNouns_1.clothingSlots.hosiery, ItemNouns_1.clothingSlots.feet];
                const defaultFilter = { expectMale: false };
                const description = OutfitsAnalyser.makeOutfitFilter(targetSlots, slotFilter, defaultFilter);
                description[ItemNouns_1.clothingSlots.head] = { expectMale: true };
                description[ItemNouns_1.clothingSlots.bra] = { context: "casual" };
                description[ItemNouns_1.clothingSlots.underwear] = { context: "casual" };
                return description;
            }
            let defaultFilter = { allowEmpty: true, expectFemale: true };
            if (identifier != "feminineOutfit" && identifier != "sleeping" && identifier != "open-water-swimming") {
                defaultFilter = { allowEmpty: true, expectFemale: true, context: identifier };
            }
            if (identifier == "fitness") {
                slotFilter = { context: identifier, expectFemale: true };
                targetSlots = [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.bra, ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.underwear, ItemNouns_1.clothingSlots.hosiery, ItemNouns_1.clothingSlots.feet];
            }
            else if (identifier == "officeWork") {
                slotFilter = { context: identifier, expectFemale: true };
                targetSlots = [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.hosiery, ItemNouns_1.clothingSlots.feet];
            }
            else if (identifier == "casual") {
                slotFilter = { context: identifier, expectFemale: true };
                targetSlots = [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.feet];
            }
            else if (identifier == "sleeping") {
                slotFilter = { context: identifier, expectFemale: true };
                targetSlots = [ItemNouns_1.clothingSlots.underwear, ItemNouns_1.clothingSlots.bra];
            }
            else if (identifier == "swimming") {
                slotFilter = { context: identifier, expectFemale: true };
                targetSlots = [ItemNouns_1.clothingSlots.underwear, ItemNouns_1.clothingSlots.bra];
            }
            else if (identifier == "open-water-swimming") {
                slotFilter = { context: "swimming", expectFemale: true };
                targetSlots = [ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.top];
                defaultFilter = { allowEmpty: true, expectFemale: true, context: "swimming" };
            }
            else if (identifier == "feminineOutfit") {
                slotFilter = {};
                targetSlots = [];
            }
            const description = OutfitsAnalyser.makeFemaleOutfitFilter(targetSlots, slotFilter, defaultFilter);
            return description;
        }
        static labelWarning(message) {
            return `<span class="outfit-error">${message}</span>`;
        }
        static checkItem(slotName, actual, expected) {
            const explanation = {
                explanation: "",
                meetsCriteria: true,
                slot: slotName,
            };
            if (expected == null) {
                explanation.ignore = true;
                explanation.explanation = "Nothing required\n";
                explanation.meetsCriteria = true;
                return explanation;
            }
            let singularNoun = "";
            if (actual != null) {
                singularNoun = ItemNouns_1.getSingularNoun(actual.pluralNoun);
                explanation.itemId = actual.id;
            }
            if (expected.context != null) {
                if ((actual == null || actual.contextual == null) && !expected.allowEmpty) {
                    explanation.explanation += OutfitsAnalyser.labelWarning(`Expected clothing suited for ${expected.context} wear, but found nothing in ${slotName}.\n`);
                    explanation.meetsCriteria = false;
                }
                else {
                    if (expected.allowEmpty && (actual == null || actual.contextual == null)) {
                        explanation.explanation += `Additional attire suitable for ${expected.context} wear is optional for ${slotName}, but not required.\n`;
                    }
                    else if (actual.contextual.indexOf(expected.context) >= 0 && expected.context != "allPurpose") {
                        explanation.explanation += `Expected an item suited for ${expected.context} wear.\n`;
                    }
                    else if (actual.contextual.indexOf("allPurpose") >= 0) {
                        explanation.explanation += `This ${singularNoun} is quite versatile. You feel you can use it for ${expected.context}.\n`;
                    }
                    else {
                        explanation.explanation += OutfitsAnalyser.labelWarning(`Expected an item for ${expected.context} wear.\n `);
                        explanation.meetsCriteria = false;
                    }
                }
            }
            if (expected.expectEmpty) {
                if (actual == null) {
                    explanation.explanation += `No item for ${slotName} is expected .\n`;
                }
                else {
                    if (actual.contextual.indexOf("allPurpose") >= 0) {
                        explanation.explanation += `Any item would be fine for ${slotName}.\n`;
                    }
                    else {
                        explanation.explanation += OutfitsAnalyser.labelWarning(`No item should be worn on ${slotName}. Remove your ${singularNoun} .\n`);
                        explanation.meetsCriteria = false;
                    }
                }
            }
            if (expected.expectFemale) {
                if (actual == null) {
                    if (expected.context == null) {
                        explanation.explanation += `No item for a ${slotName} is ok for a feminine look.\n`;
                    }
                    else {
                        if (!expected.allowEmpty) {
                            explanation.explanation += OutfitsAnalyser.labelWarning(`An item for ${slotName} is required for a feminine look.\n`);
                            explanation.meetsCriteria = false;
                        }
                    }
                }
                else if (actual.isFeminine) {
                    explanation.explanation += `The ${singularNoun} is fine for a feminine look.\n`;
                }
                else {
                    explanation.explanation += OutfitsAnalyser.labelWarning(`The ${singularNoun} does not fit a feminine look.\n`);
                    explanation.meetsCriteria = false;
                }
            }
            if (expected.expectMale) {
                if (actual == null) {
                    if (expected.context == null) {
                        explanation.explanation += `No item for a ${slotName} is ok for a masculine look.\n`;
                    }
                    else {
                        explanation.explanation += OutfitsAnalyser.labelWarning(`An item for ${slotName} is required for a masculine look.\n`);
                    }
                }
                else if (!actual.isFeminine) {
                    explanation.explanation += `The ${singularNoun} is fine for a masculine look.\n`;
                }
                else {
                    explanation.explanation += OutfitsAnalyser.labelWarning(`The ${singularNoun} does not fit a masculine look.\n`);
                    explanation.meetsCriteria = false;
                }
            }
            return explanation;
        }
        static checkOutfit(mappedOutfit, expectedOutfit) {
            const slots = Slots_1.Slots.getAll().map((slotName) => {
                const actual = mappedOutfit[slotName];
                const expected = expectedOutfit[slotName];
                return this.checkItem(slotName, actual, expected);
            });
            return slots;
        }
    }
    exports.OutfitsAnalyser = OutfitsAnalyser;
    function emojifyOutFitContext(context) {
        let ccon;
        switch (context) {
            case "open-water-swimming":
                ccon = "swimming";
                break;
            case "cosplayInBoyClothes":
                ccon = "casual";
                break;
            case "casualMale":
                ccon = "casual";
                break;
            case "feminineOutfit":
                ccon = "casual";
                break;
            case "officeWork":
                ccon = "officeWork";
                break;
            default:
                ccon = context;
        }
        const result = IItem_1.emojifyContext(ccon);
        return result;
    }
    exports.emojifyOutFitContext = emojifyOutFitContext;
    function getvisibleOutfitContexts() {
        const maleItem = PlayerModel_1.PlayerModel.looksLikeAGirl() ? "cosplayInBoyClothes" : "casualMale";
        return [maleItem, "casual", "fitness", "sleeping", "swimming", "officeWork"];
    }
    exports.getvisibleOutfitContexts = getvisibleOutfitContexts;
    function getLabelableOutfitContexts() {
        const maleItem = PlayerModel_1.PlayerModel.looksLikeAGirl() ? "cosplayInBoyClothes" : "casualMale";
        return [maleItem, "casual", "fitness", "sleeping", "swimming", "open-water-swimming", "officeWork"];
    }
    exports.getLabelableOutfitContexts = getLabelableOutfitContexts;
});
