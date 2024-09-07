(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "./Items"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Inventory = void 0;
    const Core_1 = require("../Core");
    const Items_1 = require("./Items");
    /**
     * Encapsulates core implementation an inventory pool.
     */
    class Inventory {
        static init() {
            Inventory.clear();
        }
        static add(itemId) {
            if (!Inventory.has(itemId)) {
                Core_1.CoreUtils.getVariables().inventory.push(itemId);
            }
        }
        static remove(itemId) {
            const index = Core_1.CoreUtils.getVariables().inventory.indexOf(itemId);
            if (index >= 0) {
                Core_1.CoreUtils.getVariables().inventory.splice(index, 1);
            }
        }
        static clear() {
            Core_1.CoreUtils.getVariables().inventory = [];
        }
        static has(item) {
            return Core_1.CoreUtils.getVariables().inventory.indexOf(item) >= 0;
        }
        static getItemIds() {
            return Core_1.CoreUtils.getVariables().inventory;
        }
        static getItems() {
            const items = Core_1.CoreUtils.getVariables().inventory;
            const itemsMap = items.map((itemId) => Items_1.Items.get(itemId));
            return itemsMap;
        }
    }
    exports.Inventory = Inventory;
});
