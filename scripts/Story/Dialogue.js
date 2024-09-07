(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../Images/Images", "../Inventory/OutfitsAnalyser", "../Player/PlayerModel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Speakers = exports.Dialogue = void 0;
    const Core_1 = require("../Core");
    const Images_1 = require("../Images/Images");
    const OutfitsAnalyser_1 = require("../Inventory/OutfitsAnalyser");
    const PlayerModel_1 = require("../Player/PlayerModel");
    function replaceAll2(target, str, newStr) {
        // If a regex pattern (DISABLED)
        if (Object.prototype.toString.call(str).toLowerCase() === "[object regexp]") {
            return target.replace(str, newStr);
        }
        // If a string
        const result = target.replace(new RegExp(str, "g"), newStr);
        return result;
    }
    /*
    if (!String.prototype.replaceAll) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        String.prototype.replaceAll = function (str: any, newStr: any) {
            return replaceAll(this as string, str, newStr);
        };
    }
    */
    //HACKs... TODO: Consolidate Dep's
    class Dialogue {
        static speaker(message) {
            const imageName = "computer.jpg";
            return Dialogue.generic(`Computer`, this.replaceSugar(message), "speaker", imageName);
        }
        //TODO: Encapsulate logic for this
        static player(message) {
            const imageName = PlayerModel_1.PlayerModel.drawCharacterImage("message-portrait zoom");
            return Dialogue.genericCore("You", this.replaceSugar(message), "humantext player", imageName);
        }
        static playerAsDressed(message) {
            const outfitDescription = OutfitsAnalyser_1.OutfitsAnalyser.describeCurrentOutfit();
            if (outfitDescription.isAllMaleOutfit) {
                return Dialogue.player(message);
            }
            else {
                return Dialogue.heir(message);
            }
        }
        static brain(message) {
            return Dialogue.generic("Your brain", this.replaceSugar(message), "humantext", "brain.png");
        }
        static heir(message) {
            const imageName = PlayerModel_1.PlayerModel.drawCharacterImage("message-portrait zoom");
            return Dialogue.genericCore(`You (as ${Core_1.CoreUtils.getVariables().player.heirName})`, this.replaceSugar(message), "humantext heir", imageName);
        }
        static playerDrone(message) {
            return Dialogue.generic(`Drone`, this.replaceSugar(message), "drone", "maid-profile.jpg");
        }
        static marissa(message) {
            const imageName = "marissa.jpg";
            return Dialogue.generic("Marissa", this.replaceSugar(message), "humantext marissa", imageName);
        }
        static pawn(message) {
            const imageName = "pawn-broker.jpg";
            return Dialogue.generic("Pawn Broker", this.replaceSugar(message), "humantext pawn-broker", imageName);
        }
        static sporting(message) {
            const imageName = "sporting-clerk.jpg";
            return Dialogue.generic("Lady Fit-Sport Clerk", this.replaceSugar(message), "humantext", imageName);
        }
        static gamestore(message) {
            const imageName = "gamer-goth.jpg";
            return Dialogue.generic("GamesHut Cashier", this.replaceSugar(message), "humantext", imageName);
        }
        static lingeriestore(message) {
            const imageName = "lingerie-salesgirl.jpg";
            return Dialogue.generic("Lingerie Salesgirl", this.replaceSugar(message), "humantext", imageName);
        }
        static hrContact(message) {
            const imageName = "hr-contact.jpg";
            return Dialogue.generic("HR Contact", this.replaceSugar(message), "humantext", imageName);
        }
        static logisticsSupervisor(message) {
            const imageName = "logistics-supervisor.jpg";
            return Dialogue.generic("Logistics Supervisor", this.replaceSugar(message), "humantext", imageName);
        }
        static droneMentor(message) {
            const imageName = "drone-mentor.jpg";
            return Dialogue.generic("Drone Ops Mentor", this.replaceSugar(message), "humantext", imageName);
        }
        static replaceSugar(message) {
            message = replaceAll2(message, " ! ", " not ");
            message = replaceAll2(message, "===", "is");
            message = replaceAll2(message, " = ", " to ");
            message = replaceAll2(message, "&&", "and");
            message = replaceAll2(message, " \\|\\| ", " or ");
            if (message.toLowerCase().indexOf("eve") >= 0) {
                //throw "literal character name";
            }
            return message;
        }
        static speak(speaker, message, hideImage) {
            const showImage = !hideImage;
            let result = "";
            message = this.replaceSugar(message);
            let imageName;
            switch (speaker) {
                case exports.Speakers.sue:
                    result = Dialogue.generic(`Sue`, message, "humantext sue", hideImage ? "" : "susan.jpg");
                    break;
                case exports.Speakers.heir:
                    result = Dialogue.heir(message);
                    break;
                case exports.Speakers.merm:
                    return Dialogue.genericCore(`The suit`, this.replaceSugar(message), "speaker", "");
                    break;
                case exports.Speakers.heirWiped:
                    imageName = PlayerModel_1.PlayerModel.drawCharacterImage("message-portrait zoom");
                    result = Dialogue.genericCore(`${Core_1.CoreUtils.getVariables().player.heirName}`, this.replaceSugar(message), "humantext heir", imageName);
                    break;
                case exports.Speakers.computer:
                    imageName = "computer.jpg";
                    return Dialogue.generic(`Computer`, this.replaceSugar(message), "speaker", imageName);
                    break;
                case exports.Speakers.reader:
                    imageName = "computer.jpg";
                    return Dialogue.generic(`Document Reader`, this.replaceSugar(message), "speaker", imageName);
                    break;
                case exports.Speakers.spa:
                    result = Dialogue.generic("Spa Concierge", message, "humantext", "spa-concierge.jpg");
                    break;
                case exports.Speakers.internSupervisor:
                    result = Dialogue.generic("Seok Eun", message, "humantext", "seok-eun.jpg");
                    break;
                case exports.Speakers.internMentor:
                    result = Dialogue.generic("Jen", message, "humantext", "jen-intern.jpg");
                    break;
                case exports.Speakers.ballet:
                    result = Dialogue.generic("Madame Pinneau", message, "humantext cursive-dialogue", "mme-pinneau.jpg");
                    break;
                case exports.Speakers.clubLeader:
                    result = Dialogue.generic("Mariella", message, "humantext", "mariella.jpg");
                    break;
                case exports.Speakers.advdrone:
                    result = Dialogue.generic("S3 Drone", message, "humantext", "adv-drone.jpg");
                    break;
                case exports.Speakers.driver:
                    result = Dialogue.generic("Delivery Driver", message, "humantext", showImage ? "delivery-driver.jpg" : "");
                    break;
                case exports.Speakers.assistant:
                    result = Dialogue.generic("Delivery Assistant", message, "humantext", showImage ? "delivery-assistant.jpg" : "");
                    break;
                case exports.Speakers.mcS3:
                    result = Dialogue.generic(`You (operating S3.X7-81.TC4)`, message, "humantext", "adv-drone.jpg");
                    break;
                case exports.Speakers.compS3:
                    result = Dialogue.generic(`Computer (operating S3.X7-81.TC4)`, message, "humantext", "adv-drone.jpg");
                    break;
                case exports.Speakers.agentBlack:
                    result = Dialogue.generic("Agent Black - DoH", message, "humantext", "agent-black.jpg");
                    break;
                case exports.Speakers.agentGreen:
                    result = Dialogue.generic("Agent Green - DoH", message, "humantext", "agent-green.jpg");
                    break;
                case exports.Speakers.analyst1:
                    result = Dialogue.generic("Quantum Historian", message, "futuristic", "");
                    break;
                case exports.Speakers.analyst2:
                    result = Dialogue.generic("Ansible Technician", message, "futuristic", "");
                    break;
                case exports.Speakers.prof:
                    result = Dialogue.generic("Prof. Fraunhoffer", message, "humantext", "gunther-fraunhoffer.jpg");
                    break;
                case exports.Speakers.heli:
                    result = Dialogue.generic("Helicopter Pilot", message, "humantext", "heli-pilot.jpg");
                    break;
                case exports.Speakers.merc:
                    result = Dialogue.generic("Scruffy Merc", message, "humantext", "merc.jpg");
                    break;
                case exports.Speakers.biol:
                    result = Dialogue.generic("Margaret Blake - PhD", message, "humantext", "marine-bio.jpg");
                    break;
                case exports.Speakers.eng:
                    result = Dialogue.generic("Elso Clavijo", message, "humantext", "elso.jpg");
                    break;
                case exports.Speakers.autoDirector:
                    result = Dialogue.generic("Ingram Callaghan", message, "humantext", "auto-exec.jpg");
                    break;
                case exports.Speakers.krughoff:
                    result = Dialogue.generic("Damian Krughoff", message, "humantext", "damian-krughoff.jpg");
                    break;
                case exports.Speakers.chapman:
                    result = Dialogue.generic("Justus Chapman", message, "humantext", "justus-chapman.jpg");
                    break;
                case exports.Speakers.pearson:
                    result = Dialogue.generic("Kyndall Pearson", message, "humantext", "kyndall-pearson.jpg");
                    break;
                case exports.Speakers.stacey:
                    result = Dialogue.generic("Stacey Ridge", message, "humantext", "stacy-ridge.jpg");
                    break;
                case exports.Speakers.restoredPlayer:
                    result = Dialogue.generic(`You`, message, "humantext", hideImage ? "" : "mc-1.jpg");
                    break;
                case exports.Speakers.marissa:
                    imageName = PlayerModel_1.PlayerModel.drawCharacterImage("message-portrait zoom");
                    result = Dialogue.genericCore(`Marissa (in ${Core_1.CoreUtils.getVariables().player.heirName})`, this.replaceSugar(message), "humantext heir", imageName);
                    break;
                default:
                    result = Dialogue.generic(speaker, message, "humantext", "");
                    break;
            }
            return result;
        }
        static generic(name, message, className, image = "") {
            return this.genericCore(name, message, className, image != "" ? Images_1.Images.drawPerson(image, "message-portrait zoom") : "");
        }
        static genericCore(name, message, className, imageBody) {
            let result = `<div class="message"><table><td>`;
            result += imageBody;
            result += `</td><td>`;
            result += `<span class="label">${name}</span>`;
            result += `<span class="${className}">${message}</span></td></table></div>`;
            return result;
        }
        static endOfLine() {
            if (true) {
                return '<div class="message"><span class="label">YeomanR - The Developer</span><span class="developerMessage">Thank you all for playing, as this experience continues to evolve. I\'m currently working to converge loose ends into a hopefully entertaining ending. Forum feedback, especially about gameplay impacting bugs or confusing passages is appreciated. </span><div>[[Developer Notes]]</div><div class="endOfLine">End of Line</div></div>';
            }
            return "";
        }
        static spoilerAlert(content) {
            return `${content}`;
        }
        //Unused
        static newContentWarning() {
            return '<div class="message"><span class="label">YeomanR - The Developer</span><span class="developerMessage">You are starting on a major segment of newly authored content. It is still being polished up. There will be an "end of line" message when you reach the end of the core new content. This section will be getting more details and tweaks, but even so it\'s very easy to miss things. Bugs, errors, odd writing and continuity issues are all details I can really use help on. Please report them on the discussion thread at tfgames.site. I appreciate hearing perspective from players, especially new folks, and generally try to act on most bug reports.👋</span>  </div>';
        }
    }
    exports.Dialogue = Dialogue;
    // Used for implementation ID on logic pertaining to clothing slots
    exports.Speakers = {
        sue: "sue",
        heir: "heir",
        heirWiped: "heirWiped",
        spa: "spa",
        computer: "computer",
        reader: "reader",
        internSupervisor: "internSupervisor",
        internMentor: "internMentor",
        ballet: "ballet",
        clubLeader: "clubLeader",
        advdrone: "advDrone",
        driver: "driver",
        assistant: "assistant",
        mcS3: "mcS3",
        compS3: "compS3",
        agentBlack: "agentBlack",
        agentGreen: "agentGreen",
        analyst1: "analyst1",
        analyst2: "analyst2",
        prof: "prof",
        heli: "heli",
        merc: "merc",
        biol: "biol",
        eng: "eng",
        merm: "merm",
        autoDirector: "auto-director",
        krughoff: "krughoff",
        chapman: "chapman",
        pearson: "pearson",
        restoredPlayer: "restoredPlayer",
        marissa: "marissa",
        stacey: "stacey",
    };
});
