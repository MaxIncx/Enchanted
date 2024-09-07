(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Items", "./Slot", "../ItemGenerators/ItemNouns"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Clothing = void 0;
    const Items_1 = require("./Items");
    const Slot_1 = require("./Slot");
    const ItemNouns_1 = require("../ItemGenerators/ItemNouns");
    /**
     * Provides operations for recognizing and interacting with Clothing items.
     */
    class Clothing {
        static wear(itemId, force = false) {
            const item = Items_1.Items.get(itemId);
            if (!Clothing.isClothing(itemId)) {
                console.error("item is not wearable");
            }
            if (item && item.slots) {
                //Test for removal. Cancel if blocked
                for (let i = 0; i < item.slots.length; i++) {
                    const slotName = item.slots[i];
                    const oldItem = Slot_1.Slot.get(slotName);
                    if (oldItem != null && !Clothing.canRemove(oldItem) && !force) {
                        return;
                    }
                }
                for (let i = 0; i < item.slots.length; i++) {
                    const slotName = item.slots[i];
                    const oldItem = Slot_1.Slot.get(slotName);
                    if (oldItem != null) {
                        Clothing.remove(oldItem);
                    }
                    Slot_1.Slot.set(slotName, itemId);
                }
            }
            else {
                console.error("Item not in inventory for wearing:" + itemId);
            }
        }
        static canRemove(itemId) {
            const item = Items_1.Items.get(itemId);
            if (item && item.slots) {
                if (item.canNotRemove) {
                    return false;
                }
                else if (item.slots != null) {
                    return true;
                }
            }
            return false;
        }
        static remove(itemId) {
            const item = Items_1.Items.get(itemId);
            if (!Clothing.isClothing(itemId)) {
                console.error("item is not wearable");
            }
            if (item.canNotRemove) {
                return;
            }
            if (item && item.slots) {
                for (let i = 0; i < item.slots.length; i++) {
                    const slotName = item.slots[i];
                    Slot_1.Slot.clear(slotName);
                }
            }
            else {
                console.error("Item not in inventory for wearing:" + itemId);
            }
        }
        static isClothing(itemId) {
            const item = Items_1.Items.get(itemId);
            return item.type == "clothing";
        }
        static isWearing(itemId) {
            const item = Items_1.Items.get(itemId);
            if (item && item.slots) {
                let hasItem = true;
                for (let i = 0; i < item.slots.length; i++) {
                    const slotName = item.slots[i];
                    hasItem = hasItem && Slot_1.Slot.get(slotName) == itemId;
                }
                return hasItem;
            }
            return false;
        }
        static selectItems(isMatch) {
            return Items_1.Items.selectItems((item) => {
                return Clothing.isClothing(item.id) && isMatch(item);
            });
        }
        static isUnderGarment(item) {
            return (item.slots.indexOf(ItemNouns_1.clothingSlots.underwear) >= 0 ||
                item.slots.indexOf(ItemNouns_1.clothingSlots.penis) >= 0 ||
                item.slots.indexOf(ItemNouns_1.clothingSlots.bra) >= 0 ||
                item.slots.indexOf(ItemNouns_1.clothingSlots.ass) >= 0);
        }
    }
    exports.Clothing = Clothing;
});
