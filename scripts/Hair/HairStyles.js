(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Link", "../Player/PlayerModel", "../Player/ProfileModel", "../Tasks/Tasks", "./IHairStyle"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getHairSortRank = exports.HairStyles = void 0;
    const Link_1 = require("../Link");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const ProfileModel_1 = require("../Player/ProfileModel");
    const Tasks_1 = require("../Tasks/Tasks");
    const IHairStyle_1 = require("./IHairStyle");
    class HairStyles {
        static get(hairStyleId) {
            return HairStyles.itemsDefinitions[hairStyleId];
        }
        static setItems(styles) {
            HairStyles.itemsDefinitions = styles;
        }
        static drawStyles(styles) {
            let result = "";
            styles.forEach((item) => {
                result += `${item.color}`;
            });
            return result;
        }
        static renderLengthsCarousel(destination, existingHairColor = null) {
            const earLength = IHairStyle_1.getHairLengthValue("chin");
            const hairLength = PlayerModel_1.PlayerModel.getHairLength();
            const filteredItems = HairStyles.selectStyles((item) => {
                const isEarLength = IHairStyle_1.getHairLengthValue(item.length) <= earLength && Tasks_1.Tasks.hasTask("get-hair-styled-for-internship-today");
                const lengthMatch = IHairStyle_1.getHairLengthValue(item.length) <= hairLength || isEarLength; // Hack: Always allow ear length...
                if (existingHairColor != null) {
                    return lengthMatch && item.color == existingHairColor;
                }
                else {
                    return lengthMatch && item.isAlternateColor == false;
                }
            });
            return this.renderCarousel(filteredItems, destination);
        }
        static renderStylesCarousel(destination) {
            const id = PlayerModel_1.PlayerModel.getHairStyleId();
            const rootId = HairStyles.getCoreId(id);
            const filteredItems = HairStyles.selectStyles((item) => {
                return item.id.indexOf(rootId) >= 0;
            });
            return this.renderCarousel(filteredItems, destination);
        }
        static renderCarousel(styles, destination) {
            const sortedItems = styles.sort(getHairSortRank);
            let result = "<div>";
            result += `<div class="item-indent">`;
            for (let i = 0; i < sortedItems.length; i++) {
                const item = sortedItems[i];
                const styleLink = HairStyles.applyStyleLink(item.id, destination);
                result += `${ProfileModel_1.ProfileModel.renderHair(item, styleLink)}`;
            }
            result += "</div>";
            result += "</div>";
            return result;
        }
        /* Get all items which match*/
        static selectStyles(isMatch = null) {
            const items = HairStyles.itemsDefinitions;
            const itemsArray = [];
            for (const index in items) {
                itemsArray.push(items[index]);
            }
            let result = itemsArray;
            if (isMatch) {
                result = result.filter(isMatch);
            }
            return result;
        }
        static getFileName(style) {
            return HairStyles.getCoreId(style.id) + ".png";
        }
        static getCoreId(styleId) {
            const id = styleId;
            const regex = /_[^.]+/;
            const coreId = id.replace(regex, "");
            return coreId;
        }
        static isLongStyle(style) {
            return style.length == "armpit" || style.length == "midback" || style.length == "shoulder";
        }
        static applyStyleLink(styleId, destination) {
            const script = `SugarCube.getLib().PlayerModel.setHairStyleId('${styleId}'); SugarCube.getLib().CoreUtils.playPassage('${destination}')`;
            return Link_1.makeLink("Choose", script, `hair-style-link ${styleId}`);
        }
    }
    exports.HairStyles = HairStyles;
    function getHairSortRank(l, r) {
        if (l.length < r.length) {
            return -1;
        }
        if (r.length > l.length) {
            return 1;
        }
        //Sort by Id
        if (l.id < r.id) {
            return -1;
        }
        else if (l.id > r.id) {
            return 1;
        }
        else {
            return 0;
        }
    }
    exports.getHairSortRank = getHairSortRank;
});
