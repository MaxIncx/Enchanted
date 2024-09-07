(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Images/Images"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageEffects = void 0;
    const Images_1 = require("./Images/Images");
    class ImageEffects {
        static glitch(imageName) {
            return `<div class="glitch">\
            <img src="${Images_1.Images.corePath(imageName)}" class="glitch-1">\
            <div class="overlay">\
            <span>Scanning Mode</span>
            </div>\
            <img src="${Images_1.Images.corePath(imageName)}" class="glitch-2">\
            <img src="${Images_1.Images.corePath(imageName)}" class="glitch-3">\
            
        </div>`;
        }
        static glitchRandom(filenameTemplate, maxId) {
            const n = Math.ceil(Math.random() * maxId).toString();
            const filename = filenameTemplate.replace("NNN", n);
            return `<div class="glitch">\
            <img src="${Images_1.Images.corePath(filename)}" class="glitch-1">\
            <div class="overlay">\
            <span>Scanning Mode</span>
            </div>\
            <img src="${Images_1.Images.corePath(filename)}" class="glitch-2">\
            <img src="${Images_1.Images.corePath(filename)}" class="glitch-3">\
            
        </div>`;
        }
    }
    exports.ImageEffects = ImageEffects;
});
