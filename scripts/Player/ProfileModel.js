(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Hair/HairStyles", "../Images/Images"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProfileModel = void 0;
    const HairStyles_1 = require("../Hair/HairStyles");
    const Images_1 = require("../Images/Images");
    class ProfileModel {
        static renderMC(profileOptions) {
            if (profileOptions.isLegacy) {
                return `<div class="hair-slot">${Images_1.Images.drawImage("legacy.jpg", "character-portrait  ")}</div>`;
            }
            const topStyles = profileOptions.showShoulders ? `hair-slot  ${profileOptions.showShoulders}` : "hair-slot";
            return `<div class='${topStyles}'> \\
        ${Images_1.Images.drawImage("head-backdrop.png", "hair-background")} \\
        ${Images_1.Images.drawImage(profileOptions.head, "hair-base")} \\
        ${Images_1.Images.drawImage(profileOptions.hair, `hair-overlay ${profileOptions.hairCss}`)} \\
    </div>`;
        }
        static renderHair(hairStyle, content = "") {
            return `<div class="flow-cell"> \\
            <div> \\
            ${ProfileModel.renderMC({
                background: "",
                hair: HairStyles_1.HairStyles.getFileName(hairStyle),
                head: "MC-BaseImage-T.png",
                showShoulders: ` hair-crop-${hairStyle.length}`,
                hairCss: hairStyle.shiftCss || "",
                isLegacy: hairStyle.isLegacy,
            })} \\
            </div>\\            
            ${content}\\
            </div> `;
        }
        static renderItems() {
            const styles = HairStyles_1.HairStyles.selectStyles();
            let result = "";
            result += `<div class="flow-row">`;
            styles.forEach((style) => {
                result += this.renderHair(style);
            });
            result += "</div> \\ ";
            return result;
        }
    }
    exports.ProfileModel = ProfileModel;
});
