(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./CssLoader"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageOverlay = void 0;
    const CssLoader_1 = require("./CssLoader");
    class ImageOverlay {
        static reset() {
            CssLoader_1.CssLoader.EnsureCss("overlay.css");
            if (!ImageOverlay.isInitialized) {
                const story = document.getElementById("ui-overlay");
                story.innerHTML += `

            <div id="image-overlay" class="image-overlay">                          
                <image  id="image-overlay-content" src="">
            </div>
          `;
                ImageOverlay.isInitialized = true;
            }
        }
        static hide() {
            const overlay = document.getElementById("image-overlay");
            overlay.style.display = "none";
        }
        static show(imagePath) {
            // prompt uses open always with a 0 open mode
            /*ImageOverlay.reset();
            const modal = document.getElementById("image-overlay");
            if (modal != null) {
                modal.style.display = "block";
            }
            const modalContent = document.getElementById("image-overlay-content") as HTMLImageElement;
            modalContent.src = imagePath;
            */
            window.open(imagePath);
        }
    }
    exports.ImageOverlay = ImageOverlay;
    ImageOverlay.isInitialized = false;
    ImageOverlay.isActive = false;
});
