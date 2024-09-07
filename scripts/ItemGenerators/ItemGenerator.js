(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ItemNouns", "./ItemScripts"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getContributedItems = exports.getCovertItems = exports.getOlddorfStoreItems = exports.getShoeboxxStoreItems = exports.getRunnerItems = exports.getSueShopItems = exports.getAdultItems = exports.getStacyItems = exports.getStoryItems = exports.getInitialItems = exports.getItemDefinitions = void 0;
    const ItemNouns_1 = require("./ItemNouns");
    const ItemScripts_1 = require("./ItemScripts");
    function getItemDefinitions() {
        const itemDefinitions = Object.assign({}, getInitialItems(), getStoryItems(), getStacyItems(), getAdultItems(), getSueShopItems(), getRunnerItems(), getOlddorfStoreItems(), getCovertItems(), getShoeboxxStoreItems(), getContributedItems());
        return itemDefinitions;
    }
    exports.getItemDefinitions = getItemDefinitions;
    function getInitialItems() {
        const itemDefinitions = {};
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "jeans",
            pluralNoun: ItemNouns_1.Nouns.Waist.jeans,
            type: "clothing",
            image: "mens-jeans.jpg",
            //description: "Your initial pair of jeans",
            slots: [ItemNouns_1.clothingSlots.waist],
            isFeminine: false,
            store: ItemNouns_1.stores.none,
            contextual: ["casual"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "basic-tshirt",
            pluralNoun: ItemNouns_1.Nouns.Top.tShirts,
            type: "clothing",
            image: "atari-tshirt.jpg",
            //description: "Your initial t shirt",
            slots: [ItemNouns_1.clothingSlots.top],
            isFeminine: false,
            store: ItemNouns_1.stores.none,
            contextual: ["casual"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "briefs",
            pluralNoun: ItemNouns_1.Nouns.Underwear.briefs,
            type: "clothing",
            image: "grey-briefs.jpg",
            //description: "Your initial underwear.",
            slots: [ItemNouns_1.clothingSlots.underwear],
            isFeminine: false,
            store: ItemNouns_1.stores.none,
            contextual: ["casual"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "mens-white-socks",
            pluralNoun: ItemNouns_1.Nouns.Socks.socks,
            type: "clothing",
            image: "mens-white-socks.jpg",
            //description: "Your initial shoes",
            slots: [ItemNouns_1.clothingSlots.hosiery],
            isFeminine: false,
            store: ItemNouns_1.stores.none,
            contextual: ["casual"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "tennis-shoes",
            pluralNoun: ItemNouns_1.Nouns.Feet.tennisShoes,
            type: "clothing",
            image: "tennis-shoes.jpg",
            //description: "Your initial shoes",
            slots: [ItemNouns_1.clothingSlots.feet],
            isFeminine: false,
            contextual: ["casual"],
            store: ItemNouns_1.stores.none,
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "luggage",
            type: "item",
            image: "duffle.jpg",
            name: "Luggage",
            description: "Your luggage. It's heavy. Perhaps you can drop it off in your room first?",
            store: ItemNouns_1.stores.none,
        });
        return itemDefinitions;
    }
    exports.getInitialItems = getInitialItems;
    function getStoryItems() {
        const itemDefinitions = {};
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "pawn-ticket",
            price: 0,
            type: "item",
            name: "Pawn Ticket",
            image: "pawn-ticket.jpg",
            description: "A pawn ticket. Where might this lead?",
            store: ItemNouns_1.stores.none,
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "secret-key",
            price: 0,
            type: "item",
            image: "barrel-key.jpg",
            name: "Secret Key",
            description: "A barrel shaped key redeemed with ticket from the library...",
            store: ItemNouns_1.stores.none,
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "smart-watch",
            price: 0,
            image: "smart-watch.jpg",
            type: "item",
            name: "Smart Watch",
            description: "A really smart watch. Linked to MarisTech Systems and your self-driving car. ",
            store: ItemNouns_1.stores.none,
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "motivator-plug",
            type: "clothing",
            pluralNoun: ItemNouns_1.Nouns.Ass.buttPlug,
            slots: [ItemNouns_1.clothingSlots.ass],
            price: 0,
            image: "motivator-plug.jpg",
            name: "Motivator Plug",
            //        description: "A 'smart' plug from the computer",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            firstTimeWearPassage: "First time motivator plug",
            contextual: ["allPurpose"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "drone-operator-license",
            type: "item",
            price: 0,
            image: "drone-license.jpg",
            name: "Drone Operator License",
            store: ItemNouns_1.stores.none,
            description: "Drone Operator License from the department of Humanity.",
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "first-dildo",
            type: "item",
            price: 0,
            image: "first-dildo.jpg",
            name: "Dildo from Sue's Store",
            store: ItemNouns_1.stores.none,
            description: "Dildo from Sue's Store",
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "latex-stockings-gift-0",
            type: "clothing",
            price: 0,
            image: "latex-stockings-gift.jpg",
            name: "Stockings from Sue",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Socks.kneeHighs,
            slots: [ItemNouns_1.clothingSlots.hosiery],
            contextual: ["allPurpose"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "latex-dress-gift-0",
            type: "clothing",
            price: 0,
            image: "latex-dress-gift.jpg",
            name: "Dress from Sue",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Outfit.latexOutfits,
            slots: [ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.top],
            contextual: ["sleeping", "casual"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "black-club-dress-0",
            type: "clothing",
            price: 0,
            image: "black-club-dress.jpg",
            name: "Clubbing Dress from Sue",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Outfit.clubbingDress,
            slots: [ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.top],
            contextual: ["casual"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "ballet-slippers",
            type: "clothing",
            price: 0,
            image: "ballet-slippers.jpg",
            name: "Ballet slippers",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Feet.balletFlats,
            slots: [ItemNouns_1.clothingSlots.feet],
            contextual: ["fitness"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "ballet-leotard",
            type: "clothing",
            price: 0,
            image: "ballet-leotard.jpg",
            name: "Ballet leotard",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Outfit.leotard,
            slots: [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist],
            contextual: ["fitness"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "ballet-tights",
            type: "clothing",
            price: 0,
            image: "ballet-tights.jpg",
            name: "Ballet tights",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Socks.pantyhose,
            slots: [ItemNouns_1.clothingSlots.hosiery],
            contextual: ["fitness"],
        });
        //Research Station stuff
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "research-rain-boots",
            type: "clothing",
            price: 0,
            image: "rain-boots.jpg",
            name: "Wellington Boots",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Feet.rainBoots,
            slots: [ItemNouns_1.clothingSlots.feet],
            contextual: ["casual"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "research-fleece-top",
            type: "clothing",
            price: 0,
            image: "fleece-top.jpg",
            name: "Fleece Top",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Top.fleece,
            slots: [ItemNouns_1.clothingSlots.top],
            contextual: ["casual", "fitness"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "research-technical-pants",
            type: "clothing",
            price: 0,
            image: "technical-pants.jpg",
            name: "Technical Pants",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Waist.technicalPants,
            slots: [ItemNouns_1.clothingSlots.waist],
            contextual: ["casual", "fitness"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "research-panties",
            type: "clothing",
            price: 0,
            image: "research-panties.jpg",
            name: "Panties",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Underwear.panties,
            slots: [ItemNouns_1.clothingSlots.underwear],
            contextual: ["casual", "fitness"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "research-socks",
            type: "clothing",
            price: 0,
            image: "research-socks.jpg",
            name: "Athletic Socks",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Socks.athleticSocks,
            slots: [ItemNouns_1.clothingSlots.hosiery],
            contextual: ["casual", "fitness"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "research-bra",
            type: "clothing",
            price: 0,
            image: "research-bra.jpg",
            name: "Sports Bra",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            pluralNoun: ItemNouns_1.Nouns.Bra.sportsBras,
            slots: [ItemNouns_1.clothingSlots.bra],
            contextual: ["casual", "fitness"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "race-bike",
            price: 0,
            type: "item",
            name: "Race Bike",
            image: "race-bike.jpg",
            description: "A ladies carbon-fiber triathlon race bike.",
            store: ItemNouns_1.stores.none,
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "she-beast-registration-ticket",
            price: 0,
            type: "item",
            name: "Registration for the She-Beast 2023 Triathlon ",
            image: "",
            description: "A registration slip for the She-Beast Triathlon.",
            store: ItemNouns_1.stores.none,
        });
        return itemDefinitions;
    }
    exports.getStoryItems = getStoryItems;
    function getStacyItems() {
        const itemDefinitions = {};
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "yoga-pants",
            pluralNoun: ItemNouns_1.Nouns.Waist.yogaPants,
            type: "clothing",
            image: "black-yoga-pants.jpg",
            //description: "Stacy's favorite yoga pants",
            slots: [ItemNouns_1.clothingSlots.waist],
            isFeminine: true,
            firstTimeWearPassage: "First time yoga pants",
            store: ItemNouns_1.stores.none,
            contextual: ["casual", "fitness"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "tank-top",
            pluralNoun: ItemNouns_1.Nouns.Top.sleevelessSportTops,
            type: "clothing",
            image: "tanktop.jpg",
            //description: "A cute athletic tanktop from Stacy's closet",
            slots: [ItemNouns_1.clothingSlots.top],
            isFeminine: true,
            firstTimeWearPassage: "First time tank top",
            contextual: ["casual", "fitness"],
            store: ItemNouns_1.stores.none,
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "black-thong",
            pluralNoun: ItemNouns_1.Nouns.Underwear.thong,
            type: "clothing",
            image: "black-thong.jpg",
            //description: "The sexy thong from the sofa",
            slots: [ItemNouns_1.clothingSlots.underwear],
            firstTimeWearPassage: "First time thong",
            isFeminine: true,
            store: ItemNouns_1.stores.none,
            contextual: ["casual", "officeWork", "fitness"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "stacy-bra",
            pluralNoun: ItemNouns_1.Nouns.Bra.pushUp,
            type: "clothing",
            image: "stacy-bra.jpg",
            //description: "Stacy's Bra",
            slots: [ItemNouns_1.clothingSlots.bra],
            isFeminine: true,
            firstTimeWearPassage: "First time bra",
            store: ItemNouns_1.stores.none,
            contextual: ["casual", "fitness", "officeWork"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "stacy-panties",
            pluralNoun: ItemNouns_1.Nouns.Underwear.panties,
            type: "clothing",
            image: "pink-panties.jpg",
            //description: "Stacy's panties",
            slots: [ItemNouns_1.clothingSlots.underwear],
            contextual: ["casual", "fitness"],
            isFeminine: true,
            store: ItemNouns_1.stores.none,
        });
        return itemDefinitions;
    }
    exports.getStacyItems = getStacyItems;
    function getAdultItems() {
        const itemDefinitions = {};
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "blonde-wig",
            pluralNoun: ItemNouns_1.Nouns.Head.wig,
            type: "clothing",
            image: "first-wig.jpg",
            //description: "A blonde wig from the adult store",
            slots: [ItemNouns_1.clothingSlots.head],
            isFeminine: true,
            firstTimeWearPassage: "First time wig",
            price: 40,
            store: ItemNouns_1.stores.adult,
            contextual: ["allPurpose"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "first-heels",
            pluralNoun: ItemNouns_1.Nouns.Feet.dressSandals,
            type: "clothing",
            image: "first-heels-front.jpg",
            //description: "Gladiator heels from the adult store",
            slots: [ItemNouns_1.clothingSlots.feet],
            isFeminine: true,
            firstTimeWearPassage: "First time high heels",
            price: 112,
            store: ItemNouns_1.stores.adult,
            contextual: ["casual", "officeWork"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "ring-gaff",
            pluralNoun: ItemNouns_1.Nouns.Penis.gaff,
            type: "clothing",
            image: "ring-gaff.jpg",
            slots: [ItemNouns_1.clothingSlots.penis],
            isFeminine: true,
            price: 40,
            firstTimeWearPassage: "First time gaff",
            store: ItemNouns_1.stores.adult,
            contextual: ["allPurpose"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "makeup",
            type: "item",
            name: "Makeup kit",
            image: "makeup-kit.jpg",
            description: "A basic makeup kit",
            price: 50,
            store: ItemNouns_1.stores.adult,
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "chasti-flex",
            pluralNoun: ItemNouns_1.Nouns.Penis.cage,
            type: "clothing",
            image: "cf.jpg",
            //description: "Chasti-flex. Futuristic long term device. You don't hold the key",
            slots: [ItemNouns_1.clothingSlots.penis],
            isFeminine: true,
            price: 8500,
            store: ItemNouns_1.stores.adult,
            canNotRemove: true,
            contextual: ["allPurpose"],
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "chastity-belt",
            pluralNoun: ItemNouns_1.Nouns.Penis.chastityBelts,
            type: "clothing",
            image: "chastity-belt.jpg",
            slots: [ItemNouns_1.clothingSlots.penis],
            isFeminine: true,
            price: 200,
            canNotRemove: true,
            contextual: ["allPurpose"],
            store: ItemNouns_1.stores.none,
        });
        ItemScripts_1.appendItem(itemDefinitions, {
            id: "5k-running-tshirt",
            pluralNoun: ItemNouns_1.Nouns.Top.tShirts,
            type: "clothing",
            image: "5k-running-tshirt.jpg",
            slots: [ItemNouns_1.clothingSlots.top],
            isFeminine: true,
            contextual: ["casual", "fitness"],
            store: ItemNouns_1.stores.none,
        });
        return itemDefinitions;
    }
    exports.getAdultItems = getAdultItems;
    function getSueShopItems() {
        const sharedDetails = {
            type: "clothing",
            isFeminine: true,
            store: ItemNouns_1.stores.fetish,
        };
        const storeTemplate = {
            templates: [
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-babydoll-NNN`,
                        image: `sue-latex-babydoll-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.babydoll,
                        slots: [ItemNouns_1.clothingSlots.underwear, ItemNouns_1.clothingSlots.bra],
                        targetPrice: 61,
                        contextual: ["sleeping", "fetish"],
                        firstTimeWearPassage: "First Babydoll",
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-bodysuit-NNN`,
                        image: `sue-latex-bodysuit-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.bodysuit,
                        slots: [ItemNouns_1.clothingSlots.underwear, ItemNouns_1.clothingSlots.bra],
                        targetPrice: 90,
                        contextual: ["fetish", "casual"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-bra-NNN`,
                        image: `sue-latex-bra-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.pushUp,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 47,
                        contextual: ["fetish", "casual"],
                    },
                },
                {
                    count: 6,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-balconette-NNN`,
                        image: `sue-latex-bra-balconette-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.pushUp,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 58,
                        contextual: ["fetish", "casual"],
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-bralette-NNN`,
                        image: `sue-latex-bra-bralette-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.bralettes,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 62,
                        contextual: ["fetish", "casual"],
                    },
                },
                {
                    count: 4,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-strapless-NNN`,
                        image: `sue-latex-bra-strapless-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.strapless,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 52,
                        contextual: ["fetish", "casual"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-catsuit-cosplay-NNN`,
                        image: `sue-latex-catsuit-cosplay-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.latexCatsuits,
                        slots: [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist],
                        targetPrice: 460,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 7,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-catsuit-keyhole-NNN`,
                        image: `sue-latex-catsuit-keyhole-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.latexCatsuits,
                        slots: [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist],
                        targetPrice: 350,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-catsuit-NNN`,
                        image: `sue-latex-catsuit-longsleeved-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.latexCatsuits,
                        slots: [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist],
                        targetPrice: 350,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-dress-longsleeved-NNN`,
                        image: `sue-latex-dress-longsleeved-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.latexDresses,
                        slots: [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist],
                        targetPrice: 350,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 2,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-dress-skating-NNN`,
                        image: `sue-latex-dress-skating-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.latexDresses,
                        slots: [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist],
                        targetPrice: 260,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-dress-NNN`,
                        image: `sue-latex-dress-tube-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.latexDresses,
                        slots: [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist],
                        targetPrice: 230,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-leggings-NNN`,
                        image: `sue-latex-leggings-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Waist.leggings,
                        slots: [ItemNouns_1.clothingSlots.waist],
                        targetPrice: 90,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-leotards-NNN`,
                        image: `sue-latex-leotard-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.leotard,
                        slots: [ItemNouns_1.clothingSlots.bra, ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 180,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-panties-NNN`,
                        image: `sue-latex-panties-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Underwear.panties,
                        slots: [ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 40,
                        contextual: ["fetish", "casual"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-panties-highwaist-NNN`,
                        image: `sue-latex-panties-highwaist-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Underwear.panties,
                        slots: [ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 70,
                        contextual: ["fetish", "casual"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-panties-NNN`,
                        image: `sue-latex-panties-thong-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Underwear.thong,
                        slots: [ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 40,
                        contextual: ["fetish", "casual"],
                    },
                },
                {
                    count: 11,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-pantyhose-NNN`,
                        image: `sue-latex-pantyhose-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Socks.pantyhose,
                        slots: [ItemNouns_1.clothingSlots.hosiery],
                        targetPrice: 80,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-skirt-cheerleader-NNN`,
                        image: `sue-latex-skirt-cheerleader-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Waist.cheerleaderSkirt,
                        slots: [ItemNouns_1.clothingSlots.waist],
                        targetPrice: 120,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-skirt-mini-NNN`,
                        image: `sue-latex-skirt-mini-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Waist.miniSkirt,
                        slots: [ItemNouns_1.clothingSlots.waist],
                        targetPrice: 100,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-skirt-NNN`,
                        image: `sue-latex-skirt-pencil-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Waist.pencilSkirt,
                        slots: [ItemNouns_1.clothingSlots.waist],
                        targetPrice: 150,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-skirt-skating-NNN`,
                        image: `sue-latex-skirt-skating-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Waist.skatingSkirt,
                        slots: [ItemNouns_1.clothingSlots.waist],
                        targetPrice: 110,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-socks-NNN`,
                        image: `sue-latex-socks-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Socks.socks,
                        slots: [ItemNouns_1.clothingSlots.hosiery],
                        targetPrice: 32,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 10,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-stockings-NNN`,
                        image: `sue-latex-stockings-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Socks.thighHighs,
                        slots: [ItemNouns_1.clothingSlots.hosiery],
                        targetPrice: 50,
                        contextual: ["fetish"],
                        firstTimeWearPassage: "First Thighhigh",
                    },
                },
                {
                    count: 13,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-swimsuits-bottom-NNN`,
                        image: `sue-latex-swimsuit-bottom-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Underwear.swimsuitBottoms,
                        slots: [ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 50,
                        contextual: ["fetish", "swimming"],
                        firstTimeWearPassage: "Bikini",
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-swimsuits-onepiece-NNN`,
                        image: `sue-latex-swimsuit-onepiece-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.onePieceSwimsuits,
                        slots: [ItemNouns_1.clothingSlots.bra, ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 80,
                        contextual: ["fetish", "swimming"],
                        firstTimeWearPassage: "Swimsuit",
                    },
                },
                {
                    count: 12,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-swimsuits-top-NNN`,
                        image: `sue-latex-swimsuit-top-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.swimsuitTop,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 50,
                        contextual: ["fetish", "swimming"],
                        firstTimeWearPassage: "Bikini",
                    },
                },
                {
                    count: 10,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-corset-NNN`,
                        image: `sue-latex-top-corset-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.corsetTops,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 120,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 12,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-crop-top-NNN`,
                        image: `sue-latex-top-crop-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.cropTops,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 90,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 4,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-croplongsleeved-NNN`,
                        image: `sue-latex-top-croplongsleeved-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.cropTops,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 120,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-halter-NNN`,
                        image: `sue-latex-top-halter-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.halter,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 120,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 7,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-keyhole-NNN`,
                        image: `sue-latex-top-keyhole-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.sleevelessTops,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 120,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-longsleeved-NNN`,
                        image: `sue-latex-top-longsleeved-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.blouses,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 170,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 7,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-scoop-NNN`,
                        image: `sue-latex-top-scoop-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.sleevelessTops,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 100,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-NNN`,
                        image: `sue-latex-top-shirt-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.blouses,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 80,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-sleeveless-NNN`,
                        image: `sue-latex-top-sleeveless-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.sleevelessTops,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 75,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 3,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-tube-NNN`,
                        image: `sue-latex-top-tube-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.tubeTops,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 65,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 6,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-vneck-NNN`,
                        image: `sue-latex-top-vneck-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.sleevelessTops,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 95,
                        contextual: ["fetish"],
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `sue-latex-top-waistcoat-NNN`,
                        image: `sue-latex-top-waistcoat-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.sleevelessTops,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 160,
                        contextual: ["fetish"],
                    },
                },
            ],
        };
        return ItemScripts_1.generateStore(storeTemplate);
    }
    exports.getSueShopItems = getSueShopItems;
    function getRunnerItems() {
        const sharedDetails = {
            type: "clothing",
            isFeminine: true,
            store: ItemNouns_1.stores.running,
        };
        const storeTemplate = {
            templates: [
                {
                    count: 18,
                    item: {
                        ...sharedDetails,
                        id: `running-NNN`,
                        image: `running-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.runningShoes,
                        slots: [ItemNouns_1.clothingSlots.feet],
                        targetPrice: 72,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 1,
                    item: {
                        ...sharedDetails,
                        id: `athletic-socks`,
                        image: `athletic-socks.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Socks.athleticSocks,
                        slots: [ItemNouns_1.clothingSlots.hosiery],
                        targetPrice: 15,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 9,
                    item: {
                        ...sharedDetails,
                        id: `running-bra-NNN`,
                        image: `running-bra-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.sportsBras,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 35,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 1,
                    item: {
                        ...sharedDetails,
                        id: `running-briefs-NNN`,
                        image: `running-briefs-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Underwear.briefs,
                        slots: [ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 26,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 12,
                    item: {
                        ...sharedDetails,
                        id: `running-tights-NNN`,
                        image: `running-tights-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Waist.runningTights,
                        slots: [ItemNouns_1.clothingSlots.waist],
                        targetPrice: 50,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `running-capri-NNN`,
                        image: `running-capri-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Waist.capriTights,
                        slots: [ItemNouns_1.clothingSlots.waist],
                        targetPrice: 40,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `running-shorts-NNN`,
                        image: `running-shorts-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Waist.runningShorts,
                        slots: [ItemNouns_1.clothingSlots.waist],
                        targetPrice: 31,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 6,
                    item: {
                        ...sharedDetails,
                        id: `running-sleevelesstop-NNN`,
                        image: `running-sleevelesstop-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.sleevelessSportTops,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 32,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 2,
                    item: {
                        ...sharedDetails,
                        id: `running-hoodie-NNN`,
                        image: `running-hoodie-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.hoodies,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 60,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 11,
                    item: {
                        ...sharedDetails,
                        id: `running-tshirt-NNN`,
                        image: `running-tshirt-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.tShirts,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 25,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 11,
                    item: {
                        ...sharedDetails,
                        id: `running-swimsuit-NNN`,
                        image: `running-swimsuit-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.onePieceSwimsuits,
                        slots: [ItemNouns_1.clothingSlots.bra, ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 51,
                        contextual: ["swimming"],
                        firstTimeWearPassage: "Swimsuit",
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `running-perfswimsuit-NNN`,
                        image: `running-perfswimsuit-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.competitionSwimsuits,
                        slots: [ItemNouns_1.clothingSlots.bra, ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 80,
                        contextual: ["swimming"],
                        firstTimeWearPassage: "Swimsuit",
                    },
                },
                {
                    count: 7,
                    item: {
                        ...sharedDetails,
                        id: `running-trisuit-NNN`,
                        image: `running-trisuit-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.triathlonWetsuits,
                        slots: [ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.top],
                        targetPrice: 280,
                        contextual: ["swimming"],
                        firstTimeWearPassage: "Wetsuit",
                    },
                },
                {
                    count: 2,
                    item: {
                        ...sharedDetails,
                        id: `running-trisleeveless-NNN`,
                        image: `running-trisleeveless-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.sleevelessWetsuits,
                        slots: [ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.top],
                        targetPrice: 180,
                        contextual: ["swimming"],
                        firstTimeWearPassage: "Wetsuit",
                    },
                },
                {
                    count: 2,
                    item: {
                        ...sharedDetails,
                        id: `running-trishorty-NNN`,
                        image: `running-trishorty-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.shortyWetsuits,
                        slots: [ItemNouns_1.clothingSlots.waist, ItemNouns_1.clothingSlots.top],
                        targetPrice: 170,
                        contextual: ["swimming"],
                        firstTimeWearPassage: "Wetsuit",
                    },
                },
                {
                    count: 7,
                    item: {
                        ...sharedDetails,
                        id: `running-swimcap-NNN`,
                        image: `running-swimcap-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Head.swimcaps,
                        slots: [ItemNouns_1.clothingSlots.head],
                        price: 15,
                        contextual: ["swimming"],
                    },
                },
                {
                    count: 11,
                    item: {
                        ...sharedDetails,
                        id: `running-bikini-top-NNN`,
                        image: `running-bikinitop-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.bikiniTop,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 35,
                        contextual: ["swimming"],
                        firstTimeWearPassage: "Bikini",
                    },
                },
                {
                    count: 11,
                    item: {
                        ...sharedDetails,
                        id: `running-bikinibottom-NNN`,
                        image: `running-bikinibottom-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Underwear.bikinibrief,
                        slots: [ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 38,
                        contextual: ["swimming"],
                        firstTimeWearPassage: "Bikini",
                    },
                },
            ],
        };
        return ItemScripts_1.generateStore(storeTemplate);
    }
    exports.getRunnerItems = getRunnerItems;
    function getShoeboxxStoreItems() {
        const sharedDetails = {
            type: "clothing",
            isFeminine: true,
            store: ItemNouns_1.stores.shoeboxx,
            contextual: ["officeWork", "casual"],
            slots: [ItemNouns_1.clothingSlots.feet],
        };
        const storeTemplate = {
            templates: [
                {
                    count: 6,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-balletflats-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.balletFlats,
                        image: `shoebox-balletflats-NNN.jpg`,
                        targetPrice: 38,
                    },
                },
                {
                    count: 6,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-loafers-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.loafers,
                        image: `shoebox-loafers-NNN.jpg`,
                        targetPrice: 45,
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-wedge-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.wedgeHeels,
                        image: `shoebox-wedge-NNN.jpg`,
                        targetPrice: 45,
                    },
                },
                {
                    //Legacy Compat
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-dressheel-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.pumpHeels,
                        image: `shoebox-pumps-NNN.jpg`,
                        targetPrice: 50,
                        store: ItemNouns_1.stores.none,
                    },
                },
                {
                    count: 12,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-pumps-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.pumpHeels,
                        image: `shoebox-pumps-NNN.jpg`,
                        targetPrice: 60,
                    },
                },
                {
                    count: 15,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-blockheel-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.blockHeels,
                        image: `shoebox-blockheel-NNN.jpg`,
                        targetPrice: 50,
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-dresssandal-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.dressSandals,
                        image: `shoebox-dresssandal-NNN.jpg`,
                        targetPrice: 50,
                    },
                },
                {
                    count: 15,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-ankleboots-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.ankleBoots,
                        image: `shoebox-ankleboots-NNN.jpg`,
                        targetPrice: 80,
                    },
                },
                {
                    count: 14,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-kneehighboots-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.kneeHighBoots,
                        image: `shoebox-kneehighboots-NNN.jpg`,
                        targetPrice: 120,
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-platforms-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.platformHeels,
                        image: `shoebox-platforms-NNN.jpg`,
                        targetPrice: 55,
                    },
                },
                {
                    count: 7,
                    item: {
                        ...sharedDetails,
                        id: `shoebox-stilettos-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.stilettoHeels,
                        image: `shoebox-stilettos-NNN.jpg`,
                        targetPrice: 85,
                    },
                },
            ],
        };
        return ItemScripts_1.generateStore(storeTemplate);
    }
    exports.getShoeboxxStoreItems = getShoeboxxStoreItems;
    function getOlddorfStoreItems() {
        const sharedDetails = {
            type: "clothing",
            isFeminine: true,
            store: ItemNouns_1.stores.olddorfStore,
        };
        const storeTemplate = {
            templates: [
                {
                    count: 10,
                    item: {
                        ...sharedDetails,
                        id: `pencil-skirt-NNN`,
                        image: `pencil-skirt-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Waist.pencilSkirt,
                        slots: [ItemNouns_1.clothingSlots.waist],
                        targetPrice: 52,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 11,
                    item: {
                        ...sharedDetails,
                        id: `formal-dress-NNN`,
                        image: `office-dress-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.formalDress,
                        slots: [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist],
                        targetPrice: 160,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 10,
                    item: {
                        ...sharedDetails,
                        id: `formal-suit-NNN`,
                        image: `office-suit-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.formalSuit,
                        slots: [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist],
                        targetPrice: 230,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 13,
                    item: {
                        ...sharedDetails,
                        id: `formal-pantsuit-NNN`,
                        image: `office-pantsuit-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.formalPantsuit,
                        slots: [ItemNouns_1.clothingSlots.top, ItemNouns_1.clothingSlots.waist],
                        targetPrice: 280,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 30,
                    item: {
                        ...sharedDetails,
                        id: `office-blouse-NNN`,
                        image: `office-blouse-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.blouses,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 43,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 10,
                    item: {
                        ...sharedDetails,
                        id: `office-turtleneck-NNN`,
                        image: `office-turtleneck-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Top.turtleneck,
                        slots: [ItemNouns_1.clothingSlots.top],
                        targetPrice: 55,
                        contextual: ["casual"],
                    },
                },
            ],
        };
        return ItemScripts_1.generateStore(storeTemplate);
    }
    exports.getOlddorfStoreItems = getOlddorfStoreItems;
    function getCovertItems() {
        const sharedDetails = {
            type: "clothing",
            isFeminine: true,
            store: ItemNouns_1.stores.covert,
        };
        const storeTemplate = {
            templates: [
                {
                    count: 9,
                    item: {
                        ...sharedDetails,
                        id: `covert-bralette-NNN`,
                        image: `covert-bralette-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.bralettes,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 28,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 1,
                    item: {
                        ...sharedDetails,
                        id: `covert-sportsbra-NNN`,
                        image: `covert-sportsbra-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.sportsBras,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 32,
                        contextual: ["casual", "fitness"],
                    },
                },
                {
                    count: 7,
                    item: {
                        ...sharedDetails,
                        id: `covert-pushup-NNN`,
                        image: `covert-pushup-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.pushUp,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 25,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 1,
                    item: {
                        ...sharedDetails,
                        id: `covert-plunge-NNN`,
                        image: `covert-plunge-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.plunge,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 24,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 3,
                    item: {
                        ...sharedDetails,
                        id: `covert-strapless-NNN`,
                        image: `covert-strapless-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Bra.strapless,
                        slots: [ItemNouns_1.clothingSlots.bra],
                        targetPrice: 25,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 9,
                    item: {
                        ...sharedDetails,
                        id: `covert-boyshort-NNN`,
                        image: `covert-boyshort-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Underwear.boyshort,
                        slots: [ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 22,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 3,
                    item: {
                        ...sharedDetails,
                        id: `covert-thong-NNN`,
                        image: `covert-thong-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Underwear.thong,
                        slots: [ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 20,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 3,
                    item: {
                        ...sharedDetails,
                        id: `covert-bikinibrief-NNN`,
                        image: `covert-bikinibrief-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Underwear.bikinibrief,
                        slots: [ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 32,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 5,
                    item: {
                        ...sharedDetails,
                        id: `covert-brief-NNN`,
                        image: `covert-brief-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Underwear.briefs,
                        slots: [ItemNouns_1.clothingSlots.underwear],
                        targetPrice: 20,
                        contextual: ["casual", "officeWork"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `covert-babydoll-NNN`,
                        image: `covert-babydoll-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Outfit.babydoll,
                        slots: [ItemNouns_1.clothingSlots.underwear, ItemNouns_1.clothingSlots.bra],
                        targetPrice: 40,
                        contextual: ["sleeping"],
                        firstTimeWearPassage: "First Babydoll",
                    },
                },
                {
                    count: 41,
                    item: {
                        ...sharedDetails,
                        id: `covert-thighhighs-NNN`,
                        image: `covert-stockings-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Socks.thighHighs,
                        slots: [ItemNouns_1.clothingSlots.hosiery],
                        targetPrice: 25,
                        contextual: ["allPurpose"],
                        firstTimeWearPassage: "First Thighhigh",
                    },
                },
                {
                    count: 20,
                    item: {
                        ...sharedDetails,
                        id: `covert-pantyhose-NNN`,
                        image: `covert-pantyhose-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Socks.pantyhose,
                        slots: [ItemNouns_1.clothingSlots.hosiery],
                        targetPrice: 25,
                        contextual: ["allPurpose"],
                    },
                },
                {
                    count: 8,
                    item: {
                        ...sharedDetails,
                        id: `covert-kneehighs-NNN`,
                        image: `covert-kneehigh-NNN.jpg`,
                        pluralNoun: ItemNouns_1.Nouns.Socks.kneeHighs,
                        slots: [ItemNouns_1.clothingSlots.hosiery],
                        targetPrice: 19,
                        contextual: ["allPurpose"],
                    },
                },
            ],
        };
        return ItemScripts_1.generateStore(storeTemplate);
    }
    exports.getCovertItems = getCovertItems;
    // This section is a sample for folks who want to contribute new items to the game
    function getContributedItems() {
        // Note: sharedDetails describes a set of standard properties which get applied to every article of clothing
        // described by getContributedItems()
        const sharedDetails = {
            // Leave this as-is for clothes
            type: "clothing",
            // Unless MC is buying clothes to cosplay as a boy, leave as-is
            isFeminine: true,
            // Must refer to a known store. Examples of options can be located within this file.
            store: ItemNouns_1.stores.testStore,
        };
        // storeTemplate describes rules for generating clothing.
        // In this example, two kinds of clothing are generated
        const storeTemplate = {
            templates: [
                {
                    count: 2,
                    item: {
                        // This ensures sharing of store-level details, so they don't need to be repeated.
                        ...sharedDetails,
                        /**
                         * id - This is a unique identifier for the inventory system. NNN gets replaced with a number. Don't add zeroes to left of numbers with 1 or 2 digits.
                         * if a unique item is being described the '-NNN' aspect can be omitted.
                         * Normally clothing options should allow additional choices for future, even if only one initial choice is defined at first.
                         */
                        id: `testStore-ankleboots-NNN`,
                        /**
                         * pluralNoun -  This must be a known noun. Re-use an existing noun for testing.
                         * New types can be added on request.
                         */
                        pluralNoun: ItemNouns_1.Nouns.Feet.ankleBoots,
                        /**
                         *  slots - This must refer to one or more clothing slots which this clothing occupies.
                         */
                        slots: [ItemNouns_1.clothingSlots.feet],
                        // Describes restrictions for situations this clothing can acceptably be worn in.
                        // If an item isn't marked for "casual" wear, MC won't be willing to leave the house while wearing it.
                        // If an item is marked "allPurpose", MC can wear the clothes as long as there are no special restrictions on outfit.
                        contextual: ["officeWork", "casual"],
                        // A file name template for a globally unique set of files. NNN gets replaced with a number between 1..count.  Don't add zeroes to left of numbers with 1 or 2 digits.
                        // File Naming - To avoid issues of mac/linux case sensitivity bugs, always use strictly lower cased filenames.
                        //Refer to detailed clothing guidance on the in-game developer notes page.
                        image: `shoebox-ankleboots-NNN.jpg`,
                        // target price is a baseline price which each item will be randomly priced within 20% +/- of the target price.
                        // price can be used instead, if a specific price is desired, but all items will share the exact same price.
                        targetPrice: 60,
                    },
                },
                {
                    // A second variety of clothing to generate
                    count: 1,
                    item: {
                        ...sharedDetails,
                        id: `testStore-kneehighboots-NNN`,
                        pluralNoun: ItemNouns_1.Nouns.Feet.kneeHighBoots,
                        contextual: ["officeWork", "casual"],
                        image: `shoebox-kneehighboots-NNN.jpg`,
                        targetPrice: 92,
                    },
                },
            ],
        };
        return ItemScripts_1.generateStore(storeTemplate);
    }
    exports.getContributedItems = getContributedItems;
});
