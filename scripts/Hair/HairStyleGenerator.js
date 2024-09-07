(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getHairStyleDefinitions = void 0;
    function mapHairColor(hairColor, item) {
        const color = hairColor;
        const id = item.id + (hairColor ? "_" + color : "");
        return Object.assign({}, item, {
            id: id,
            color: hairColor ? color : item.color,
            shiftCss: hairColor ? `brown-to-${color}` : undefined,
            isAlternateColor: hairColor ? true : false,
        });
    }
    function appendItem(dictionary, item) {
        if (item.color == "brown") {
            const colorshifts = ["black", "silver", "darkbrown", null, "blonde", "maroon", "blue", "bluegreen", "purple"];
            colorshifts.forEach((color) => {
                const hairstyle = mapHairColor(color, item);
                dictionary[hairstyle.id] = hairstyle;
            });
        }
        else {
            dictionary[item.id] = item;
        }
    }
    function getHairStyleDefinitions() {
        const itemDefinitions = {};
        //https://en.wikipedia.org/wiki/List_of_hairstyles
        appendItem(itemDefinitions, { id: "legacy", color: "blonde", length: "chin", style: "legacy", isLegacy: true, isAlternateColor: false });
        appendItem(itemDefinitions, { id: "hair-ear-brown-1", color: "brown", length: "ear", style: "Bieber/Pixie" });
        appendItem(itemDefinitions, { id: "hair-ear-brown-2", color: "brown", length: "ear", style: "Bangs" });
        appendItem(itemDefinitions, { id: "hair-ear-brown-3", color: "brown", length: "ear", style: "Bob" });
        appendItem(itemDefinitions, { id: "hair-ear-brown-4", color: "brown", length: "ear", style: "Bob", isAlternateColor: true });
        appendItem(itemDefinitions, { id: "hair-chin-brown-1", color: "brown", length: "chin", style: "Rachel" });
        appendItem(itemDefinitions, { id: "hair-chin-blonde-1", color: "blonde", length: "chin", style: "Rachel", isAlternateColor: true });
        appendItem(itemDefinitions, { id: "hair-chin-brown-2", color: "brown", length: "chin", style: "Sharp groomed" });
        appendItem(itemDefinitions, { id: "hair-chin-brown-3", color: "brown", length: "chin", style: "Long bob" });
        appendItem(itemDefinitions, { id: "hair-shoulder-brown-2", color: "brown", length: "shoulder", style: "Wavy-Shoulder" });
        appendItem(itemDefinitions, { id: "hair-shoulder-multi-2", color: "multi", length: "shoulder", style: "Wavy-Shoulder", isAlternateColor: true });
        appendItem(itemDefinitions, { id: "hair-armpit-brown-1", color: "brown", length: "armpit", style: "asymmetric-right" });
        appendItem(itemDefinitions, { id: "hair-armpit-brown-2", color: "brown", length: "armpit", style: "Symmetric" });
        return itemDefinitions;
    }
    exports.getHairStyleDefinitions = getHairStyleDefinitions;
});
