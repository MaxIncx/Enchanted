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
    exports.Filtering = void 0;
    const Core_1 = require("../Core");
    const Link_1 = require("../Link");
    const PlayerModel_1 = require("../Player/PlayerModel");
    var slotFilter = "slot";
    var typeFilter = "type";
    var contextFilter = "context";
    class Filtering {
        static AddGroupFilterLink(group) {
            if (group.length > 0) {
                let filterLink = typeValue == key ? Filtering.makeTypeFilterLink("Clear Filter", undefined) : Filtering.makeTypeFilterLink("🔎", key);
                return `<div class="item-group">${key} ${filterLink}</div>`;
            }
            return "";
        }
        static ProcessFilter(filteredItems) {
            const isSamePage = Core_1.CoreUtils.isOnSamePageAsBefore();
            let typeValue = undefined;
            if (!isSamePage) {
                PlayerModel_1.PlayerModel.resetViewFilter();
            }
            else {
                let slotValue = PlayerModel_1.PlayerModel.getViewFilter(slotFilter);
                let contextValue = Filtering.getViewFilter(contextFilter);
                typeValue = PlayerModel_1.PlayerModel.getViewFilter(typeFilter);
                if (slotValue != undefined) {
                    let slot = slotValue;
                    filteredItems = filteredItems.filter((item) => {
                        return (item.slots.findIndex((item) => {
                            return item === slot;
                        }) >= 0);
                    });
                }
                if (contextValue != undefined) {
                    let context = contextValue;
                    filteredItems = filteredItems.filter((item) => {
                        return (item.contextual.findIndex((item) => {
                            return item === context;
                        }) >= 0);
                    });
                }
                if (typeValue != undefined) {
                    filteredItems = filteredItems.filter((item) => {
                        return typeValue === item.pluralNoun;
                    });
                }
            }
            return filteredItems;
        }
        static AddFilterSlots(set) {
            const makeFilterLink = (label, slotType, isActive = false) => {
                let valueEntry = slotType != undefined ? `'${slotType}'` : "undefined";
                let script = `SugarCube.getLib().PlayerModel.setViewFilter('${slotFilter}', ${valueEntry}); SugarCube.getLib().CoreUtils.playPassage();`;
                let result = Link_1.makeLink(label, script, `filter-slot ${slotType}`);
                return isActive ? `<b>${result}</b>` : result;
            };
            let result = "";
            let slotTypes = [...set];
            result += "<div>";
            result += "<div>Filter Content:</div>";
            result += "<span>By Slot: </span>";
            let slotsLinks = [];
            let currentSlot = Filtering.getViewFilter(slotFilter);
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
                let script = `SugarCube.getLib().PlayerModel.setViewFilter('${contextFilter}', ${valueEntry}); SugarCube.getLib().CoreUtils.playPassage();`;
                let result = Link_1.makeLink(label, script, `context-slot ${context}`);
                return isActive ? `<b>${result}</b>` : result;
            };
            let result = "";
            let slotTypes = [...set];
            result += "<div>";
            result += "<span>By Context: </span>";
            let slotsLinks = [];
            let currentSlot = Filtering.getViewFilter(contextFilter);
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
        static makeTypeFilterLink(label, slotType, isActive = false) {
            let valueEntry = slotType != undefined ? `'${slotType}'` : "undefined";
            let script = `SugarCube.getLib().PlayerModel.setViewFilter('${typeFilter}', ${valueEntry}); SugarCube.getLib().CoreUtils.playPassage();`;
            let result = Link_1.makeLink(label, script, `filter-type ${slotType}`);
            return isActive ? `<b>${result}</b>` : result;
        }
    }
    exports.Filtering = Filtering;
});
