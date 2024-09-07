(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateTasks = exports.appendItem = void 0;
    function appendItem(dictionary, item) {
        dictionary[item.id] = item;
    }
    exports.appendItem = appendItem;
    function generateTasks() {
        const tasks = {};
        appendItem(tasks, { id: "drop-luggage", description: "Drop off your luggage in the guest bedroom." });
        appendItem(tasks, { id: "explore", description: "It's time to start exploring!" });
        appendItem(tasks, { id: "check-pawn-ticket", description: "I should see what the story on the pawn ticket is." });
        appendItem(tasks, { id: "can-the-key-be-used", description: "Does the key have a use somewhere in the house?" });
        appendItem(tasks, { id: "check-secret-room", description: "This place has a secret room! What's that about?" });
        appendItem(tasks, { id: "house-has-clothes", description: "Does Stacy have clothes that would work for the door?" });
        appendItem(tasks, { id: "clothing-needs-cleaning", description: "Some clothing needs to be cleaned" });
        appendItem(tasks, { id: "player-needs-shower", description: "I should get a shower", isHidden: true });
        appendItem(tasks, { id: "wear-stacy-clothes", description: "Will Stacy's clothes work at the door? One way to find out." });
        appendItem(tasks, { id: "check-adult-store", description: "The local strip mall might have a wig or something you can use for the door." });
        appendItem(tasks, { id: "first-shave", description: "Marissa's letter said the claimant would need to be shaved to get past the door." });
        appendItem(tasks, { id: "regular-shave", description: "You are starting to feel some stubble. Maybe it's time for another shave?" });
        const beatScanner = "how-to-beat-the-scanner";
        appendItem(tasks, { id: beatScanner, description: "This place has hidden treasure. There has to be a way to trick the scanner to get it?" });
        appendItem(tasks, { id: "have-hair", description: "The door is looking to see the claimant in a hairstyle like Marissa's, in the picture." });
        appendItem(tasks, { id: "have-makeup", description: "The door is looking to see the claimant wearing makeup, as Marissa mentioned." });
        appendItem(tasks, {
            id: "have-makeup-today",
            description: "The door is looking to see the claimant wearing makeup, as Marissa mentioned. You feel like today is the day this is going to work!",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "male-presence-bypass",
            description: "The door was too clever for today. There's got to be a way to not have it detect 'your male presence'. Some rest might help. Maybe tommorow you'll crack it.",
        });
        appendItem(tasks, { id: "have-heels", description: "The door is looking to see the claimant wearing sandal heels (without socks) like pictured." });
        appendItem(tasks, { id: "learn-makeup", description: "An online tutorial might help for the makeup." });
        appendItem(tasks, { id: "find-gaff", description: "Sue might have something to help you hide your dick from the door.", requiredToday: true });
        appendItem(tasks, { id: "try-door-with-gaff", description: "Now that you have the gaff, maybe you can get through the door?!", requiredToday: true });
        appendItem(tasks, { id: "tasks-for-pod-area", description: "Dev note: Tasks for the pod area are being added. Gameplay exists, but the tasks will be catching up." });
        appendItem(tasks, {
            id: "start-inheritance-claim",
            description: "Now that you are past the door, maybe the console in the inner room can help with arranging the inheritance claim.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "start-health-tracking",
            description: "The inner chamber console needs you to provide health info.",
        });
        appendItem(tasks, {
            id: "check-chest-health",
            description: "Your chest is feeling really sensitive. You should get a health diagnosis in the pod to make sure nothing is wrong.",
        });
        appendItem(tasks, {
            id: "get-motivator-plug",
            description: "The computer has a surprise for you at the health screen of the console.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "use-motivator-plug",
            description: "The computer wants you using the motivator plug.",
        });
        appendItem(tasks, {
            id: "continue-motivator-plug",
            description: "The computer now wants you to continue your daily exercises with the motivator plug present, to 'enhance your prompt bodily development'...",
        });
        appendItem(tasks, {
            id: "register-voice",
            description: "The inner chamber console needs you to register your voice to control the systems.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "train-voice",
            description: "You need to complete some voice training at the inner chamber console, before you can register as a user.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "register-voice-after-training",
            description: "Now that you've had voice training, you can try getting the voice security stuff for the inheritance going.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "get-omni-pod-checkup",
            description: "The omni pod seems to need to do an initial health checkup and ensure good health of the claimant.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "get-omni-pod-voice-fix",
            description: "The computer mentioned the omni pod could help with your voice problem.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "console-exercise-guidance",
            description: "Following from your health check, the pod wants you to consult the console for an fitness asssessment guidance.",
        });
        appendItem(tasks, {
            id: "start-health-assessment",
            description: "The computer would like to run some tests of your fitness to process your claim.",
        });
        appendItem(tasks, {
            id: "need-running-shoes",
            description: "To go running, computer needs you get some running shoes from the local mall. At least they are pre-paid.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "first-elliptical",
            description: "Due to your 'agoraphobia' the computer wants you to do a 30 minute jog on the in-house gym elliptical. This should be a piece of cake.",
        });
        appendItem(tasks, {
            id: "improve-conditioning",
            description: "The computer would like you to keep actively exercising to improve your physical fitness.",
        });
        appendItem(tasks, {
            id: "improve-flexibility",
            description: "The computer would like you to continue working on your cardio, but also start working on maximizing flexibility to become physically ready for the demands of your inheritance.",
        });
        appendItem(tasks, {
            id: "the-machine-knows",
            description: "The computer knows your secret, and allowed you to continue on the claim process. Feelings of uncertainty float over you.",
        });
        appendItem(tasks, {
            id: "first-day-of-work",
            description: "It looks like the claim is moving ahead! You need to read up on Maristech Logistics Systems, rest in the pod, and use the computer to work remotely for your first day as a trainee.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "work-logistics",
            description: "The computer would like you to keep learning at the logistics job from the console, as the first step in learning about the company.",
        });
        appendItem(tasks, {
            id: "work-domestics",
            description: "As you've proven you can understand the essentials with logistics, the computer would like you to try working on the MarisHome domestic services, from the console.",
        });
        appendItem(tasks, {
            id: "keep-working",
            description: "You've reached a level of competence at logistics and domestic work. The computer wants you to keep working, as you continue with your 'preparations'.",
        });
        appendItem(tasks, {
            id: "keep-working-while-training",
            description: "Your working skill has reached a level which qualifies you for working as a Maristech Intern. Once your physical training meets admission criteria, you will be able to start working on-site.",
        });
        appendItem(tasks, {
            id: "need-drone-license",
            description: "To operate robot-drones, a drone operator license is needed, to stay in compliance with the Butler-Hancock act. The computer has filed for one on your behalf. You just need to go to take your car to the local branch office of the Department of Humanity for an interview and to collect your license. ",
        });
        appendItem(tasks, {
            id: "machine-requires-cage",
            description: "The computer requires you get a chastity cage today, to satisfy Marissa's will. And some bs 'prevent corruption from a masculine' influence, whatever that is supposed to mean. You aren't ready to handle the stress of going out as a girl again, you should go dressed as Billy.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "need-sexual-relief",
            description: "You can't think about anything but sex and the computer isn't letting you remove the cage, and isn't telling you how to deal with this. Maybe Sue could help you come again.",
        });
        appendItem(tasks, {
            id: "train-for-doll-suit",
            description: "You won't be able to walk with the 'doll suit' without some training. Taking ballet lessons will prepare you for the rigors of wearing the suit, and a steady load of daily exercise should get help you get slim enough to squeeze into the petite suit.",
        });
        appendItem(tasks, {
            id: "slim-for-doll-suit",
            description: "Now that your ballet skill is sufficient - a few more days with a steady load of exercise should get help you get slim enough to squeeze to meet the 24 inch waist requirement of the dollsuit.",
        });
        appendItem(tasks, {
            id: "wear-doll-suit",
            description: "You are ready to wear the dollsuit now.",
        });
        appendItem(tasks, {
            id: "meet-stacy-as-drone",
            description: "Is it possible to meet up with Stacey?",
        });
        appendItem(tasks, {
            id: "meet-stacy-again-drone",
            description: "It's possible to meet with Stacey. It would be nice to try that again...",
            pending: true,
        });
        appendItem(tasks, {
            id: "try-aldopril",
            description: "To help improve your dollsuit performance, the computer has suggested that you take some aldopril.",
        });
        appendItem(tasks, {
            id: "need-hair-styling",
            description: "Your hair has grown beyond any typical male hairstyle- it doesn't look well arranged right now, and a typical barber isn't an option now. You know you want to get it styled, but you don't know what you should get.",
        });
        appendItem(tasks, {
            id: "start-internship-on-monday",
            description: "You will need to work on site at the internship. Make sure to save some cash and find a professional outfit to wear to the office! The computer mentioned that Olddorf-Goodman has some clothes options.",
        });
        appendItem(tasks, {
            id: "start-internship-today",
            description: "It's your big day! You need to go to work on site at MarisTech Corporate HQ dressed in a professional outfit!",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "start-internship-mentoring",
            description: "You've started your internship! Now you'll be getting mentored by Jen.",
        });
        appendItem(tasks, {
            id: "maristech-5k-runwalk",
            description: "Women of Maristech has invited you to an on campus 5k run-walkathon for Breast Cancer on Friday. Could be fun. Maybe you'll make some new friends? Participation is $25 for interns.",
        });
        appendItem(tasks, {
            id: "mariella-triathlon-arc",
            description: "Mariella was impressed by your showing at the 5k. She'd like you to train with her for an upcoming Triathlon.",
        });
        appendItem(tasks, {
            id: "mariella-triathlon-arc-start-training",
            description: "Mariella has invited you to come out to the team sessions. 15 sessions should make you competitive.",
            pending: true,
        });
        appendItem(tasks, {
            id: "mariella-triathlon-arc-sign-up-and-get-gear",
            description: "For the triathlon, you will need to get a racing bike and pay for the registration fees. Talk to Mariella to set that stuff up, and get your racer kit.",
        });
        appendItem(tasks, {
            id: "get-hair-styled-for-internship-saturday",
            description: "You will need to get your hair styled on Saturday. Sue has been contacted to help you with the details.",
        });
        appendItem(tasks, {
            id: "get-hair-styled-for-internship-today",
            description: "You will need to get your hair styled today. Sue is expecting you..",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "sexual-relief-sue-round-2",
            description: "Sue and the computer have arranged for you to get another round of 'relief'. The heiress can stop by Sue's shop to take advantage of the opportunity at her leisure.",
        });
        appendItem(tasks, {
            id: "marissa-logs-released",
            description: "The computer has notified you that Marissa's personal logs have been released, to help prepare you for your responsibilities. It would like you to review them promptly",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "check-emails",
            description: "Stacy was planning to send weekly mails your way on Sundays. You need to do check your email as soon as you can.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "need-to-clean-pool",
            description: "So, apparently this house has a pool. That would have been nice to know. You need to clean up any debris and ensure it's properly chlorinated.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "what-is-temporal-ansible",
            description: "What was Marissa talking about with this Temporal Ansible thing? Maybe your manager knows something about that. ",
        });
        appendItem(tasks, {
            id: "go-to-sea-station",
            description: "Dr. F has explained what's going on... Truth is often stranger than fiction. You'll need to take your car to the airport, to go to the Maristech Sea Station to get to the bottom of this. ",
        });
        appendItem(tasks, {
            id: "help-margaret-research-culture prep",
            description: "Sea Station: Margaret has requested your help with her research, to prepare some sample cultures.",
        });
        appendItem(tasks, {
            id: "help-margaret-research-core-analysis",
            description: "Sea Station: Margaret would like you to help handle some requests for core samples data from off-site researchers.",
        });
        appendItem(tasks, {
            id: "scuba-training-theory",
            description: "Sea Station: Margaret will guide you through theory training so you can help her change the ansible transcievers around the station.",
        });
        appendItem(tasks, {
            id: "check-out-dive",
            description: "Sea Station: Margaret will take you out on a check out dive.",
        });
        appendItem(tasks, {
            id: "install-replacement-ansible",
            description: "Sea Station: You need to install the replacement ansible systems in the advanced comms area to cover your official purpose for visiting the station.",
        });
        appendItem(tasks, {
            id: "install-ansible-transceivers",
            description: "Sea Station: Margaret would like some help installing updated ansible transceivers to connect to the station ansible. This can be done after the station ansible is installed. Meet her in the moonpool.",
        });
        appendItem(tasks, {
            id: "support-ansible-transceiver-install",
            description: "Sea Station: Margaret needs some help installing updated ansible transceivers. As you aren't qualified to dive, she wants you to help her coordinate the work from the bridge.",
        });
        appendItem(tasks, {
            id: "remove-old-ansible",
            description: "Sea Station: With the remote ansible upgrades done, you need to remove the old Ansible from Advanced Comms.",
        });
        appendItem(tasks, {
            id: "prepare-to-leave-station",
            description: "Sea Station: You have completed your tasks at the sea station. It is time to go home. Go up to the bridge to arrange a pickup.",
        });
        appendItem(tasks, {
            id: "review-temporal-ansible-logs",
            description: "The computer will want you to review the temporal ansible logs later, once they are processed.",
        });
        appendItem(tasks, {
            id: "review-temporal-ansible-logs-today",
            description: "The computer wants you to review the temporal ansible logs at the console today.",
            requiredToday: true,
        });
        appendItem(tasks, {
            id: "deal-with-problem-exec",
            description: "The computer has discovered a problem with an executive in the company, which you must deal with personally. The computer will provide you more information from the basement console 'Security Briefing'.",
        });
        appendItem(tasks, {
            id: "tg-final-step",
            description: "You feel you've spent a while pretending to be a woman. Perhaps you've had your penis in the cage long enough. The computer can likely help you become a woman in the complete sense. You can discuss the matter from the pod health system.",
        });
        appendItem(tasks, {
            id: "inspect-succession-planning-report",
            description: "The computer wants you to review a succession planning report from the console. (Preview available)",
            pending: true,
        });
        appendItem(tasks, {
            id: "report-computer-to-doh",
            description: "Perhaps the right thing to do is to inform on the computer at the DoH. The stuff it's been up to have likely violated parts of the Butler-Hancock act. Further more, can you be sure that the computer won't humiliate you ever more, and make you into some kind of sex-slave or robot serving some evil plan of AI world domination? You can probably be helped as a victim and informant, to regain your identity as a man, and protect society against these dangerous computers. (If you work in the dollsuit again. You will lose this option)",
        });
        appendItem(tasks, {
            id: "help",
            description: "Perhaps the right thing to do is to inform on the computer at the DoH. The stuff it's been up to have likely violated parts of the Butler-Hancock act. Further more, can you be sure that the computer won't humiliate you ever more, and make you into some kind of sex-slave or robot serving some evil plan of AI world domination? You can probably be helped as a victim and informant, to regain your identity as a man, and protect society against these dangerous computers. (If you work in the dollsuit again. You will lose this option)",
        });
        appendItem(tasks, { id: "watch-miami-vice", description: "A crime movie would be nice right now.", requiredToday: true });
        appendItem(tasks, { id: "watch-batman", description: "An action movie would be nice right now.", requiredToday: true });
        appendItem(tasks, { id: "watch-robin-hood", description: "An adventure movie would be nice for this evening.", requiredToday: true });
        appendItem(tasks, { id: "dust-library", description: "You need to dust the library", requiredToday: true });
        appendItem(tasks, { id: "clean-cinema", description: "You need to clean the cinema", requiredToday: true });
        appendItem(tasks, { id: "clean-grand-hall", description: "You need to tidy up the grand hall.", requiredToday: true });
        return tasks;
    }
    exports.generateTasks = generateTasks;
});
