(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Link", "../Player/PlayerModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FilterUX = exports.FilterModel = void 0;
    const Core_1 = require("../Core");
    const Link_1 = require("../Link");
    const PlayerModel_1 = require("../Player/PlayerModel");
    class FilterModel {
        constructor(inFilteredItems) {
            this.filteredItems = inFilteredItems;
            const isSamePage = Core_1.CoreUtils.isOnSamePageAsBefore();
            this.typeValue = undefined;
            if (!isSamePage) {
                PlayerModel_1.PlayerModel.resetViewFilter();
            }
            else {
                let slotValue = PlayerModel_1.PlayerModel.getViewFilter(FilterUX.slotFilter);
                let contextValue = PlayerModel_1.PlayerModel.getViewFilter(FilterUX.contextFilter);
                this.typeValue = PlayerModel_1.PlayerModel.getViewFilter(FilterUX.typeFilter);
                if (slotValue != undefined) {
                    let slot = slotValue;
                    this.filteredItems = this.filteredItems.filter((item) => {
                        return (item.slots.findIndex((item) => {
                            return item === slot;
                        }) >= 0);
                    });
                }
                if (contextValue != undefined) {
                    let context = contextValue;
                    this.filteredItems = this.filteredItems.filter((item) => {
                        return (item.contextual.findIndex((item) => {
                            return item === context;
                        }) >= 0);
                    });
                }
                if (this.typeValue != undefined) {
                    this.filteredItems = this.filteredItems.filter((item) => {
                        return this.typeValue === item.pluralNoun;
                    });
                }
            }
        }
    }
    exports.FilterModel = FilterModel;
    class FilterUX {
        static ApplyFilters(filteredItems) { }
        static RenderFilterLink(group, key, typeValue) {
            var result = "";
            if (group.length > 0) {
                let filterLink = typeValue == key ? FilterUX.makeTypeFilterLink("Clear Filter", undefined) : FilterUX.makeTypeFilterLink("🔎", key);
                result += `<div class="item-group">${key} ${filterLink}</div>`;
            }
            return result;
        }
        static RenderFilters(filteredItems) {
            let slotSet = FilterUX.PackSlotSet(filteredItems);
            let contextSet = FilterUX.PackContextSet(filteredItems);
            var result = "";
            result += "<div>Filter Content:</div>";
            result += FilterUX.AddFilterSlots(slotSet);
            result += FilterUX.AddContextSlots(contextSet);
            return result;
        }
        static PackSlotSet(filteredItems) {
            var slotSet = new Set();
            for (const key in filteredItems) {
                let itemSlots = filteredItems[key].slots;
                for (const k in itemSlots) {
                    slotSet.add(itemSlots[k]);
                }
            }
            return slotSet;
        }
        static PackContextSet(filteredItems) {
            var contextSet = new Set();
            for (const key in filteredItems) {
                let itemContexts = filteredItems[key].contextual;
                for (const k in itemContexts) {
                    contextSet.add(itemContexts[k]);
                }
            }
            return contextSet;
        }
        static makeTypeFilterLink(label, slotType, isActive = false) {
            let valueEntry = slotType != undefined ? `'${slotType}'` : "undefined";
            let script = `SugarCube.getLib().PlayerModel.setViewFilter('${FilterUX.typeFilter}', ${valueEntry}); SugarCube.getLib().CoreUtils.playPassage();`;
            let result = Link_1.makeLink(label, script, `filter-type ${slotType}`);
            return isActive ? `<b>${result}</b>` : result;
        }
        static AddFilterSlots(set) {
            const makeFilterLink = (label, slotType, isActive = false) => {
                let valueEntry = slotType != undefined ? `'${slotType}'` : "undefined";
                let script = `SugarCube.getLib().PlayerModel.setViewFilter('${FilterUX.slotFilter}', ${valueEntry}); SugarCube.getLib().CoreUtils.playPassage();`;
                let result = Link_1.makeLink(label, script, `filter-slot ${slotType}`);
                return isActive ? `<b>${result}</b>` : result;
            };
            let result = "";
            let slotTypes = [...set];
            result += "<div>";
            result += "<span>By Slot: </span>";
            let slotsLinks = [];
            let currentSlot = PlayerModel_1.PlayerModel.getViewFilter(FilterUX.slotFilter);
            for (const key in slotTypes) {
                const slotType = slotTypes[key];
                const isActive = slotType === currentSlot;
                slotsLinks.push(makeFilterLink(slotType, slotType, isActive));
            }
            if (currentSlot !== undefined) {
                slotsLinks.push(makeFilterLink("reset slot filter", undefined));
            }
            result += slotsLinks.join(" ");
            result += "</div>";
            return result;
        }
        static AddContextSlots(set) {
            const makeContextLink = (label, context, isActive = false) => {
                let valueEntry = context != undefined ? `'${context}'` : "undefined";
                let script = `SugarCube.getLib().PlayerModel.setViewFilter('${FilterUX.contextFilter}', ${valueEntry}); SugarCube.getLib().CoreUtils.playPassage();`;
                let result = Link_1.makeLink(label, script, `context-slot ${context}`);
                return isActive ? `<b>${result}</b>` : result;
            };
            let result = "";
            let slotTypes = [...set];
            result += "<div>";
            result += "<span>By Context: </span>";
            let slotsLinks = [];
            let currentSlot = PlayerModel_1.PlayerModel.getViewFilter(FilterUX.contextFilter);
            for (const key in slotTypes) {
                const slotType = slotTypes[key];
                const isActive = slotType === currentSlot;
                slotsLinks.push(makeContextLink(slotType, slotType, isActive));
            }
            if (currentSlot !== undefined) {
                slotsLinks.push(makeContextLink("reset context filter", undefined));
            }
            result += slotsLinks.join(" ");
            result += "</div>";
            return result;
        }
    }
    exports.FilterUX = FilterUX;
    FilterUX.slotFilter = "slot";
    FilterUX.typeFilter = "type";
    FilterUX.contextFilter = "context";
});
