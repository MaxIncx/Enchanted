(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Inventory/Items"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Images = void 0;
    const Items_1 = require("./Inventory/Items");
    class Images {
        static corePath(filename) {
            return "images/" + filename;
        }
        static drawImage(filename, className = null, zoomOnClick = false) {
            const imagePath = Images.corePath(filename);
            let content = "<img ";
            const zoomAffordance = zoomOnClick ? "clickable-image" : "";
            content += `class="${className || ""} ${zoomAffordance}" `;
            //Modest image overlay support
            if (zoomOnClick) {
                content += `onClick='SugarCube.getLib().ImageOverlay.show("${imagePath}");' `;
                content += `title='Click to view image' `;
            }
            content += `src="${imagePath}" />`;
            return content;
        }
        static drawRandomImage(filenameTemplate, maxId, className = null) {
            const n = Math.ceil(Math.random() * maxId).toString();
            const filename = filenameTemplate.replace("NNN", n);
            return Images.drawImage(filename, className);
        }
        static drawAction(filename) {
            return Images.drawImage(filename, null, false);
        }
        static drawDroneView(filename) {
            return `<div  class="drone-view">${Images.drawImage(filename, "dv-1", false)}\
        ${Images.drawImage(filename, "dv-2", false)}</div>`;
        }
        static drawItem(filename, className = null) {
            return Images.drawImage(filename, className, false);
        }
        static drawNothingItem(className = null) {
            return Images.drawImage("nothing.jpg", className, false);
        }
        static drawItemById(itemId, className = null, zoomOnClick = false) {
            const item = Items_1.Items.get(itemId);
            let result = "";
            if (item != null && item.image != null) {
                result = Images.drawImage(item.image, className, zoomOnClick);
            }
            return result;
        }
        static drawLocation(filename, className = "") {
            return Images.drawImage(filename, className, false);
        }
        static drawPerson(filename, className = "") {
            return Images.drawImage(filename, "character-portrait " + className, true);
        }
    }
    exports.Images = Images;
});
