(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "./CssLoader"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Toast = void 0;
    const Core_1 = require("../Core");
    const CssLoader_1 = require("./CssLoader");
    class Toast {
        static reset() {
            CssLoader_1.CssLoader.EnsureCss("Toast.css");
            const story = document.getElementById("story");
            story.innerHTML += `
            <!-- The Modal -->
            <div id="myToast" class="toast-message" >
            

              <!-- Modal content -->
              <div class="" id="toast-content" onClick="return;">
                <p id="toast-message-id" class="toast-message">Some text in the Modal..</p>                
              </div>
            
            </div>
          `;
            if (Toast.isOpen) {
                Toast.close(() => {
                    if (Toast.reject) {
                        Toast.reject();
                    }
                });
            }
            const modalContent = document.getElementById("modal-content");
            modalContent.className = "";
        }
        static close(action) {
            if (Toast.isOpen) {
                Toast.isOpen = false;
                const modal = document.getElementById("myModal");
                if (modal) {
                    const parent = modal.parentNode;
                    if (parent != null) {
                        parent.removeChild(modal);
                    }
                }
                if (action != null) {
                    action();
                }
                else {
                    Core_1.CoreUtils.playPassage();
                }
            }
            Toast.resolve = null;
            Toast.reject = null;
        }
        static show(message) {
            const promise = new Promise((resolve, reject) => {
                Toast.reset();
                Toast.isOpen = true;
                Toast.resolve = resolve;
                Toast.reject = reject;
                // prompt uses open always with a 0 open mode
                const modal = document.getElementById("myToast");
                if (modal != null) {
                    modal.style.display = "block";
                }
                else {
                    reject();
                }
                const modalMessage = document.getElementById("modal-message");
                if (modalMessage != null) {
                    modalMessage.textContent = message;
                }
                else {
                    reject();
                }
            });
            return promise;
        }
        static message(message) {
            const promise = new Promise((resolve, reject) => {
                Toast.reset();
                Toast.isOpen = true;
                Toast.resolve = resolve;
                Toast.reject = reject;
                // prompt uses open always with a 0 open mode
                const modal = document.getElementById("myModal");
                if (modal != null) {
                    modal.style.display = "block";
                }
                else {
                    reject();
                }
                const modalMessage = document.getElementById("modal-message");
                if (modalMessage != null) {
                    modalMessage.innerHTML = message;
                }
                else {
                    reject();
                }
                const modalContent = document.getElementById("modal-content");
                modalContent.className = "wide";
                const modalPrompt = document.getElementById("modal-prompt-text");
                modalPrompt.value = "";
                modalPrompt.focus();
            });
            return promise;
        }
    }
    exports.Toast = Toast;
    Toast.isInitialized = false;
    Toast.isOpen = false;
    Toast.resolve = null;
    Toast.reject = null;
});
