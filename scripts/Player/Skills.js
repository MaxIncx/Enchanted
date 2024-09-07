(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Skills = exports.SkillLimits = exports.SkillTypes = void 0;
    const Core_1 = require("../Core");
    class SkillTypes {
    }
    exports.SkillTypes = SkillTypes;
    SkillTypes.cardio = "cardio"; //Elliptical
    SkillTypes.flexibility = "flexibility"; //Yoga
    SkillTypes.swimming = "swimming"; // Swimming
    SkillTypes.ballet = "ballet"; // Ballet
    SkillTypes.endurance = "endurance"; //Triathlon
    SkillTypes.hormones = "hormones"; //Hormones from the motivator and computer. Drives bodily properties
    SkillTypes.aldopril = "aldopril"; // Drives dollsuit progress
    SkillTypes.logistics = "logistics";
    SkillTypes.cleaning = "cleaning";
    SkillTypes.corporate = "corporate"; //Basics of working in a soulless corporation.
    SkillTypes.perfectCustomerSatisfaction = "perfect service"; //Basics of working in a soulless corporation.
    SkillTypes.weight = "weight"; //kg
    SkillTypes.waist = "waist"; //cm
    SkillTypes.ass = "ass"; //cm
    SkillTypes.height = "height"; //cm
    SkillTypes.facialFem = "facialFem";
    SkillTypes.hairLength = "hairLength";
    //Milestones
    SkillTypes.breasts = "breasts"; //Discrete steps
    SkillTypes.hormoneAccumulation = "hormoneAccumulation";
    SkillTypes.compliant = "compliant"; //Player is more accomodating MC/Sue authority
    SkillTypes.defiant = "defiant"; //Player is defiant towards MC/Sue authority
    class SkillLimits {
        static isNearFitnessLimit(current) {
            return current > this.maxFitnessSkill * 0.95;
        }
    }
    exports.SkillLimits = SkillLimits;
    SkillLimits.maxFitnessSkill = 400;
    /**
     * Represents character skills/abilities/bodily attributes.
     * (Representation only. No UI/Experience Code)
     */
    class Skills {
        static roundSkill(value) {
            return Math.round(value * 10) / 10;
        }
        static ensure() {
            if (Core_1.CoreUtils.getVariables().player.skills == null) {
                Core_1.CoreUtils.getVariables().player.skills = {};
            }
        }
        static set(skillName, value) {
            Skills.ensure();
            Core_1.CoreUtils.getVariables().player.skills[skillName] = value;
        }
        static get(skillName) {
            Skills.ensure();
            return Core_1.CoreUtils.getVariables().player.skills[skillName] || 0;
        }
        static add(skillName, addition, max = 100) {
            Skills.ensure();
            let initialVal = Skills.get(skillName);
            if (initialVal == undefined) {
                initialVal = 0;
            }
            Skills.set(skillName, Math.min(initialVal + addition, max));
        }
    }
    exports.Skills = Skills;
});
