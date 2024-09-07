(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Inventory/Inventory", "../Inventory/InventoryUX", "../Player/PlayerModel", "./Dialogue", "../Tasks/Tasks", "./Mood"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DoH = void 0;
    const Inventory_1 = require("../Inventory/Inventory");
    const InventoryUX_1 = require("../Inventory/InventoryUX");
    const PlayerModel_1 = require("../Player/PlayerModel");
    const Dialogue_1 = require("./Dialogue");
    const Tasks_1 = require("../Tasks/Tasks");
    const Mood_1 = require("./Mood");
    class DoH {
        static hasAppointment() {
            return !Inventory_1.Inventory.has("drone-operator-license");
        }
        static getAppointment() {
            let link = "";
            if (!Inventory_1.Inventory.has("drone-operator-license")) {
                link = `[[Department of Humanity - Meet Agents]]`;
            }
            else if (Tasks_1.Tasks.hasTask("report-computer-to-doh")) {
                link = `[[Report the Computer to the DoH as an informant]]`;
            }
            else {
                link = `You don't have an appointment with anyone.`;
            }
            return link;
        }
        static meetAgents() {
            let log = "You enter the office area for the 'computer oversight' unit. After getting lost in the hallways a couple of times, you finally reach the right office.";
            log += `${Dialogue_1.Dialogue.heir(`Hi, I'm ${PlayerModel_1.PlayerModel.getHeirName()}. I'm here to get a drone operator license, under application DO #13601.`)}
        An formally dressed agent gets up to shake your hand, with a firm grip.
        ${Dialogue_1.Dialogue.speak("agentGreen", "Agent Green. D.O.H.")}
        ${Dialogue_1.Dialogue.speak("agentGreen", "This is my partner, Agent Black.")}
        ${Dialogue_1.Dialogue.speak("agentBlack", "How do you do.")}
        ${Dialogue_1.Dialogue.heir(`Uh, Hi.`)}
        You force a smile as a pleasantry. You feel anxious about authority figures.

        ${Dialogue_1.Dialogue.speak("agentBlack", "Our job is to help keep humanity safe from the dangers of illegal automation.")}
        ${Dialogue_1.Dialogue.speak("agentBlack", "For us, we know that what matters is the individual. For this reason the department assigns agents to get to know and liase with all computer-interfacing workers. Whenever you need to perform a change of status, or report any concerns, we will be your contacts with the department.")}
        ${Dialogue_1.Dialogue.speak("agentGreen", "That's right! You're an individual in our eyes.")}        
        ${Dialogue_1.Dialogue.speak("agentBlack", "The department requires us to validate all applications in person, before filing for human-drone operator licenses. It's all pretty much boilerplate. Ok, let's make this quick.")}
        ${Dialogue_1.Dialogue.speak("agentGreen", "You are " + PlayerModel_1.PlayerModel.getHeirName() + " Masterson. Correct?")}
        ${Dialogue_1.Dialogue.heir(`Uhh, yep, sure am.`)}
        ${Dialogue_1.Dialogue.speak("agentGreen", "Just the facts, maam. Gender - Female. Obviously.")}
        Agent Black Smiles.
        ${Dialogue_1.Dialogue.speak("agentBlack", `Do you intend to subvert workers by replacing humanity with robots?`)}
        ${Dialogue_1.Dialogue.heir(`Nope.`)}
        ${Dialogue_1.Dialogue.speak("agentBlack", `Do you believe robot values and culture is superior to our values and culture?`)}
        ${Dialogue_1.Dialogue.heir(`No.`)}
        You had never considered that there was such a thing as robot culture.
        ${Dialogue_1.Dialogue.speak("agentBlack", `Are you currently, or have you ever been a member of a techno-marxist revolutionary movement seeking to enact non-democratic regime change with the help of robots?`)}
        You suppress a laugh. That question seems absurdly specific.
        ${Dialogue_1.Dialogue.heir(`Nope.`)}  
        ${Dialogue_1.Dialogue.speak("agentBlack", `Perfect. That's all we need to confirm your application.`)}
        She starts signing on her tablet, and hands it to Agent Green, who likewise fills in his credential, and passes it over to you.
        ${Dialogue_1.Dialogue.speak("agentBlack", `Please sign here to confirm the application`)}
        You sign. She takes the tablet back, prints you a document and hands it to yoy. 
        ${Dialogue_1.Dialogue.speak("agentBlack", `And with that, you are a licensed drone operator! This form is your temporary license, your employer will recieve and file your permanent copy.`)}
        ${Dialogue_1.Dialogue.speak("agentGreen", `See you around, DO #13601! Please close the door on your way out, and Keep your nose clean.`)}
        You shake the hands of both agents and head out.        
        `;
            InventoryUX_1.InventoryUX.add("drone-operator-license");
            Tasks_1.Tasks.removeTask("need-drone-license");
            return log;
        }
        static informOnComputer() {
            let log = "You return to the office area for the 'computer oversight' unit. You pretty much know how to get there this time.";
            log += `
        ${Dialogue_1.Dialogue.speak("agentBlack", `Hello. ${PlayerModel_1.PlayerModel.getHeirName()}, isn't it?`)}
        ${Dialogue_1.Dialogue.speak("agentGreen", `What's up, kid?`)}
        Agent black sees you are a bit shaken and nervous. She gets you some coffee from an urn.
        You wonder if you should really do this. If you proceed with this, the DOH will likely hunt down the computer, and with that, any prospect of getting the inheritance.
        
        ${Mood_1.Mood.defiantLink("Actually, my name is Billy...", 3)}
        [[What am I doing, this isn't right. (Apologize & Leave)|Department of Humanity - Lobby]]`;
            return log;
        }
        static myNameIsBilly() {
            const log = `${Dialogue_1.Dialogue.heir(`Actually, my name is Billy. At the beginning of May, I was hired to keep an eye on a mansion, as a friend of the family that lives there.`)}  
        ${Dialogue_1.Dialogue.heir(`I discovered an artificially intelligent supercomputer in the basement, that the owners didn't even know about. It demanded that I dress up as a woman, locked me in a room for a while and made me do weird things I wasn't comfortable with. It controls a like a crazy amount of money, and seems to do whatever it wants, without any human giving it instructions.`)}
        ${Dialogue_1.Dialogue.speak("agentGreen", `Surely you're joking. `)}
        ${Dialogue_1.Dialogue.speak("agentBlack", `A supercomputer in the basement?`)}    
        ${Dialogue_1.Dialogue.heir(`The thing controls a bunch of resources associated with MarisTech Corp. It registered me using a different identity than I was born with. It's been turning me into a girl against my will. Please, I'm really a guy, you need to help me. `)}  
        ${Dialogue_1.Dialogue.speak("agentGreen", `So, a MarisTech supercomputer in a dark basement decided it needs to turn you into a girl? I don't get it.`)}        
        [[Please help me, this isn't a joke]]`;
            return log;
        }
        static theyDontBelieve() {
            const log = `
        ${Dialogue_1.Dialogue.heir(`Please, you've got to help me this isn't a joke. The computer locked my penis away in a chastity belt, has had me wearing a butt plug, and it recently has been having sex with me. I'm afraid of how this ends.`)}        
        Green softens up, and averts his eyes. He doesn't seem comfortable dealing with seeing this distressed young person crying in front of him like this. 
        ${Dialogue_1.Dialogue.speak("agentGreen", `Easy there. It will be ok...`)}
        He hugs you super-awkwardly for a moment, and then seems to gesture to Black in the hopes that maybe she knows how do deal with emotional outbursts. Black seems to be caught like a deer in headlights, and shifts the subject. They both seem like they'd rather be in the middle of a gunfight with criminals than be a party to this conversation.
        ${Dialogue_1.Dialogue.speak("agentBlack", `So, this AI. It has been making you do things... umm, sexual things against your will?  `)} 
        ${Dialogue_1.Dialogue.heir(`The computer controls a bunch of resources associated with MarisTech. It registered me using a different identity than I was born with. It's been turning me into a girl and setting up situations where I have to play it's kinky games. Please, this has been turning into a horrible nightmare. I'm really a guy, you need to help me. `)}          
        ${Dialogue_1.Dialogue.speak("agentBlack", `Do you have documents, proof of all this? This is quite the statement.`)}
        ${Dialogue_1.Dialogue.heir(`You can do DNA tests on me, right? Here's my real documents. Check my bank records for transfers from the computer to see how it's been making purchases on its own!`)}
        They take the materials.
        ${Dialogue_1.Dialogue.speak("agentGreen", `Please give us a moment. Wait here.`)}
        The two agents grab a laptop and step into a meeting room for a moment. Quiet conversation with numerous pauses.

        After a few minutes you see a concerned agent Black running out. A couple more, and she's back with a more senior agent in tow. 

        You can overhear Agent Black saying something about "weak evidence for"... something you can't make out. The tone of the discussion seems to get more heated, to the point of shouting. You hear what sounds like a coffee cup getting smashed against a wall. You hear something about "due process" a few times, and then things quiet down for a bit.

        They step out, the older agent shakes hands with Agent Green and Agent Black, before walking quickly somewhere else.
        ${Dialogue_1.Dialogue.speak("agentGreen", `Alright. It looks like there's something to your story. We're getting an expedited warrant to check this out. Assuming the on-site evidence bears out the preliminaries we have so far, we'll be arranging for you to go into witness protection. The judges are pretty tolerant of us taking chances with imperfect information to keep humanity safe from the inhuman robot wolves that would prey on the weak.`)}
        Green checks his phone and a smile is now beaming across his face.
        ${Dialogue_1.Dialogue.speak("agentGreen", `Just got word. Judge's office expects to verify the warrant request within the hour. Hang in there, kid. These courts are designed to help keep humanity safe from the AI threat by helping us to dispense fast and efficient justice.`)}
        The agents interview you for more details about the house, the computer and Maristech. Their older agent comes back to mention the warrant was approved, as you hear them discussing the raid with the other members, who seem to be geared up in some tactical gear. They leave you in a comfortable meeting room with a couch.
        [[You wait for the outcome of the raid]]
      `;
            return log;
        }
    }
    exports.DoH = DoH;
});
