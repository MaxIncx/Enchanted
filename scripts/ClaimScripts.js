(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./controls/CssLoader", "./controls/ImageOverlay", "./controls/prompt", "./Core", "./Story/Exercises", "./Images/Images", "./Inventory/Clothing", "./Inventory/Inventory", "./Inventory/InventoryUX", "./Inventory/Items", "./Inventory/MirrorUX", "./Inventory/Outfits", "./Inventory/OutfitsAnalyser", "./Inventory/OutfitsExplainer", "./Inventory/Slot", "./Inventory/Slots", "./Inventory/Store", "./ItemGenerators/ItemGenerator", "./ItemGenerators/ItemNouns", "./Navigation/Pathways", "./Player/PlayerModel", "./Player/PlayerView", "./Player/Skills", "./Work/Work", "./Story/Dialogue", "./Story/DoH", "./Story/HousePolicy", "./Story/Sex", "./Tasks/Tasks", "./Tasks/TasksUX", "./Versioning", "./Hair/HairStyles", "./Player/ProfileModel", "./Hair/HairStyleGenerator", "./Story/Laptop", "./Story/InnerChamber", "./Story/Spa", "./Story/OutfitSwitcher", "./Work/WorkModel", "./ImageEffects", "./controls/Toast", "./TimeModel", "./Story/Mood", "./Exercises/ExercisePlanner", "./Work/StationWork", "./Exercises/RunWalk", "./Work/DollsuitWork"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLib = void 0;
    const CssLoader_1 = require("./controls/CssLoader");
    const ImageOverlay_1 = require("./controls/ImageOverlay");
    const prompt_1 = require("./controls/prompt");
    const Core_1 = require("./Core");
    const Exercises_1 = require("./Story/Exercises");
    const Images_1 = require("./Images/Images");
    const Clothing_1 = require("./Inventory/Clothing");
    const Inventory_1 = require("./Inventory/Inventory");
    const InventoryUX_1 = require("./Inventory/InventoryUX");
    const Items_1 = require("./Inventory/Items");
    const MirrorUX_1 = require("./Inventory/MirrorUX");
    const Outfits_1 = require("./Inventory/Outfits");
    const OutfitsAnalyser_1 = require("./Inventory/OutfitsAnalyser");
    const OutfitsExplainer_1 = require("./Inventory/OutfitsExplainer");
    const Slot_1 = require("./Inventory/Slot");
    const Slots_1 = require("./Inventory/Slots");
    const Store_1 = require("./Inventory/Store");
    const ItemGenerator_1 = require("./ItemGenerators/ItemGenerator");
    const ItemNouns_1 = require("./ItemGenerators/ItemNouns");
    const Pathways_1 = require("./Navigation/Pathways");
    const PlayerModel_1 = require("./Player/PlayerModel");
    const PlayerView_1 = require("./Player/PlayerView");
    const Skills_1 = require("./Player/Skills");
    const Work_1 = require("./Work/Work");
    const Dialogue_1 = require("./Story/Dialogue");
    const DoH_1 = require("./Story/DoH");
    const HousePolicy_1 = require("./Story/HousePolicy");
    const Sex_1 = require("./Story/Sex");
    const Tasks_1 = require("./Tasks/Tasks");
    const TasksUX_1 = require("./Tasks/TasksUX");
    const Versioning_1 = require("./Versioning");
    const HairStyles_1 = require("./Hair/HairStyles");
    const ProfileModel_1 = require("./Player/ProfileModel");
    const HairStyleGenerator_1 = require("./Hair/HairStyleGenerator");
    const Laptop_1 = require("./Story/Laptop");
    const InnerChamber_1 = require("./Story/InnerChamber");
    const Spa_1 = require("./Story/Spa");
    const OutfitSwitcher_1 = require("./Story/OutfitSwitcher");
    const WorkModel_1 = require("./Work/WorkModel");
    const ImageEffects_1 = require("./ImageEffects");
    const Toast_1 = require("./controls/Toast");
    const TimeModel_1 = require("./TimeModel");
    const Mood_1 = require("./Story/Mood");
    const ExercisePlanner_1 = require("./Exercises/ExercisePlanner");
    const StationWork_1 = require("./Work/StationWork");
    const RunWalk_1 = require("./Exercises/RunWalk");
    const DollsuitWork_1 = require("./Work/DollsuitWork");
    function fixSaveGame() {
        //V0.10.x -> v0.11.x Compat fix typo
        if (Slots_1.Slots.exists("hoisery")) {
            const item = Slot_1.Slot.getSlotItem("hoisery");
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.hosiery);
            if (item) {
                Clothing_1.Clothing.wear(item.id);
            }
        }
    }
    function initOnLoad() {
        if (Core_1.CoreUtils.getVariables().needsInit) {
            Core_1.CoreUtils.setVariables({
                day: 1,
                havePawnTicket: false,
                innerDoorUnlocked: false,
                canGoToPawn: false,
                player: PlayerModel_1.PlayerModel.firstTimeInit(),
                needsInit: true,
                omniPodDoorClosed: false,
                clothesAreDirty: false,
                inventory: [],
                outfits: [],
                lastOutfit: null,
                pageData: undefined,
                slotNames: [],
                slots: {},
                hidePlayer: undefined,
                hideEverything: undefined,
                completedStaceyEncounters: 0,
            });
            Slots_1.Slots.init();
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.head);
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.headaccessory);
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.top);
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.bra);
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.waist);
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.underwear);
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.penis);
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.ass);
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.hosiery);
            Slots_1.Slots.add(ItemNouns_1.clothingSlots.feet);
            Inventory_1.Inventory.init();
            Inventory_1.Inventory.add("basic-tshirt");
            Inventory_1.Inventory.add("jeans");
            Inventory_1.Inventory.add("briefs");
            Inventory_1.Inventory.add("mens-white-socks");
            Inventory_1.Inventory.add("tennis-shoes");
            Inventory_1.Inventory.add("luggage");
            MirrorUX_1.MirrorUX.wear("briefs");
            MirrorUX_1.MirrorUX.wear("basic-tshirt");
            MirrorUX_1.MirrorUX.wear("jeans");
            MirrorUX_1.MirrorUX.wear("mens-white-socks");
            MirrorUX_1.MirrorUX.wear("tennis-shoes");
            Outfits_1.Outfits.init();
            const outfit = {
                items: Slot_1.Slot.getAllContents(),
                name: "Casual",
            };
            Outfits_1.Outfits.saveOutfit(outfit);
            Tasks_1.Tasks.init();
            InventoryUX_1.InventoryUX.init();
            Core_1.CoreUtils.getVariables().needsInit = false;
        }
        fixSaveGame();
    }
    SugarCube.Config.history.maxStates = 20;
    SugarCube.Config.saves.version = Versioning_1.Versioning.saveVersion;
    SugarCube.Config.saves.onLoad = function (save) {
        if (save.version == null || save.version < Versioning_1.Versioning.lastSupportedVersion) {
            SugarCube.Engine.restart();
        }
        if (save.state && save.state.history[save.state.index]) {
            let length = save.state.history.length;
            for (let i = 0; i < length; i++) {
                let variables = save.state.history[i].variables;
                if (variables != null && variables.slotNames != null) {
                    let slotIndex = variables.slotNames.indexOf("hoisery");
                    if (slotIndex >= 0) {
                        variables.slotNames.splice(slotIndex, 1);
                        variables.slotNames.push("hosiery");
                        variables;
                    }
                }
            }
        }
    };
    /**
     * Used to regulate interactions with Types, from general page/Sugarcube context.
     * Normal typescript paths should refer directly to static types.
     */
    class Libraries {
        constructor() {
            this.CoreUtils = Core_1.CoreUtils;
            this.ItemDefinitions = {};
            this.Items = Items_1.Items;
            this.Inventory = Inventory_1.Inventory;
            this.OutfitsAnalyser = OutfitsAnalyser_1.OutfitsAnalyser;
            this.OutfitsExplainer = OutfitsExplainer_1.OutfitsExplainer;
            this.Slots = Slots_1.Slots;
            this.Slot = Slot_1.Slot;
            this.Clothing = Clothing_1.Clothing;
            this.StoreUX = Store_1.StoreUX;
            this.Outfits = Outfits_1.Outfits;
            this.Dialogue = Dialogue_1.Dialogue;
            this.Skills = Skills_1.Skills;
            this.HousePolicy = HousePolicy_1.HousePolicy;
            this.InventoryUX = InventoryUX_1.InventoryUX;
            this.MirrorUX = MirrorUX_1.MirrorUX;
            this.Images = Images_1.Images;
            this.Prompt = prompt_1.Prompt;
            this.Toast = Toast_1.Toast;
            this.ImageOverlay = ImageOverlay_1.ImageOverlay;
            this.Tasks = Tasks_1.Tasks;
            this.TasksUX = TasksUX_1.TasksUX;
            this.PlayerModel = PlayerModel_1.PlayerModel;
            this.Work = Work_1.Work;
            this.StationWork = StationWork_1.StationWork;
            this.WorkModel = WorkModel_1.WorkModel;
            this.PlayerView = PlayerView_1.PlayerView;
            this.ProfileModel = ProfileModel_1.ProfileModel;
            this.HairStyles = HairStyles_1.HairStyles;
            this.DollsuitWork = DollsuitWork_1.DollsuitWork;
            this.Exercises = Exercises_1.Exercises;
            this.RunWalk = RunWalk_1.RunWalk;
            this.Laptop = Laptop_1.Laptop;
            this.InnerChamber = InnerChamber_1.InnerChamber;
            this.Pathways = Pathways_1.Pathways;
            this.DoH = DoH_1.DoH;
            this.Sex = Sex_1.Sex;
            this.Spa = Spa_1.Spa;
            this.Mood = Mood_1.Mood;
            this.Versioning = Versioning_1.Versioning;
            this.initOnLoad = initOnLoad;
            this.OutfitSwitcher = OutfitSwitcher_1.OutfitSwitcher;
            this.ExercisePlanner = ExercisePlanner_1.ExercisePlanner;
            this.ImageEffects = ImageEffects_1.ImageEffects;
            this.DayOfWeek = TimeModel_1.DayOfWeek;
            this.fixSaveGame = fixSaveGame;
        }
    }
    const libraries = new Libraries();
    function getLib() {
        return libraries;
    }
    exports.getLib = getLib;
    SugarCube.getLib = getLib;
    //App Startup
    Items_1.Items.setItems(ItemGenerator_1.getItemDefinitions());
    HairStyles_1.HairStyles.setItems(HairStyleGenerator_1.getHairStyleDefinitions());
    CssLoader_1.CssLoader.EnsureCss("main.css");
});
