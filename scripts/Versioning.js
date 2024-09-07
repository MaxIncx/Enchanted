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
    exports.Versioning = void 0;
    class Versioning {
        static getVersionDescriptions() {
            return [
                /**
     * Noted Feedback for next update:
    1-Sounds like you want a "time to go to bed hint"... Will take a look.
    3-Clarify on the "maybe the console in the inner room can help" task... I'll probably have that one disappear sooner , and switch to another.
    5-Clothing filtering for Mirror... I'll keep in mind
    6-Fix Reference Saves
    -Instructions for initial fitness assessment -> Create a today Task to hook into this step.
     */
                {
                    saveVersion: 7,
                    versionId: "0.13.1",
                    description: `Some Tweaks & Continuity Fixes
🐞Bugs/Accessibility:
-Fix bug of re-adding task on reading Stacey Paris email
-Apply whitespace for bathroom shaving option on early stage of game.
-Regenerate Reference Saves

✨UX Refinement:
-Expose Day count numbering
-Set up tasks to make details around Days 4-8 clearer.
-Add clothes Filtering to Mirror
`,
                },
                {
                    saveVersion: 7,
                    versionId: "0.13.0",
                    description: `Some Tweaks & Continuity Fixes
🐞Bugs/Accessibility:
-Update text for motivator plug use, to emphasize connection to MC's bodily transformation, and that transformation won't happen without it.
-Tweak text on use of swim cap.
-Prevent access to ballet studio before MC has visited it in addition to existing policy.
-Prevent Sea-Station story line from re-starting when re-visiting the dollsuit.
-Add feedback for MC when restless until they have gotten guidance from computer and Sue.
-Tweak text on sleeping text to account for shaved/unshaved status.
-Tweak player arousal model, so major sexual releases are also considered to satisfy minor releases.
-Some readability fixes on DoH first visit and introduction to dollsuit.
-Skip-auto dismiss on modal dialog.
-Fix unintended dead-end of Succession planning path for a late transitioning MC. 

✨UX Refinement:
-Add shortcut links between bedroom, inner chamber and fitness room
-Block internship on sufficient physical training fitness with plug!
-Sequencing - Delay Ansible mission availability to after MC has established themselves at company.
-Provide mention about the upcoming 5K race, if player hasn't participated yet, when sea station is an option.

📚Story+Continuity+Worldbuilding:
-Add triathlon prep-training moment
-Set up inventory preparations page for triathlon story.
-Allow player to go back to MarisTech campus after talking to Dr. F about the temporal ansible. Player can resume from their self-driving car when ready.
-Start on "Succession Planning" Report from the console in after late-mid game experiences have converged. Here the player will be able to be introduced to likely exec attitudes/challenges for MC to successfully controll the company.
-List a task for MC getting a health checkup for chest growth, to make sure it isn't cancer.
-Add minor relief for MC after sex with Margaret.
-Add Task for MC to try meet with Stacey via drone + mention on email.
-Update verbiage for dollsuit work stat.

🤓Internals:
-Numerous test coverage "catch-ups" on new and optional paths
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.12.3",
                    description: `Bug Fix Upate
🐞Bugs/Accessibility:
-Make sure MC is dressed to leave house, when using the ballet studio shortcut. Hide it otherwise.
-Fix MC name use.

🤓Internals:
-Refactoring of images code folder.
-Reduce history limit to 20 slots for better performance and save-sizes.
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.12.2",
                    description: `Bug Fix Update - Respond to recent feedback.
🐞Bugs/Accessibility:
-Fix misnamed animation reference.
-Restrict outfit names to alphanumeric + dash, for application stability.
-Verify MC is NOT WEARING SOCKS when wearing yoga outfit to first enter basement. (Basement check was ignored, but front door check would complain later which was tripping up first-time players)
-Update basement check for socks to be better worded.

✨UX Refinement:
-Update landing page to more aggressively set expectations about experience.
-Change flavor text for sleeping in the pod.
-Drop restrictions on bra and underwear for fem-casual and work outfits.
-Start up a set of 5 "reference save games" covering key checkpoints. Add a landing page to access the saves from the start screen.
-Allow filtering at stores on basis of Clothing Type, slot (Body part), and activity.

🤓Internals:
-Add generalized filter model page scoped reset support for limiting view content.
-Update automation to generate reference saves at milestones
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.12.1",
                    description: `Bug Fix Udpate - Unblock a major decision...



🐞Bugs/Accessibility:
-Fix Unexpected identifier error after visiting Temporal Ansible Messages page.
-Give spoiler alert warning on "Ask your manager about temporal ansibles" for players who also have a pending 5K event. (I'll look at a better fix later)
-Block departure from mall changeroom - on both links if player is not decently dressed, and add new warning if not suitably dressed as a girl.
-Fix typos reported by players so far.
-Apply computer formatting of text on male identity restoration storyline.
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.12.0",
                    description: `The story continues back home.



🐞Bugs/Accessibility:
* Fix passage encoding issues
* Ensure MC doesn't work at computer during weekend.
* Block Dollsuit work on weekdays.
* UI formatting minor cleanups.

📚Story+Continuity+Worldbuilding:
* Billy is given a new choice with the delivery of the temporal ansible data.
* Allow MC to regain masculinity, even after gender confirmation surgery.
* Allow MC to start endurance training for triathlon. Restrict exercise to tues, thurs, Sun. 
* Allow MC to buy racing bike from Mariella.
* Introduce drudgery flavor text for routine Dollsuit work.
* Introduce option to use "Aldopril" a performance enhancing compound for improved human-machine synergies when operating the dollsuit.
* Set up flavor text for MC "decoupling" from Dollsuit after work.
* Add first stacey encounter while in Dollsuit.
* Allow MC to OD on Aldopril, with consequences.

✨UX Refinement:
* Flavor workplace images for early dollsuit suit work.
* Enable quick nav on Triathlon days from exercise room.

🤓Internals:
* Normalize job flows to reconcile inconsistencies on process.
* Factor the Work model into separate classes to better support job-specific customizations and growth.
* Move twine job code to use job scripts
* Clean up 5k Race event code.
* Update tests to catch up to latest content.
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.11.5",
                    description: `Quick Refinements + Elaboration on world lore
🐞Bugs/Accessibility:
* Mark latex clothing for first time wear passages.

📚Story+Continuity+Worldbuilding:
* Further MC+ computer elaboration on motivator plug + animation of MC's imagination on the perks from being super fit
* Refine Marissa logs and temporal ansible messages in preparation for next chapter.

🤓Internals:
* Extra safety validation on zip file and contents with MS Defender and a variety of other tools. (MS Defender had mis-flagged the v0.11.4 build, but the contents were clean. )
* Update Marissa Messages + Temporal Anisble Logs to show unread status
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.11.4",
                    description: `Download Size Reduction + Bug fixes
🐞Bugs/Accessibility:
* Allow latex babydoll for sleepwear
* Treat leggings as lower body clothing, not hosiery.
* Fix an issue with loading save games from early stages  of game.


📚Story+Continuity+Worldbuilding:
* Delay availability of exercise batching until after MC gets the motivator plug. Expand computer explanation about motivator plug.

🤓Internals:
* Convert gifs and usages to webp for smaller download/install footprint.
* Standardize item images to 400*400 for smaller  download/install footprint.
* Factor action images folder structure to consolidate common categories.
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.11.3",
                    description: `Research station arc Refinements + New shipment at Sue's Store
🐞Bugs/Accessibility:
* Expand selection of catsuits at Sue's shop with contributions from Valsorim.
* Block continuity breaking SRS for MC until first day of intership is completed & hormones reach min bar of 20
* Add backup-restart option for computer imposed "Option 1" in early game.
* Continued typo-grammar fixes
* Fix missing estrogen application during batched exercises.
* Add fade in animations for Exercise montage.


📚Story+Continuity+Worldbuilding:
* Fill in a bit of dialogue during temporal ansible  data retrieval.
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.11.2 (Content Preview)",
                    description: `Research station  + Early Bugfixes
🐞Bugs/Accessibility:
* Ensure intern training isn't offered on weekends.
* Change measurements on player to be visible as long as player has smart watch. (This is earlier in the game - it could expose new bugs!)
* Repair savegames for clothing slot rename (typo rename of  "hoisery" -> "hosiery" broke legacy slots)
* Fix Casing for Hosiery label
* Fix prose in some early game passages
* Fix first time display of mc using makeup

📚Story+Continuity+Worldbuilding:
* Align new and older story passages on matters of canon wrt sea station.
* Tweak the dive to temporal ansible passages

🤓Internals:
* Add mechanism to support fix of old savegames at load
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.11.1 (Content Preview)",
                    description: `Research station  + Early Bugfixes
🐞Bugs/Accessibility:
* Refine wordings on research station passages from self + player feedback.
* Align mismatched casing of image filenames & paths to lower-casing (helicopter.jpg, station-map.png, aircraft-interior.jpg)
* Allow for margaret to toy with MC if plug is present on post-dive date.
* Fix mappings of initial new fetishware selection at Sue's store.
* Add warning + bypass option at start of intern "interview" sequence
* Fix disappearance of coregasms. Refine scaling of exercise gains with experience.
* Add mention of coregasms for batched exercises.
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.11.0 (Content Preview)",
                    description: `Research station Storyline
🐞Bugs/Accessibility:
* Comprehensive spellcheck fixes on all passages. This includes some page names which had typos. This can cause loading to fail for a small set of of passages. If loading from a page fails, you can use an older version with older save to move away from problem pages.
* Gate Hair styling on correct minimum length.
* Unblock hair styling if MC had slow hair growth at beginning. 
* Allow first hair style to be chin length, regardless of actual length. This avoids issues of tweaking with hair growth, while allowing decent initial selections.

📚Story+Continuity+Worldbuilding:
* Prepare walkthrough of research station
* Intern "Dinner interview" sequence with executive at Maristech Auto
* Two new letters from Stacy in Paris
* Add uniform for working on the research station
* Allow MC to talk to boss about Temporal Ansible
* Prepare passages for travelling to research station
* Add research station character profiles
* Provide background on the "Red Hands" and "The Coalition"
* Add character art for research station and dinner interview.
* Add initial inventory for Sue's Fetishwear.

🤓Internals:
* Add Support for donning prepared outfits. 
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.10.3",
                    description: `Exercise Montage and QOL Tweaks 
✨UX Refinement:
-Remove restrictions blocking work on console on weekends. Sleep still doesn't require weekend work. Give a "work-life balance" warning.
-Add shortcut between Pod and Computer Console.
-Allow Player to use "exercise montage" mode. This bypasses flavor text for folks who have already seen the exercises.
-Increase the exerciseable fitness skill limits to 400(Most stats peak at 100). The fitness numbers don't mean much yet except for a few checks, but this allows exercises gains to not be lost.
🐞Bugs/Accessibility:
-Fix bug where the blonde wig wasn't being correctly removed from active head-slot when MC's girly-hair threshold is reached.
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.10.2",
                    description: `Bugfixes
🐞Bugs/Accessibility:
-Fix mangled text errors in the dialogue passages.
-Fix blocker for Weekend sleep if no work has happened.
-Fix numerous Typos
-Links on top and bottom of mirror UI for QoL
-Improve state dependent continuity of texts at Mall basement & bathroom
-Replace largest gifs with images for ~10% download reduction
-Allow sleeping on weekends regardless of work
-Add (PENDING NEW CONTENT) markings for tasks which are not implemented/Cannot be completed in current version
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.10.1",
                    description: `Bugfixes
🐞Bugs/Accessibility:
-Only give MC the dollsuit task once. Don't re-add it if MC is partially progressed through it.
-Tolerate for duplicated dollsuit task from earlier saves when taking ballet.
-Make sure dollsuit link stays visible as preparations advance
-Ensure Dollsuit measurement is properly enforced at 24".
-Accelerate MC mass shift from exercise by ~10% to keep timing of waist readiness close to baseline.
-Re-apply MC makeup after shower, at end of dollsuit training.
`,
                },
                {
                    saveVersion: 6,
                    versionId: "0.10.0",
                    description: `Introduction to Dollsuit 
📚Story+Continuity:
* Seed more hints about MC having a history of blackouts and social anxiety.
* MC can attempt to decieve computer about true cause of blackout in mall, rather than blatant freak-out.
* Evaluate MC dimensions and Ballet skill to start dollsuit
* Introduce player to dollsuit with a first time donning passage.
* Add Dollsuit training sequence.
* After dollsuit training, MC can go to DoH to report computer as a violator the Butler-Hancock Act. 
* After dollsuit training, MC may request gender confirmation surgery from Pod health screen.

🗺️Worldbuilding:
* Add Second letter from Marissa to her heir
* Introduce fem chastity belt item. Provide mechanism for forced replacement of items.
* Set up 5k Race passages on Friday + Participation t-shirt + spin off for triathlon quest for high cardio participants.

✨UX Refinement:
-Hide a number of player details while they are encased by the dollsuit.
-Apply minor image effects for dollsuit passages.
-Fix a bunch of typos, layout and grammar issues I found while doing a playthrough from the start of the game.
-Styling of dialogue, email/letters, epilogue + computer.
-Use fonts to reinforce speaking style of certain characters.
-Update player status page to support revised genitals configuration.
-Add more orgasm faces for mc masturbation moments.
-Start masturbation passage variant for female MC.
-Label front genital attire appropriately for female MC at the Mirror.
-Ladies bathroom at the mall has finished renovations. MC can test their outfits there now, without the hassle of going home.
-Give hints of player readiness to use dollsuit when ballet and waist stats change appropriately.
-Fix Inner chamber to show details on first 3 visits
-Add Defiance + Compliance Dialogg Skills to regulate options

🐞Bugs/Accessibility:
* Allow player to go to FIRST DAY of internship in any casual attire they have. (MAY HAVE UNDESIREABLE CONSEQUENCES)
* standardize handling of dialogue passages to clean up text arising from sugarcube logic processing.
* After dollsuit, give player a not so subtle mention that the car can now take them to a Ballet Studio which they might like to check out, until they go
                `,
                },
                {
                    saveVersion: 6,
                    versionId: "0.9.1",
                    description: `Minor enhancements
📚Story+Continuity:
* Tie in ballet skill to initial dance situation at Vault.
🗺️Worldbuilding:
* Add initial bikini Swimwear + first time bikini passage

✨UX Refinement:
* Replicate bedroom options in cell
* Style emails + unread notification
* Expose App Info button on sidebar
* Add Version info to load screen
* Have IC shower remove + Add standalone makeup removal action + new animation on apply in IC
* Limit max image height for exercise images
* Add new coffee animation for feminine mc.
* Add animation for first time thigh-highs.

🐞Bugs/Accessibility:
* Fix typo on date with Sue
* Fix image filename casing
* Provide proper insufficient cash warning for ballet studio
* Fix avatar hair base image.

                `,
                },
                {
                    saveVersion: 6,
                    versionId: "0.9.0",
                    description: `Start Internship and Ballet Lessons
📚Story+Continuity:
* Implement Monday Internship
* Add Stacy Email 4
* Basic intern events of Tuesday 
🗺️Worldbuilding:
* Ballet Lessons, Images & attire
✨UX Refinement:
* Block work at computer once internship starts       
🐞Bugs/Accessibility:
* Fix "first time" clothing passages to account for location
* Mon Morning reminder for start-internship-on-monday
* Fix timing of emails to occur on Sundays
                `,
                },
                {
                    saveVersion: 5,
                    versionId: "0.8.2",
                    description: `Bug Fixes/Refinements

🐞Bugs/Accessibility:
* Change girly hair notification to be a heads up, not a call to action
* Add skill stats on completion of exercises
* Fix another misuse of "discrete" vs "discreet"
* Apply extensive set of  suggested grammar, spelling + text style cleanups as reported from sappho
* Add profile image for dance floor groper
* Get new image for salon concierge
* Add one-time warning about bleaching water damage for swimming with unprotected hair.
* Add first time wear messages for swimsuits and wetsuits
* When wearing outfit for first time, Redirect player back to the mirror they were using, not the bedroom mirror.
* Require motivator plug to be collected on same day as awarded.
* Allow player to stick with a "legacy" hairstyle
                `,
                },
                {
                    saveVersion: 5,
                    versionId: "0.8.1",
                    description: `Bug Fixes/Refinements

🐞Bugs/Accessibility:
* Be more explicit about needing to use the Tasks page on left pane when dropping luggage.
* Provide swimcaps as an attire option for swimming.
* Allow Wig when swimming :P
* Fix timing of panic attack warnings when in Grand hallway.
                `,
                },
                {
                    saveVersion: 5,
                    versionId: "0.8.0",
                    description: `Feature Additions: Stacy Emails, Girls Night With Sue, Hair Salon, Swimming Pool.

                🗺️Worldbuilding:
                * Introduce swimming pool location at Baldric House w/swimming exercise
                * Add ballet studio location (No activity yet)
                * Introduce Beauty Lounge location at mall 

                📚Story+Continuity:                                
                * Create first email from stacy to MC prior to start of trip                
                * Create Day 6 email from stacy about london + cleaning Pool
                * Day 6 (Monday) task to check for london Email
                * MC adds email account to watch, to allow for subsequent notifications.
                * Make reveal of swimming pool conditional on stacy's London Email
                * Day 13 Glasgow Email
                * Day 20 Belfast Email
                * Add Pool cleaning task-gated on stacey's email
                * Introduce Computer message to start internship after sufficient exp + hair length
                * Suppress baldric house front door messages once player looks like a girl by default
                * Set up 1st Spa day Sequence with Sue
                * Sat Task Morning reminder for Hair styling
                * Lounge outing passage with Sue
                * First visit to "The Vault" nightclub + dance floor encounter
                * Allow Hair styling change, dying and existing style trim at mall
                                
                ✨UX Refinement:
                * Set up MC's email UI on laptop
                * Add shaving to inner chamber bathroom
                * Add Color Shift convention for Hair styling options
                * Allow for selection of Hair Styles at salon
                * Allow selection of Hair Color at salon
                * Add Shortcut between MC bedroom and Email
                * Provide Email status indicator in bedroom
                * Add remove all wardrobe option at mirror
                * Allow for auto changing to casual outfit when leaving baldric house

                🐞Bugs/Accessibility:
                * Text: Fix up usages of "discretely" ->"discreetly" for subtle actions (Reported by mimi69 - Thanks!)
                * Continuity: Make sure relief task with Sue is only available after player has had cage in place (Reported by mimi69- Thanks!)
                * Don't repeat morning message about logistics the morning after meeting with Sue + Require player to complete logistics work day task for that day. (Reported by mimi69- Thanks!)
                * clean up some minor typos
                * Change Work opportunity for cleaning to occur after 6 days at factory, rather than gate on skill level.
                * Fix mangled dialogue passages with many interleaved "or"'s
                * Fix erroneous feedback of wearing boyish attire for girly MC
                * Disallow wigs for use when swimming
                
                🤓Internals:
                * Introduce UI toggling mechanism for chatty pages
                `,
                },
                {
                    saveVersion: 5,
                    versionId: "0.7.2-Preview",
                    description: `Preview build of upcoming features. NOT FOR GENERAL CONSUMPTION. FOR EARLY BUG FEEDDBACK FROM EXPERIENCED USERS ONLY.

                🗺️Worldbuilding:
                * Introduce swimming pool location at Baldric House w/swimming exercise
                * Add ballet studio location (No activity yet)
                * Introduce Beauty Lounge location at mall 
                
                📚Story+Continuity:
                * Create pool location & ingress/exit links
                * Assemble Images for pool swim exercise scenes.
                * Block MarisCorp work during weekend days.                
                * Add more breast change events (Thanks to Mimi69 for help on that)

                ✨UX Refinement:
                * Update clothing checks to explicitly allow for matched optional attire or nothing.
                * Establish hair Overlay model (Only visible in Developer Notes > Contribution Section currently)
                * Wire up renderer + test page for hair styles (Thanks for help from  GwenTGFan on getting this started)                
                * Introduce player to status page when dropping off luggage
                
                🐞Bugs/Accessibility:
                
                🤓Internals:
                * Transition from simple numeric day count to concrete Day, Week, month cycle, to start supporting weekly event structure
                * Factor Exercises to follow a standard template structure for new contributions                
                * Wire up Jest based Unit tests for Core libraries
                * Add support for auto-switching swimsuit outfit
                * Add Deterministic PRNG to support consistency of test runs.
                `,
                },
                {
                    saveVersion: 5,
                    versionId: "0.7.1",
                    description: `Fixes of Player reported issues

🐞Bugs/Accessibility:
* Polyfill String.replaceAll() for constrained/non-modern browsers which don't implement it. This error was blocking for some dialogue passages for folks using Internet Explorer or possibly some proprietary browsers.
* Fix formatting errors on Marissa's Personal Logs.
* Fix links from Marissa's Personal logs to not jump to console.
* Fix formatting error after some dialogue passages.
* Tidy up some minor grammar issues in text passages.
* Updated dev notes and start page to reinforce the importance of players reporting issues.
                `,
                },
                {
                    saveVersion: 5,
                    versionId: "0.7.0",
                    description: ` Story advancement               
🗺️Worldbuilding:
* Round out inventory of Shoes at Shoeboxx (Ankleboots, ballet flats, block heels, dress sandals, knee high boots, loafers, pumps, stilettos, wedge heels)
* Add task to Allow player to access a partial set of Marissa's personal logs at threshold + previews of corrupted files.

📚Story+Continuity:
* 2nd bedroom encounter with Sue
* Define initial latex outfits for MC
* Oh no, 2nd Breast Growth Incident Morning Event! MC can still cosplay in boy clothes.
* Hair growth Milestone  - morning event + Styling Tasks
* Allow wig-less outfits after player reaches girly hair threshold.
* Only allow MC to fast forward to Inner chamber, if wearing a feminine outfit.
* Allow MC to manually enter the inner chamber in any feminine outfit, not specifically the Final yoga outfit, as long as inner chamber was previously visited.

✨UX Refinement:
* Add "Ass" metric for body details
* Add "EstroMet" tracker for body details
* Expand variety for yoga + cardio exercise grind imagery

🐞Bugs/Accessibility:
* Fix presentation of fractions.
* Fix Player profile image resetting to day 0 appearance
* Consistency: Change issue motivator plug to be given based on # of visits to Elliptical, rather than performance from elliptical training

🤓Internals:
* Enable of Save last outfit to game state + Restore outfit from game state
* Enable masked/partial undress of items
* Define item creation template in ItemGenerator 
* Update Developer Notes doc to address recurring topics
                `,
                },
                {
                    saveVersion: 5,
                    versionId: "0.6.1",
                    description: `Bugfixes Update
                
🐞Bugs/Accessibility:
* Fix shower error with makeup removal
* Fix transcription bug - Move sports bra to go back to bra slot, not underwear
* Fix transcription bug - Re-enable missing athletic shoes in item generator
* Prevent availability of outfit assessments until after player has visited inner chamber for first time.
* Refine player avatar transitions to appear slightly more quickly, but still at a reduced pace.

`,
                },
                {
                    saveVersion: 5,
                    versionId: "0.6.0",
                    description: `The self-aware wardrobe update  :
🗺️Worldbuilding:
* N/A

📚Story+Continuity:
* Add alternate messages for drone and warehouse work + automatic outfit switch text.
* Cover Chest soreness as a health topic for the computer
* Shift facial drift to be hormonally induced each day, not merely a consequence of on time.
* Add simple first-time wear message for babydoll outfit

✨UX Refinement:
* Provide a Mirror in basement
* Provide expanded hover images for clothing
* Provide declarative explanation model for why an outfit was or wasn't accepted + Expose as dialog from mirror UI
* Auto switching to Exercise Outfit if available
* Set up auto-switching of Work and Sleep Outfits, if available.
* Label clothes by supported Activity with emoji & tooltips.

🐞Bugs/Accessibility:
* Stockings @ Covert - Populate for missing stockings item 41
* Refine message for chest sensitivity
* Fix up scaling of wedge shoes
* Apply Item sorting by ID not name in stores and wardrobe

🤓Internals:
* Major code housekeeping! Clean up of dead variables. Consolidate logic into appropriate modules. Kill off dead-end classes.
* Create metadata for clothing categories in internal Model to describe uses of clothes
* Generalize outfit recognition filters for casual, sleep, work, fitness, etc.
`,
                },
                {
                    saveVersion: 5,
                    versionId: "0.5.0",
                    description: `Misc Minor Expansion :
Worldbuilding
* Provide initial HR onboarding for drone operation.
* Introduce Player to Marissa's dollsuit after first day on drone ops

Story+Continuity:
* Add blouses at Olddorf
* Add Turtleneck tops at Olddorf
* Add hosiery at Covert Natasha
* Add boyshorts & briefs at C.N.
* Add Babydoll nightwear at Covert Natasha
* Provide first example of bodily state indicators on status screen (Chest)
* Populate initial stock of heels & wedges at Shoeboxx
* Refine dildo use text for repeat use

Bugs/Accessibility:
* Fix verbiage for tendril to be specifc underwear agnostic
* Provide explanations for blocked sleep
* Factor mirror to be usable from Gym
* Fix exhaustion threshold to retain motivator "benefits"
* Warn about socks at door.
`,
                },
                {
                    saveVersion: 5,
                    versionId: "0.4.0",
                    description: `World building update:
* Add womens formal wear store at mall + populate Outfits
* Define Covert Natasha storefront
* Add Yoga exercises
* Add lore around Maristech domestic services
* Add Department of Humanity registration interview for drone operator license

Story+Continuity:
* Expose work skill levels from status screen
* Generalize exercise model. Track for cardio and flexibility stats.
* Provide "motivator-plug" for improved fitness endurance and gains.
* Increase chest sensitivity in presence of min hormone threshold. Bra no longer optional.
* Warn about shaving + Provide shave action from Mirror
* Provide new image for showering at day 10
* Block ambiguous outfits at front door of house
* Continuity - Introduce male name to sue at beginning
* Add positive feedback from Sue to female PC when player has been exercising today.
* increase player endurance with motivator plug active
* Add bra-requirement from increased hormone induced sensitivity.
* Track initial body attributes for weight, height and waist from status screen. Adjust daily based on fitness status.
* Wire up work model to wrap up warehouse job
* Give initial variable feedback at work & Gym
* Add conversations with computer and experience with Sue wrt "relief"
* Add arousal tracking for main character
* Add work productivity penalty and reduced capacity for exercise due to poor sleep

Simplification:
* Allow player to shower and launder from Mirror

Bugs/Accessibility:
* Provide click-zoom view for currently worn clothing & portraits
`,
                },
                {
                    saveVersion: 4,
                    versionId: "0.3.1",
                    description: `Bug fixes and Clothing experience improvement

Simplification:
* From the closet, provide visual feedback about the outfit's effectiveness, once the player has reached the inner chamber
* Allow quick toggling makeup from the Mirror, once the player has reached Inner Chamber

Bugs/Accessibility:
* Reject outfits as non feminine if there is no head accessory/wig (for now)
* Block library cleaning, until player has dropped off their luggage
`,
                },
                {
                    saveVersion: 4,
                    versionId: "0.3.0",
                    description: `Story Expansion + Quality of Life improvements (Less clicking!)

Simplification:
* Add shortcuts to bypass multi-hop paths between major locations (Grand Hallway, Bedroom, Inner Chamber, Strip Mall, Central Mall)
* Auto-Clean clothes when showering.

Story+ Continuity:
*Enforce non-removability of special clothing
*Implement the "Consequences" of Day 6
*Allow sleeping in the pod in day 7+
*Allow repeated visits to elliptical + work
*Block sleeping for mandatory "today" tasks
*Add Mall dialogue for added confidence on second visit.
*Block purchase of specialized clothing until player reaches a higher level of clothing tolerance (Racy clothing tiers/styles to follow a similar model)
*Treat swimwear as first example of "contextual" clothing
*Force extreme path of day 6 as the canon path for now, to allow for player to reach Open world phase of clothing tolerance 2. (Support of the more "reasonable" branches will come in time)

Bugs/Accessibility:
*Fix broken day 1 reference to main character image references
*Require task for shaving, before player can successfully learn.
*Add $ prefix on prices
*Expand status page to cover clothing tolerance
`,
                },
                {
                    saveVersion: 4,
                    versionId: "0.2a.1",
                    description: `Story expansion + Minor bug fixes (May have minor save compatability issues)

Story:
*Provide player character with their first "job+income" at Maristech.
*Add Exercise room + initial exercise mechanic with repeatable Elliptical Exercise.
*Allow character to sleep after work and/or exercise after 7th day.  (Purely mechanical, no story from there yet)
*Add first "experiences" in the pod for day 6. ;)

Worldbuilding+ Continuity:
*Provide high level background about what Maristech does
*Add HR Rep and Warehouse supervisor characters
*Provide basement bathroom+ Shower

Internals:
*Make more subtle transitions of player portraits

Bugs/Accessibility:
*Stabilize for robin hood movie task order
*Fix for known occurrences of hard coded player character name use
*Fix for know file path issues
*Mirror - Tweak introductory experience slightly, to make use more obvious.
*Mirror - Fix for removing multi-slot clothing in all slots when putting on other clothing.

`,
                },
                {
                    saveVersion: 4,
                    versionId: "0.2a.0",
                    description: `A significant internal update. Task tracking support and major refactorings broke with past savegames in this update.

UX Refinements:
*Clean up presentation of store inventory
*Move Mirror to Player's room
*Add Task Tracker page + Integrate tasks in with existing experiences
*Provide red overlay for outfit items which are now removed.

Story:
*Add context about globe during dusting
*Require cleaning of theater + library on day 1

Internals:
*Break up css to Sass
*rationalize code usages from twee
*Separate codefiles for maintainability
*Enable modular loading of scripts.
*fix image paths for dialogue
*Provide interface for sugarcube variable usage.
*Factor common player logic to shared functions
*Start validating save games for compatability. 

Worldbuilding:
*Add store inventory at sporting goods

Bugs/Accessibility:
*Fix Reddit link which broke flow
*add html based Prompt + Stabilize Prompt for keyboard input
`,
                },
                {
                    versionId: "0.2.2",
                    description: `The Wardrobe UI update:
* Supplemental case Sensitivity fix for character images - Moved usages of profile images to strictly use lower case
* Upgraded clothing system to support creation, update, rename and deletion of named outfits with previews.
* Changed individual clothing change mechanism to only provide messages on first wearing of new clothes, and to only provide player commentary on first occurrence.
* Normalized location images towards ~600px width
* Cleaned up Inner Door logic to better handle wardrobe issues.
* Updated jogging cliffhanger message.
* Updated tests to handle Mirror-clothing system overhaul.`,
                },
                {
                    versionId: "0.2.1",
                    description: `Early bug reactions 
* Fixed bug where Clean house wasn't being recorded, and player could never sleep. Moved the day 4 "Clean House" action from the left side bar UI to occur in the Grand Hallway. Re-Tested to make sure the player can (watch movie, clean and sleep) or (clean, watch movie and sleep).
* Updated developer notes section to provide link to actual forum page for feedback. 
* Make init stage more strict + suppress presentation of in-game details on Left-bar, when viewing the Developer notes which is "out of game".
* Defined Version Log page.
* Standardize image paths to all use lower-casing.`,
                },
                {
                    versionId: "0.2.0",
                    description: `
* First public 'Alpha' version`,
                },
            ];
        }
        static summarizeVersions() {
            return Versioning.getVersionDescriptions()
                .map((item) => {
                let row = `<div class='version-group'>`;
                row += `<div class='version-header'>Version: ${item.versionId}\n</div>`;
                row += `<div>${item.description}\n</div>`;
                row += `</div>`;
                return row;
            })
                .join("");
        }
        static getCurrentVersion() {
            return Versioning.getVersionDescriptions()[0].versionId;
        }
    }
    exports.Versioning = Versioning;
    Versioning.saveVersion = 7;
    Versioning.lastSupportedVersion = 7;
});
