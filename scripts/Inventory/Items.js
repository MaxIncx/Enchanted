(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Images/Images"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Items = void 0;
    const Images_1 = require("../Images/Images");
    class Items {
        static get(itemId) {
            return Items.itemsDefinitions[itemId];
        }
        static setItems(items) {
            Items.itemsDefinitions = items;
            for (const index in items) {
                items[index].id = index;
            }
        }
        /* Get all items which match*/
        static selectItems(isMatch) {
            const items = Items.itemsDefinitions;
            const itemsArray = [];
            for (const index in items) {
                itemsArray.push(items[index]);
            }
            return itemsArray.filter(isMatch);
        }
        static renderItem(itemId, className) {
            return Images_1.Images.drawItemById(itemId, className);
        }
    }
    exports.Items = Items;
});
