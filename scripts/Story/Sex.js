(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Images/Images", "../Player/PlayerModel", "../Tasks/Tasks"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sex = void 0;
    const Core_1 = require("../Core");
    const Images_1 = require("../Images/Images");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Tasks_1 = require("../Tasks/Tasks");
    class Sex {
        static dildoSelf() {
            PlayerModel_1.PlayerModel.triggerSexualRelease(false);
            let isFirstTime = false;
            if (Tasks_1.Tasks.hasTask("need-sexual-relief")) {
                Tasks_1.Tasks.removeTask("need-sexual-relief");
                isFirstTime = true;
            }
            let prefix;
            let message;
            let suffix;
            const orgasmFace = Images_1.Images.drawRandomImage("orgasm-face-NNN.webp", 9);
            if (PlayerModel_1.PlayerModel.hasGirlyGenitals()) {
                const images = [
                    "chastity-belt-mas.webp",
                    "fem-chastity-teasing1.jpg",
                    "fem-chastity-teasing2.jpg",
                    "fem-chastity-teasing3.jpg",
                    "fem-chastity-teasing4.jpg",
                    "fem-chastity-teasing5.jpg",
                    "chastity-belt-mas.webp",
                    "chastity-belt-mas.webp",
                ];
                const image = Core_1.CoreUtils.getRandomString(images);
                const startMessages = [
                    "Your pussy is aching for an orgasm, but the belt just won't give you the stimulation you hunger for.",
                    "Your vag has been steadily teased by the presence of the dilator, but isn't arousing enough to set you off. You want some release.",
                ];
                message = `            
            ${Core_1.CoreUtils.getRandomString(startMessages)}
            ${Images_1.Images.drawAction(image)}
            
            With a now practiced hand, you get to the business of stimulating yourself from your ass. It's not long before you feel the sparks of excitement.
            ${orgasmFace}
            Your muscles tighten up, a wave of bliss comes over you and you let out a deep moan.
        `;
            }
            else {
                if (isFirstTime) {
                    prefix = "You have been tortured too long with your dick locked away.";
                    suffix = "";
                }
                else if (PlayerModel_1.PlayerModel.getArousalLevel() > 80) {
                    prefix = `Your mind is loopy for sex, it kills you to admit it, but it was getting hard not to think of sliding the dildo deep inside you .`;
                    suffix = "The omni-present thoughts of sex have faded to the background. You feel you can concentrate again, for now. ";
                }
                else {
                    prefix = `You have been feeling like you need to fill that void inside you.`;
                    suffix = "You feel like you have released a good bit of tension. You are already starting to think of next time.";
                }
                const image = "dildo-first.webp";
                if (Core_1.CoreUtils.visitedCount() > 5) {
                    message = `
                ${prefix}
                
                While you haven't been doing it incessantly, this isn't your first time either. You've started to get a little ritual.
                ${Images_1.Images.drawAction(image)}
                
                Where you started with just an uncontrollable animalistic need for release, you can't but help but imagine about getting penetrated deep inside as a girl.
                ${orgasmFace}
    
                You find your muscles tighten up, an see a stream little dribble of clear fluid coming out from your little cage.    
                ${suffix} 
            `;
                }
                else {
                    message = `
                ${prefix}
                You apply some lube, and slide a finger in, and follow with a second to loosen things up.
    
                After you warmed things up, you slide the tip of dildo in, to see how it feels.    
                
                Not altogether unpleasant, so you try it a little deeper this time.
                ${Images_1.Images.drawAction(image)}
        
                From there the sensation kind of turns you on. At this point, a primal urge starts to take over your hyper-aroused mind, and you start agressively pumping in a daze. 
                
                You regain your senses as a piercing moan draws your attention back to the moment, and a couple streams of cum burst forth from the cage. 
                ${suffix}
                `;
                }
            }
            return message;
        }
    }
    exports.Sex = Sex;
});
