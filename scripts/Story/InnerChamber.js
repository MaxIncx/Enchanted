(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Player/PlayerModel", "../Player/Skills", "../Tasks/Tasks", "./Dialogue"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InnerChamber = void 0;
    const Core_1 = require("../Core");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Skills_1 = require("../Player/Skills");
    const Tasks_1 = require("../Tasks/Tasks");
    const Dialogue_1 = require("./Dialogue");
    class InnerChamber {
        static getInnerChamberToggle() {
            const activeClasses = Core_1.CoreUtils.visitedCount("Inner chamber") > 3 ? "visibility-collapse" : "";
            return `<div class="toggled-container ${activeClasses} " >\
        <span class="toggle-target">This is a pretty austere, curvilinear room here in a style unlike the rest of the house. Compared to the rooms in the main house, this is devoid of ornaments. It has a desk with a computer or at least a screen, a bed, and some loose furniture. You notice what look like might be a variety of seams in the walls and ceilings which might open up to cabinetry or storage, but you don't see any affordances like knobs or buttons to operate. As you turn your head, you have a sense that the walls seem to slowly shift or undulate.</span>\
        <<=SugarCube.getLib().Images.drawLocation('inner-room.jpg');>>
        <<=SugarCube.getLib().CoreUtils.getToggleLink()>>\
        
        <div class="toggle-target">\
        Further in, you see there is what can be described as a person sized "pod".
        <<=SugarCube.getLib().Images.drawLocation('pod-cell.jpg');>>
        </div>\
        </div>`;
        }
        static meetsBalletReq() {
            const balletSkillValid = Skills_1.Skills.get(Skills_1.SkillTypes.ballet) >= 16;
            return balletSkillValid;
        }
        static meetsWaistReq() {
            const waistReqValid = Skills_1.Skills.get(Skills_1.SkillTypes.waist) < 60.96;
            return waistReqValid;
        }
        static meetsNeuralinkExp() {
            const waistReqValid = Core_1.CoreUtils.visitedCount("Work in Domestic Services via Neuralink") >= 12;
            return waistReqValid;
        }
        static getDollSuitPassageEnd() {
            let message = `${Dialogue_1.Dialogue.speaker("Analysing readiness.")}              
        `;
            const WaistValid = InnerChamber.meetsWaistReq();
            const balletSkill = InnerChamber.meetsBalletReq();
            if (!WaistValid || !balletSkill) {
                message += `${Dialogue_1.Dialogue.speaker("Aborting user-suit integration for wearer safety. ")}                    
        `;
            }
            if (!WaistValid) {
                message += `${Dialogue_1.Dialogue.speaker("Assessment: Wearer waist not currently within safe allowed maximum of 24 inches. ")}
        That sucks, but it seems like the hormones and regular exercise has had a slimming effect. A some more days of intense exercise will probably get you there.
            `;
            }
            if (!balletSkill) {
                message += ` 
        ${Dialogue_1.Dialogue.speaker("Assessment: Insufficient development of tendon strength for required en-pointe foot configuration. An introductory course of Ballet training is needed for optimal bodily development.")}
        It's right, you would not be able to walk in boots like this, without some training.
        `;
            }
            if (!WaistValid || !balletSkill) {
                message += `No luck for now. Looks like you're stuck with the console for operating drones until you can satisfy these requirements.
            ${Dialogue_1.Dialogue.speaker("Opening suit. Please stand by.")}
            After the suit finishes opening up to free you, you sigh dissapointedly and dismount. At least until your next attempt.
        [[Inner chamber]]`;
            }
            else {
                message += `${Dialogue_1.Dialogue.speaker("Assessment: Wearer is verified as physically ready to interface with suit. Would you like to proceed now? ")} 
            [[Doll Suit Closing]]
            [[Cancel and dismount, Return to Inner chamber|Inner chamber]]`;
            }
            return message;
        }
        static showLink(linkName, canVisit = true) {
            let label = "";
            if (!canVisit) {
                label = `CORRUPTED - ${linkName}`;
            }
            else {
                label += `[[${linkName}]]`;
                if (!Core_1.CoreUtils.hasPlayed(linkName)) {
                    label += ` (UNREAD)`;
                }
            }
            //${tempAnsibleVisited ?"[[Notes on MarisPen Solutions]]":"CORRUPTED - Notes on
            return label;
        }
        static omit(linkName, canVisit = true) {
            return "";
        }
        static getMarissaLogs() {
            const tempAnsibleVisited = Core_1.CoreUtils.hasPlayed("The computer's massage continues");
            const options = `<b>Marissa's Personal Logs</b>        
        ${this.showLink("I bagged Dr. F!")}
        ${this.showLink("Anomalous signals at H. Station")}
        ${this.showLink("Dollsuit - On Articulation Issues")}
        ${this.showLink("Dollsuit - Resolving the instability")}
        ${this.showLink("Notes on MarisPen Solutions", tempAnsibleVisited)}
        ${this.showLink("Aftermath of Butler-Hancock Act")}
        ${this.omit("Dollsuit - The initial demonstration", tempAnsibleVisited)}\
        ${this.omit("Is this some fucking joke?", tempAnsibleVisited)}\
        ${this.omit("Observations on Nanite-Hormone treatment Study", tempAnsibleVisited)}\
        `;
            return options;
        }
        static getTemporalMessages() {
            const tempAnsibleVisited = Core_1.CoreUtils.hasPlayed("The computer's massage continues");
            let options = "";
            if (tempAnsibleVisited) {
                options = `<b>Ansible Messages</b>
            ${this.showLink("This is not an error")}
            ${this.showLink("Message 2 - For Marissa's eyes only")}
            ${this.showLink("Message 3 - For Marissa's eyes only")}
            ${this.showLink("Message 4 - For Marissa's eyes only")}

          `;
            }
            return options;
        }
        static dismissAnsibleMessages() {
            if (Tasks_1.Tasks.hasTask("review-temporal-ansible-logs-today")) {
                if (PlayerModel_1.PlayerModel.hasGirlyGenitals()) {
                    return "[[Use console|Discuss next steps-F]]";
                }
                else {
                    return "[[Use console|Discuss next steps-M]]";
                }
            }
            else {
                return "[[Use console]]";
            }
        }
        static sleepMessage() {
            if (!Core_1.CoreUtils.hasPlayed()) {
                return `You are wary about being vulnerable to the computer while you sleep, but it's so convenient to go to the pod after work, rather than all the way upstairs.`;
            }
            else {
                return `The pod engages sleep mode.`;
            }
        }
    }
    exports.InnerChamber = InnerChamber;
});
