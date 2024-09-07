(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "./Slots", "./Items"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Slot = void 0;
    const Core_1 = require("../Core");
    const Slots_1 = require("./Slots");
    const Items_1 = require("./Items");
    /**
     * Describes the content of inventory slots
     * (Representation only. No UI/Experience Code)
     */
    class Slot {
        static get(slot) {
            Slots_1.Slots.ensureExists(slot);
            const slotItem = Core_1.CoreUtils.getVariables().slots[slot];
            return slotItem;
        }
        static getSlotItem(slot) {
            const itemName = Slot.get(slot);
            const item = Items_1.Items.get(itemName);
            return item;
        }
        static set(slot, item) {
            Slots_1.Slots.ensureExists(slot);
            Core_1.CoreUtils.getVariables().slots[slot] = item;
        }
        static clear(slot) {
            Slots_1.Slots.ensureExists(slot);
            delete Core_1.CoreUtils.getVariables().slots[slot];
        }
        /** Get the item names occupied by the slots. */
        static getAllContents() {
            const slots = Slots_1.Slots.getAll();
            const slotContents = [];
            for (let i = 0; i < slots.length; i++) {
                const slotContent = Slot.get(slots[i]);
                if (slotContent != null && slotContents.indexOf(slotContent) < 0) {
                    slotContents.push(slotContent);
                }
            }
            return slotContents;
        }
    }
    exports.Slot = Slot;
});
