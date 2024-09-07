(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../ItemGenerators/ItemNouns", "./Items", "./Inventory", "../Images/Images", "../Link", "../Player/PlayerModel", "./Clothing", "./MirrorUX", "./FilterUX"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StoreUX = void 0;
    const Core_1 = require("../Core");
    const ItemNouns_1 = require("../ItemGenerators/ItemNouns");
    const Items_1 = require("./Items");
    const Inventory_1 = require("./Inventory");
    const Images_1 = require("../Images/Images");
    const Link_1 = require("../Link");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Clothing_1 = require("./Clothing");
    const MirrorUX_1 = require("./MirrorUX");
    const FilterUX_1 = require("./FilterUX");
    /** Houses code for Store Policy & Store Presentation - Namely presenters of sellable inventory. */
    class StoreUX {
        static renderFreeCarousel(store, slot) {
            const noCharge = true;
            const filteredItems = Items_1.Items.selectItems((item) => {
                return item.store == store;
            });
            let result = "<div>";
            for (let i = 0; i < filteredItems.length; i++) {
                const item = filteredItems[i];
                if (item.slots && item.slots.indexOf(slot) >= 0 && !Inventory_1.Inventory.has(item.id)) {
                    result += StoreUX.renderItem(item, noCharge);
                }
            }
            result += "</div>";
            return result;
        }
        static renderCarousel(store, isTest = false) {
            let filteredItems = Clothing_1.Clothing.selectItems((item) => {
                return item.store == store && !Inventory_1.Inventory.has(item.id);
            });
            var filterModel = new FilterUX_1.FilterModel(filteredItems);
            filteredItems = filterModel.filteredItems;
            const sortedItems = filteredItems.sort(ItemNouns_1.getSortRank);
            const grouper = (item) => {
                if (item == null) {
                    debugger;
                }
                return item.pluralNoun;
            };
            const itemGroups = Core_1.CoreUtils.groupBy(grouper, sortedItems);
            let result = "<div>";
            result += FilterUX_1.FilterUX.RenderFilters(filteredItems);
            for (const key in itemGroups) {
                result += "<div>";
                const group = itemGroups[key];
                result += FilterUX_1.FilterUX.RenderFilterLink(group, key, filterModel.typeValue);
                result += `<div class="item-indent">`;
                for (let i = 0; i < group.length; i++) {
                    result += StoreUX.renderItem(group[i], false, isTest);
                }
                result += "</div>";
                result += "</div>";
            }
            result += "</div>";
            return result;
        }
        static renderItem(item, noCharge = false, isTest = false) {
            let result = "";
            result += `<div class="shop-item ${item.id}">`;
            if (item.image) {
                //result += Images.drawItem(item.image, "shop-item-image zoom");
                result += MirrorUX_1.MirrorUX.drawItemWithOverlay(item.id, "shop-item-image zoom");
            }
            else {
                result += Images_1.Images.drawNothingItem("shop-item-image zoom");
            }
            if (item.price && item.price > 0) {
                const basePrice = item.price;
                let yourPrice = item.price;
                if (noCharge) {
                    yourPrice = 0;
                }
                result += `<div class="shop-item-price" >price: `;
                if (yourPrice != basePrice) {
                    result += `<span class="strikethrough">$${basePrice}</span>`;
                }
                result += `$${yourPrice}`;
                result += `</div>`;
            }
            if (!isTest) {
                if (noCharge) {
                    result += StoreUX.receieveItemLink(item.id, "Get Socks");
                }
                else {
                    if (Store.canBuyItem(item.id)) {
                        result += StoreUX.buyItemLink(item.id, "shop-item-buy");
                    }
                    else {
                        result += `<div title="${Store.buyExplanation(item.id)}">buy</div>`;
                    }
                }
            }
            result += `</div> `;
            return result;
        }
        static buyItemLink(itemId, className) {
            const script = `SugarCube.getLib().StoreUX.buyItem('${itemId}'); SugarCube.getLib().CoreUtils.playPassage()`;
            return Link_1.makeLink("Buy", script, className);
        }
        static receieveItemLink(itemId, passageName) {
            const script = `SugarCube.getLib().Inventory.add('${itemId}'); SugarCube.Engine.play('${passageName}');`;
            return Link_1.makeLink("Accept", script, `shop-item ${itemId}`);
        }
        static buyItem(itemId) {
            Store.buyItem(itemId);
        }
    }
    exports.StoreUX = StoreUX;
    /**
     * Internal Model for Store.
     */
    class Store {
        static buyExplanation(itemId) {
            const item = Items_1.Items.get(itemId);
            if (item.price == null || PlayerModel_1.PlayerModel.hasMoney(item.price)) {
                return "";
            }
            return "You can't afford it.";
        }
        static canBuyItem(itemId) {
            const item = Items_1.Items.get(itemId);
            if (item.price == null || PlayerModel_1.PlayerModel.hasMoney(item.price)) {
                return true;
            }
            return false;
        }
        static buyItem(itemId) {
            const item = Items_1.Items.get(itemId);
            if (Store.canBuyItem(itemId)) {
                if (item.price != null) {
                    PlayerModel_1.PlayerModel.deductMoney(item.price);
                }
                Inventory_1.Inventory.add(itemId);
            }
        }
    }
});
