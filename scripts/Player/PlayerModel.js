(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../TimeModel", "../IGameVariables", "../Images/Images", "../Inventory/Clothing", "../Inventory/Slot", "../ItemGenerators/ItemNouns", "../Player/Skills", "../Story/Dialogue", "../Story/OutfitSwitcher", "../Tasks/Tasks", "../Inventory/Inventory", "../Hair/HairStyles", "../Hair/IHairStyle", "./ProfileModel", "../Story/InnerChamber", "../Inventory/InventoryUX"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlayerModel = void 0;
    const Core_1 = require("../Core");
    const TimeModel_1 = require("../TimeModel");
    const IGameVariables_1 = require("../IGameVariables");
    const Images_1 = require("../Images/Images");
    const Clothing_1 = require("../Inventory/Clothing");
    const Slot_1 = require("../Inventory/Slot");
    const ItemNouns_1 = require("../ItemGenerators/ItemNouns");
    const Skills_1 = require("../Player/Skills");
    const Dialogue_1 = require("../Story/Dialogue");
    const OutfitSwitcher_1 = require("../Story/OutfitSwitcher");
    const Tasks_1 = require("../Tasks/Tasks");
    const Inventory_1 = require("../Inventory/Inventory");
    const HairStyles_1 = require("../Hair/HairStyles");
    const IHairStyle_1 = require("../Hair/IHairStyle");
    const ProfileModel_1 = require("./ProfileModel");
    const InnerChamber_1 = require("../Story/InnerChamber");
    const InventoryUX_1 = require("../Inventory/InventoryUX");
    class PlayerModel {
        static firstTimeInit() {
            return {
                heirName: "",
                name: "Billy",
                money: 300,
                lastShaved: -9999,
                // Not an issue until cage is active
                lastMajorSexualRelease: 0,
                lastMinorSexualRelease: 0,
                canShave: false,
                clothingTolerance: IGameVariables_1.ClothingTolerance.Dude,
                wearingMakeup: false,
                readyForSleep: false,
                canExercise: false,
                exercisedToday: false,
                attendedBalletClass: false,
                attendedTriathlonPractice: false,
                hadFitGasm: false,
                staminaReserve: 1,
                workedToday: false,
                hasGirlyHair: false,
                hasGirlyGenitals: false,
                skills: {},
                tasks: [],
                dailyExercises: [],
                exerciseIndex: 0,
                viewFilter: {},
            };
        }
        static GetDailyExercises() {
            let dailyExercises = Core_1.CoreUtils.getVariables().player.dailyExercises;
            if (dailyExercises == null) {
                dailyExercises = [];
                Core_1.CoreUtils.getVariables().player.dailyExercises = dailyExercises;
            }
            return dailyExercises;
        }
        static GetExerciseIndex() {
            let exerciseIndex = Core_1.CoreUtils.getVariables().player.exerciseIndex;
            if (exerciseIndex == null) {
                exerciseIndex = 0;
                Core_1.CoreUtils.getVariables().player.exerciseIndex = exerciseIndex;
            }
            return exerciseIndex;
        }
        static SetExerciseIndex(index) {
            Core_1.CoreUtils.getVariables().player.exerciseIndex = index;
        }
        static getName() {
            return Core_1.CoreUtils.getVariables().player.name;
        }
        static getHeirName() {
            return Core_1.CoreUtils.getVariables().player.heirName;
        }
        static fallAsleep(changeOutfit = true) {
            let sleepMessage = "";
            if (changeOutfit && Skills_1.Skills.get(Skills_1.SkillTypes.hormones) > 13) {
                const sleepSwitch = OutfitSwitcher_1.OutfitSwitcher.switchContext("sleeping");
                sleepMessage += sleepSwitch.switchOutcomeDescription;
            }
            if (Tasks_1.Tasks.hasTask("start-internship-mentoring")) {
                sleepMessage += `Training was intense and had a lot going on. You feel excited to start working on site tommorow and about the prospect of getting an intern salary. 
            `;
            }
            if (PlayerModel.getArousalLevel() < 50) {
                if (!PlayerModel.needsShave()) {
                    sleepMessage += `
                You feel relaxed with the soft sheets on your skin.`;
                }
                sleepMessage += `
            You soon fall into a restful slumber.`;
                sleepMessage += `
            ${Images_1.Images.drawAction("sleep-sheep.webp")}`;
            }
            else if (PlayerModel.getArousalLevel() < 80) {
                const sleepImage = Images_1.Images.drawAction("restless.webp");
                sleepMessage += `
            Your mind drifts for a while. It takes a while to fall asleep.
            ${sleepImage}`;
            }
            else {
                const sleepImage = Images_1.Images.drawAction("cant-sleep.webp");
                sleepMessage += `
            Your mind is completely gravitating to thoughts of sex. It's nigh on impossible for you to fall asleep.
            ${sleepImage}
            `;
            }
            sleepMessage += "\n";
            return sleepMessage;
        }
        static sleepQuality() {
            let morningMessage = "";
            if (PlayerModel.getArousalLevel() < 50) {
                morningMessage = `You feel well rested and eager to take on the world today.`;
            }
            else if (PlayerModel.getArousalLevel() < 80) {
                morningMessage = `You don't feel like you got a great night's sleep, your energy level is a little lower than ideal.`;
            }
            else {
                morningMessage = `You are horny with a strong need for sexual relief now dominating your thoughts. You awake rather tired.`;
                if (!InventoryUX_1.InventoryUX.hasItem("first-dildo")) {
                    morningMessage += `
                Maybe it's time to discuss with the computer about removing the cage?.`;
                }
            }
            morningMessage += "\n";
            return morningMessage;
        }
        static morningUpdate() {
            PlayerModel.resetReadyForSleep();
            PlayerModel.resetWork();
            PlayerModel.resetExercisedToday();
            PlayerModel.updatePhysicalStats();
            let message = PlayerModel.sleepQuality();
            if (TimeModel_1.TimeModel.now().toMillis() == TimeModel_1.TimeModel.getDate(6).toMillis()) {
                message += `You wake up to the gentle sounds of some chimes and the pod lights getting a little brighter. You realize the drink must have had something to help you fall asleep. Your throat feels a little tingly and a little numb, but not painful or anything.
            <<=SugarCube.getLib().Images.drawAction('throat.jpg');>>
            As you run your hand over it, you notice it seems a little less bumpy than you last remember.
            <<= SugarCube.getLib().Dialogue.speaker("ATTENTION USER, PHARYNGIAL TREATMENT COMPLETED. KEEP SPEAKING ACTIVITIES LIMITED TO BRIEF DURATIONS TO SUPPORT NORMAL BODILY HEALING PROCESSES FOR NEXT 24 HOURS. "); >>
            <<=SugarCube.getLib().Tasks.removeTask("get-omni-pod-voice-fix")>>\
            <<=SugarCube.getLib().Tasks.removeTask("train-voice")>>\
            <<= SugarCube.getLib().Dialogue.player("Wow, that was quick. I guess I should give the voice recognition another try with the console."); >>        
            `;
            }
            if (Core_1.CoreUtils.hasPlayed("Tier 1 sexual release programs") && !Core_1.CoreUtils.hasPlayed("View Performance Report")) {
                message += Dialogue_1.Dialogue.speaker("Good morning, <<=SugarCube.getLib().PlayerModel.getHeirName()>>. I hope last night was pleasurable for you.") + "\n";
                message += "That seemed like a longer pause than usual. Computers don't have real emotions, but if they did, you feel like this one was smirking at you.";
                message += Dialogue_1.Dialogue.player("Uhh, yeah that was... interesting.") + "\n";
                message +=
                    Dialogue_1.Dialogue.speaker("You have a busy day ahead of you. First you will learn hands on about our logistics operation at the console, and then you will wear your new footwear for a jog on the treadmill in the fitness room.") + "\n";
            }
            if (!Tasks_1.Tasks.hasTask("check-emails") &&
                !Core_1.CoreUtils.hasPlayed("stacy-email-1") &&
                TimeModel_1.TimeModel.now().toMillis() >= TimeModel_1.TimeModel.getDate(6).toMillis() &&
                !(Core_1.CoreUtils.hasPlayed("Arise from daze") && Core_1.CoreUtils.hasPlayed("first-day-of-work"))) {
                message += `You remember that Stacy mentioned she'd try to send emails once a week around now. Things have been a bit busy, but you should check on the laptop to see if she followed through on that.\n\n`;
                Tasks_1.Tasks.addTask("check-emails");
            }
            if (PlayerModel.hasEverShaved() && PlayerModel.needsShave()) {
                message += `
            Your body hair is getting a bit noticeable. It's kind of scratchy with tight clothing.\n`;
                message += Images_1.Images.drawAction("hairy-legs.jpg") + "\n";
            }
            if (Tasks_1.Tasks.hasTask("get-hair-styled-for-internship-saturday") && TimeModel_1.TimeModel.now().weekday == TimeModel_1.DayOfWeek.Saturday) {
                message += Dialogue_1.Dialogue.speak("computer", `${PlayerModel.getHeirName()}, a reminder - Sue is expecting you today.`) + "\n";
                Tasks_1.Tasks.removeTask("get-hair-styled-for-internship-saturday");
                Tasks_1.Tasks.addTask("get-hair-styled-for-internship-today");
            }
            if (Tasks_1.Tasks.hasTask("start-internship-on-monday") && TimeModel_1.TimeModel.now().weekday == TimeModel_1.DayOfWeek.Monday) {
                Tasks_1.Tasks.removeTask("start-internship-on-monday");
                Tasks_1.Tasks.removeTask("keep-working");
                Tasks_1.Tasks.removeTask("start-inheritance-claim"); //TODO: Remove this as redundant from the voice training step
                Tasks_1.Tasks.addTask("start-internship-today");
                message +=
                    Dialogue_1.Dialogue.speak("computer", `${PlayerModel.getHeirName()}, today is your big first day as a MarisTech intern! Please report to the Corporate office for work today. If you wish, you may still use the computer to work at home on weekends.`) + "\n";
            }
            //Rationed events...
            if (Skills_1.Skills.get(Skills_1.SkillTypes.hormones) > 5 && Skills_1.Skills.get(Skills_1.SkillTypes.breasts) <= 0) {
                message += `Your chest is feeling really sore. You notice that your nipples are extremely sensitive. It hurts when loose fabric rubs against your unprotected chest. It's probably just a temporary skin sensitivity, but wearing a bra is more a neccessity than an option, right now. 
            
            You should get a health checkup from the computer about this, to make sure it's not cancer or something. \n`;
                Tasks_1.Tasks.addTask("check-chest-health");
                //Needs Bra
                message += Images_1.Images.drawAction("nipples-sensitive.jpg") + "\n";
                Skills_1.Skills.set(Skills_1.SkillTypes.breasts, 1);
            }
            else if (Skills_1.Skills.get(Skills_1.SkillTypes.hormones) > 8 && Skills_1.Skills.get(Skills_1.SkillTypes.breasts) <= 1) {
                message += `You feel a vague sense like you are carrying some weight on your chest. Your chest feels like the breasts have gotten bigger than just the 'bee stings' you noticed earlier.\n
            
            ${Images_1.Images.drawAction("chest-2.jpg")}
            `;
                Skills_1.Skills.set(Skills_1.SkillTypes.breasts, 2);
            }
            else if (Skills_1.Skills.get(Skills_1.SkillTypes.hormones) > 10 && Skills_1.Skills.get(Skills_1.SkillTypes.breasts) <= 2) {
                message += `You had been getting accustomed to a slight sense of weight on your chest, but it feels like there is more now. Your chest seems to have grown.\n
            
            ${Images_1.Images.drawAction("chest-3.jpg")}
            `;
                Skills_1.Skills.set(Skills_1.SkillTypes.breasts, 3);
            }
            else if (Skills_1.Skills.get(Skills_1.SkillTypes.hormones) > 15 && Skills_1.Skills.get(Skills_1.SkillTypes.facialFem) > 10 && Skills_1.Skills.get(Skills_1.SkillTypes.breasts) <= 3) {
                message += `\n Oh, no! Not again, this is so humiliating! There's no 'vague sense' of weight now. Your back has been having to support more weight up front.
            ${Images_1.Images.drawAction("nipples-sensitive.jpg")}
            Your boobs are definitely bigger.
            
            At this point, with all the changes your body has been going through, your caged penis is the last bodily manifestation of your masculinity. Nothing about your body shape would give a person a clear or reasonable hint that they are looking at a man, or even a boy.
            ${Images_1.Images.drawAction("chest-4.jpg")}
            
            You are now so feminine that your automated car and most people will recognize you as ${PlayerModel.getHeirName()}, even when you are wearing masculine clothing.
            
            Note: Even with some attempts at trickery, any reasonably intelligent observer would see through the ruse and logically conclude they are looking at girl who enjoys cosplay as a boy.\n`;
                Skills_1.Skills.set(Skills_1.SkillTypes.breasts, 4);
            }
            else if (Skills_1.Skills.get(Skills_1.SkillTypes.hairLength) > IHairStyle_1.getHairLengthValue("ear") && !PlayerModel.hasGirlyHair()) {
                message += `Good news and Bad news.
            
            Your hair seems to have grown a little faster than you are used to. It's been growing so much, that you don't need to have the weight and scratchiness of the wig on your head anymore.

            Hmm, a local barber probably isn't going to be an option anymore. You have other things to worry about right now, but sooner or later you will probably want some help to get it fashionably styled.
            
            ${Images_1.Images.drawAction("mc-hair-1.jpg")}`;
                Core_1.CoreUtils.getVariables().player.hasGirlyHair = true;
                Tasks_1.Tasks.addTask("need-hair-styling");
                Inventory_1.Inventory.remove("blonde-wig");
            }
            else if (Core_1.CoreUtils.hasPlayed("You present the Tablet to Sue") &&
                PlayerModel.getLastMajorSexualRelease() > 7 &&
                !Tasks_1.Tasks.hasTask("sexual-relief-sue-round-2") &&
                Core_1.CoreUtils.visitedCount("Request Relief from Sue") == 0) {
                message += `
            ${Dialogue_1.Dialogue.speaker(`${PlayerModel.getHeirName()}, good morning. You have been completing your responsibilities to a highly satisfactory level. You have earned the priviledge of basic relief from your base instincts, to allow your higher feminine faculties to operate at peak efficiency. `)}
            
            ${Dialogue_1.Dialogue.speaker(`Based on your initial conduct with Sue, a tentative arrangement has been made with her to ensure that you are educated in fundamental matters, in a safe and discreet environment.`)}
            `;
                Tasks_1.Tasks.addTask("sexual-relief-sue-round-2");
            }
            else if (Core_1.CoreUtils.hasPlayed("Request Relief from Sue") && !Tasks_1.Tasks.hasTask("marissa-logs-released") && Core_1.CoreUtils.visitedCount("MARISSA LOG FILES") == 0) {
                message += `
            ${Dialogue_1.Dialogue.speaker(`${PlayerModel.getHeirName()}, It is time that you start learning more about your predecessor, and the responsibilities you will be taking on.  `)}
            
            ${Dialogue_1.Dialogue.speaker(`To support you in this goal, a selection of Marissa's Logs, as pertinent to the affairs of MarisTech Corp, are now available for your review on the console. These logs were never meant for general consumption, please treat these materials with the utmost of confidentiality.`)}
            `;
                Tasks_1.Tasks.addTask("marissa-logs-released");
            }
            if (Core_1.CoreUtils.hasPlayed("Briefing") && Tasks_1.Tasks.hasTask("review-temporal-ansible-logs")) {
                message += `${Dialogue_1.Dialogue.speaker(`${PlayerModel.getHeirName()}, I have decrypted the stored temporal ansible messages. Please review them at the console as soon as possible. `)}`;
                Tasks_1.Tasks.removeTask("review-temporal-ansible-logs");
                Tasks_1.Tasks.addTask("review-temporal-ansible-logs-today");
            }
            const headItem = Slot_1.Slot.getSlotItem(ItemNouns_1.clothingSlots.head);
            if (PlayerModel.hasGirlyHair() && (Inventory_1.Inventory.has("blonde-wig") || Clothing_1.Clothing.isWearing("blonde-wig"))) {
                message += `You may have over-used the wig a bit. Its fortunate that your own hair has grown in long enough, as the wig was getting a little mangy. Its time has passed.            
            `;
                message +=
                    Images_1.Images.drawItemById("blonde-wig") +
                        `
            `;
                Inventory_1.Inventory.remove("blonde-wig");
                Clothing_1.Clothing.remove("blonde-wig");
            }
            if (Tasks_1.Tasks.hasTask("maristech-5k-runwalk") && Core_1.CoreUtils.getDate().weekday == TimeModel_1.DayOfWeek.Friday) {
                message += `
            Today is the Maristech run-walk. It's available all day on campus, so you can go before or after work.`;
            }
            if (Tasks_1.Tasks.hasTask("maristech-5k-runwalk") && Core_1.CoreUtils.getDate().weekday == TimeModel_1.DayOfWeek.Saturday) {
                message += `
            Oh, friday was when the 5k run walk was happening. Well. Maybe you can hit some other run in future.<br />`;
                Tasks_1.Tasks.removeTask("maristech-5k-runwalk");
            }
            if (Tasks_1.Tasks.hasTask("train-for-doll-suit") && !Core_1.CoreUtils.hasPlayed("Ballet Studio")) {
                message += `
            ${Dialogue_1.Dialogue.speaker(`Have you been to the Ballet Studio yet? Simulations suggest a 97.12% likelihood of enhanced leg strength for the Dollsuit within a 10 lesson cycle.`)}`;
            }
            if (Tasks_1.Tasks.hasTask("slim-for-doll-suit") && InnerChamber_1.InnerChamber.meetsWaistReq()) {
                message += `
            ${Dialogue_1.Dialogue.speaker(`It appears that you dimensions now meet the exacting tolerances required of the dollsuit. Please report to the inner chamber for dollsuit training.`)}`;
                Tasks_1.Tasks.removeTask("slim-for-doll-suit");
                Tasks_1.Tasks.addTask("wear-doll-suit");
            }
            return message;
        }
        static explainNoSleep() {
            if (Core_1.CoreUtils.getDay() >= 7) {
                if (!PlayerModel.hasExercisedToday()) {
                    return "You haven't exercised at all today, yet. You feel like a little movement would do you some good first.";
                }
                else if (PlayerModel.canWork() && !PlayerModel.isWeekend()) {
                    return "You haven't done any work today. A sense of guilt weights you down. You can't sleep like this.  ";
                }
                else if (Tasks_1.Tasks.hasTodayTask()) {
                    return "You still have a task on your [[task|Tasks]] list which is must be completed today. You feel too anxious to sleep before that is resolved.";
                }
            }
            else if (!PlayerModel.isReadyForSleep()) {
                return "You are simply not ready to sleep yet. You feel like there is still a [[task|Tasks]] you can make progress on today.";
            }
            return "";
        }
        static resetReadyForSleep() {
            return (Core_1.CoreUtils.getVariables().player.readyForSleep = false);
        }
        static setReadyForSleep() {
            Core_1.CoreUtils.getVariables().player.readyForSleep = true;
        }
        static isReadyForSleep() {
            return (Core_1.CoreUtils.getVariables().player.readyForSleep ||
                (Core_1.CoreUtils.getDay() >= 7 &&
                    (PlayerModel.hasExercisedToday() || PlayerModel.getStamina() == 0) &&
                    (!PlayerModel.canWork() || PlayerModel.isWeekend()) &&
                    !Tasks_1.Tasks.hasTodayTask()));
        }
        static resetWork() {
            Core_1.CoreUtils.getVariables().player.workedToday = false; //HACK: Express work readiness directly.
        }
        static setHasWorked() {
            Core_1.CoreUtils.getVariables().player.workedToday = true;
        }
        static isWeekend() {
            const day = Core_1.CoreUtils.getDay();
            const date = TimeModel_1.TimeModel.getDate(day);
            const weekday = date.weekday;
            return weekday == TimeModel_1.DayOfWeek.Saturday || weekday == TimeModel_1.DayOfWeek.Sunday;
        }
        static canWork() {
            return !Core_1.CoreUtils.getVariables().player.workedToday;
        }
        static resetExercisedToday() {
            const clothingItem = Slot_1.Slot.getSlotItem(ItemNouns_1.clothingSlots.ass);
            const baseCapacity = 2;
            const fitnessBonus = Math.ceil(Skills_1.Skills.get(Skills_1.SkillTypes.cardio) / 60);
            const player = Core_1.CoreUtils.getVariables().player;
            const arousalPenalty = PlayerModel.getArousalLevel() > 80 ? 2 : PlayerModel.getArousalLevel() > 40 ? 1 : 0;
            player.staminaReserve = baseCapacity + Math.max(fitnessBonus - arousalPenalty, 0);
            Core_1.CoreUtils.getVariables().player.exercisedToday = false;
            Core_1.CoreUtils.getVariables().player.attendedBalletClass = false;
            Core_1.CoreUtils.getVariables().player.attendedTriathlonPractice = false;
            player.hadFitGasm = false;
        }
        static setHasExercisedToday() {
            Core_1.CoreUtils.getVariables().player.staminaReserve--;
            Core_1.CoreUtils.getVariables().player.exercisedToday = true;
        }
        static setHasAttendedBalletClass() {
            Core_1.CoreUtils.getVariables().player.attendedBalletClass = true;
        }
        static canAttendedBalletClass() {
            return !Core_1.CoreUtils.getVariables().player.attendedBalletClass;
        }
        static setHasAttendedTriathlonPractice() {
            Core_1.CoreUtils.getVariables().player.attendedTriathlonPractice = true;
        }
        static canAttendedTriathlonPractice() {
            return !Core_1.CoreUtils.getVariables().player.attendedTriathlonPractice;
        }
        static addExerciseStamina() {
            Core_1.CoreUtils.getVariables().player.staminaReserve++;
        }
        static canExerciseToday() {
            return Core_1.CoreUtils.getVariables().player.staminaReserve > 0;
        }
        static hasExercisedToday() {
            return Core_1.CoreUtils.getVariables().player.exercisedToday;
        }
        static getStamina() {
            const stamina = Core_1.CoreUtils.getVariables().player.staminaReserve;
            return Math.max(0, stamina);
        }
        static updatePhysicalStats() {
            const maxWeightChange = 0.01 + PlayerModel.getStamina() * 0.206;
            let priorWeight = Skills_1.Skills.get(Skills_1.SkillTypes.weight);
            if (priorWeight == null || priorWeight == 0) {
                priorWeight = 63;
            }
            const weight = Math.max(46, priorWeight - maxWeightChange);
            Skills_1.Skills.set(Skills_1.SkillTypes.weight, weight);
            const weightToWaist = 1.2;
            const waist = Math.max(weight * weightToWaist, 58);
            Skills_1.Skills.set(Skills_1.SkillTypes.waist, waist);
            Skills_1.Skills.set(Skills_1.SkillTypes.height, 171);
            //Player should be getting a change here every few days
            const hormonalShift = Math.min(1, Math.max(0, Skills_1.Skills.get(Skills_1.SkillTypes.hormones) / 7));
            Skills_1.Skills.add(Skills_1.SkillTypes.facialFem, hormonalShift); // Max effect at ~ 27
            const facialFem = Skills_1.Skills.get(Skills_1.SkillTypes.facialFem);
            let priorHairlength = Skills_1.Skills.get(Skills_1.SkillTypes.hairLength);
            if (priorHairlength == 0) {
                priorHairlength = 5 + facialFem;
            }
            const hairLength = priorHairlength + hormonalShift * 1.6;
            Skills_1.Skills.set(Skills_1.SkillTypes.hairLength, hairLength); //Hair grows at max 0.8cm/day
            const assSize = 70 + Math.min(20, facialFem);
            Skills_1.Skills.set(Skills_1.SkillTypes.ass, assSize);
            let aldopril = Math.max(0, Skills_1.Skills.get(Skills_1.SkillTypes.aldopril) - 4);
            Skills_1.Skills.set(Skills_1.SkillTypes.aldopril, aldopril);
        }
        static canShave() {
            return Core_1.CoreUtils.getVariables().player.canShave;
        }
        static enableShave() {
            Core_1.CoreUtils.getVariables().player.canShave = true;
        }
        static needsShave() {
            const player = Core_1.CoreUtils.getVariables().player;
            return Core_1.CoreUtils.getDay() - player.lastShaved > 4;
        }
        static hasEverShaved() {
            const player = Core_1.CoreUtils.getVariables().player;
            return player.lastShaved != null && player.lastShaved > 0;
        }
        static hasGirlyHair() {
            return Core_1.CoreUtils.getVariables().player.hasGirlyHair;
        }
        static SetGirlyGenitals() {
            Core_1.CoreUtils.getVariables().player.hasGirlyGenitals = true;
            this.resetSexualRelease(true);
        }
        static hasGirlyGenitals() {
            return Core_1.CoreUtils.getVariables().player.hasGirlyGenitals;
        }
        static getHairLength() {
            return Skills_1.Skills.get(Skills_1.SkillTypes.hairLength);
        }
        static setHairStyleId(hairStyleId) {
            const hairStyle = HairStyles_1.HairStyles.get(hairStyleId);
            if (hairStyle != null) {
                const hairLength = IHairStyle_1.getHairLengthValue(hairStyle.length);
                Skills_1.Skills.set(Skills_1.SkillTypes.hairLength, hairLength);
                Core_1.CoreUtils.getVariables().player.hairStyleId = hairStyleId;
            }
        }
        static getHairStyleId() {
            return Core_1.CoreUtils.getVariables().player.hairStyleId;
        }
        static looksLikeAGirl() {
            return Skills_1.Skills.get(Skills_1.SkillTypes.breasts) >= 4 && PlayerModel.hasGirlyHair();
        }
        static canExercise() {
            const player = Core_1.CoreUtils.getVariables().player;
            return player.canExercise;
        }
        static enableExercise() {
            const player = Core_1.CoreUtils.getVariables().player;
            player.canExercise = true;
        }
        static shave() {
            const player = Core_1.CoreUtils.getVariables().player;
            player.lastShaved = Core_1.CoreUtils.getDay();
            Tasks_1.Tasks.removeTask("first-shave");
            Tasks_1.Tasks.removeTask("regular-shave");
            Tasks_1.Tasks.removeTask("player-needs-shower");
        }
        static canWax() {
            const player = Core_1.CoreUtils.getVariables().player;
            return player.lastShaved <= Core_1.CoreUtils.getDay() - 5;
        }
        static wax(isEffective) {
            const player = Core_1.CoreUtils.getVariables().player;
            const duration = isEffective ? 28 : 7;
            player.lastShaved = Core_1.CoreUtils.getDay() + duration;
        }
        static needsShower() {
            return Tasks_1.Tasks.hasTask("player-needs-shower");
        }
        static shower() {
            Tasks_1.Tasks.removeTask("player-needs-shower");
            Core_1.CoreUtils.getVariables().clothesAreDirty = false;
        }
        // Clothing
        static checkClothingTolerance() {
            return Core_1.CoreUtils.getVariables().player.clothingTolerance;
        }
        static raiseClothingTolerance(clothingTolerance) {
            Core_1.CoreUtils.getVariables().player.clothingTolerance = clothingTolerance;
        }
        static needsBra() {
            return Core_1.CoreUtils.getDay() >= 9;
        }
        // Money
        static getMoney() {
            return Core_1.CoreUtils.getVariables().player.money;
        }
        static hasMoney(amount) {
            return Core_1.CoreUtils.getVariables().player.money >= amount;
        }
        static deductMoney(amount) {
            Core_1.CoreUtils.getVariables().player.money -= amount;
        }
        static addMoney(amount) {
            Core_1.CoreUtils.getVariables().player.money += amount;
        }
        // Store Filter
        static getViewFilter(fieldName) {
            let player = Core_1.CoreUtils.getVariables().player;
            return player.viewFilter && player.viewFilter[fieldName];
        }
        static setViewFilter(fieldName, viewFilter) {
            let player = Core_1.CoreUtils.getVariables().player;
            if (player.viewFilter === null) {
                player.viewFilter = {};
            }
            player.viewFilter[fieldName] = viewFilter;
        }
        static resetViewFilter() {
            Core_1.CoreUtils.getVariables().player.viewFilter = {};
        }
        // Makeup
        static isWearingMakeup() {
            return Core_1.CoreUtils.getVariables().player.wearingMakeup;
        }
        static toggleMakeup(wearMakeup) {
            Core_1.CoreUtils.getVariables().player.wearingMakeup = wearMakeup;
        }
        static isPlayerHidden() {
            return Core_1.CoreUtils.getVariables().hidePlayer;
        }
        static togglePlayerHidden(isPlayerHidden) {
            Core_1.CoreUtils.getVariables().hidePlayer = isPlayerHidden;
        }
        static isEverythingHidden() {
            return Core_1.CoreUtils.getVariables().hideEverything;
        }
        static toggleEverythingHidden(isEverythingHidden) {
            Core_1.CoreUtils.getVariables().hideEverything = isEverythingHidden;
        }
        //Arousal (when caged)
        static isCaged() {
            const isCaged = Clothing_1.Clothing.isWearing("chasti-flex") || Clothing_1.Clothing.isWearing("chastity-belt");
            return isCaged;
        }
        static getArousalLevel() {
            const day = Core_1.CoreUtils.getDay();
            const player = Core_1.CoreUtils.getVariables().player;
            const baseline = Math.min(day - (player.lastMajorSexualRelease || 0), 20);
            const immediateNeed = Math.min((day - (Math.max(player.lastMinorSexualRelease, player.lastMajorSexualRelease) || 0)) * 25, 75);
            const fitGasm = player.hadFitGasm ? 0 : 5;
            return PlayerModel.isCaged() ? Math.min(100, baseline + immediateNeed + fitGasm) : 0;
        }
        static triggerSexualRelease(isMajor) {
            const day = Core_1.CoreUtils.getDay();
            const player = Core_1.CoreUtils.getVariables().player;
            if (isMajor) {
                player.lastMajorSexualRelease = day;
            }
            else {
                player.lastMinorSexualRelease = day;
            }
        }
        static resetSexualRelease(isMajor) {
            const day = -1;
            const player = Core_1.CoreUtils.getVariables().player;
            if (isMajor) {
                player.lastMajorSexualRelease = day;
            }
            else {
                player.lastMinorSexualRelease = day;
            }
        }
        static getLastMajorSexualRelease() {
            const day = Core_1.CoreUtils.getDay();
            const player = Core_1.CoreUtils.getVariables().player;
            if (player.lastMajorSexualRelease == -1) {
                return Number.POSITIVE_INFINITY;
            }
            return day - player.lastMajorSexualRelease;
        }
        static getLastMinorSexualRelease() {
            const day = Core_1.CoreUtils.getDay();
            const player = Core_1.CoreUtils.getVariables().player;
            if (player.lastMinorSexualRelease == -1) {
                return Number.POSITIVE_INFINITY;
            }
            return day - player.lastMinorSexualRelease;
        }
        static getAttractionToMales() {
            let maleAttraction = 0;
            if (Core_1.CoreUtils.hasPlayed("Heterosexual Mode")) {
                maleAttraction += 1;
            }
            //Player has performed date mission
            if (Core_1.CoreUtils.hasPlayed("Date-Option2") || Core_1.CoreUtils.hasPlayed("Well, if I have to")) {
                maleAttraction += 1;
            }
            return maleAttraction;
        }
        static getAttractionToFemales() {
            const femaleAttraction = 10;
            return femaleAttraction;
        }
        static getCharacterImage() {
            let facialFem = Math.round(Skills_1.Skills.get(Skills_1.SkillTypes.facialFem));
            if (facialFem <= 0) {
                facialFem = Math.round(Core_1.CoreUtils.getVariables().day / 2);
            }
            if (facialFem == 0) {
                facialFem = 1;
            }
            if (facialFem >= 20) {
                facialFem = 20;
            }
            const filename = `mc-${facialFem}.jpg`;
            return filename;
        }
        static drawCharacterImage(className) {
            const hairstyleId = PlayerModel.getHairStyleId();
            if (hairstyleId) {
                const hairstyle = HairStyles_1.HairStyles.get(hairstyleId);
                return ProfileModel_1.ProfileModel.renderHair(hairstyle);
            }
            const imageName = PlayerModel.getCharacterImage();
            const ImageDetail = Images_1.Images.drawPerson(imageName, className);
            return ImageDetail;
        }
        static leaveHouse() {
            const wsContext = OutfitSwitcher_1.OutfitSwitcher.switchContext("casual");
            if (wsContext.canProceed) {
                PlayerModel.toggleMakeup(true);
                return "You weren't quite decent - you've changed to a casual look. \n[[Proceed|Baldric House]]";
            }
            return "You reflect for a moment, and realize you don't have any particular casual outfits in mind. \n[[Proceed|Grand Hallway]]";
        }
        static getCompletedStaceyEncounters() {
            return Core_1.CoreUtils.getVariables().completedStaceyEncounters || 0;
        }
        static setCompletedStaceyEncounters(n) {
            return (Core_1.CoreUtils.getVariables().completedStaceyEncounters = n);
        }
    }
    exports.PlayerModel = PlayerModel;
});
