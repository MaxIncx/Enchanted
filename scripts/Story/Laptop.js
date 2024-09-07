(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Core", "../TimeModel", "./Dialogue"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Laptop = void 0;
    const Core_1 = require("../Core");
    const TimeModel_1 = require("../TimeModel");
    const Dialogue_1 = require("./Dialogue");
    class Emails {
        static StaceyEmailDate(id) {
            return TimeModel_1.TimeModel.getDate(id * 7 - 1);
        }
        static drawEmailHeader(email) {
            return `
        <b>From:</b> ${email.from}
        <b>To:</b> ${Emails.billyEmail}
        <b>Date:</b> ${email.date.toLocaleString(TimeModel_1.DateTime.DATE_MED_WITH_WEEKDAY)}
        <b>Subject:</b> ${email.subject}
        `;
        }
        static isEmailUnread(email) {
            const passage = email.passage;
            return passage != null && !Core_1.CoreUtils.hasPlayed(passage);
        }
        static drawEmail(passageName) {
            const index = Emails.emails.findIndex((email) => {
                return email.passage == passageName;
            });
            if (index < 0) {
                return "";
            }
            const email = Emails.emails[index];
            var content = `${Emails.drawEmailHeader(email)}
        <div class="email">${email.content}</div>        
        `;
            if (email.realization && Core_1.CoreUtils.visitedCount("stacy-email-5") <= 1) {
                content += Dialogue_1.Dialogue.heir(email.realization);
            }
            return content;
            //Note: The return link is drawn by page to allow for conditional logic.
        }
        static drawEmailRow(email) {
            if (Emails.isReachable(email)) {
                return "";
            }
            const title = email.passage != null ? `[[${email.subject}|${email.passage}]]` : email.subject;
            const titleStyle = Emails.isEmailUnread(email) ? "unread" : "";
            return `<tr  class="mail-row">\            
            <td class="mail-from">${email.from}</td>\
            <td class="mail-title ${titleStyle}">${title}</td>\
            <td class="mail-date">${email.date.toLocaleString(TimeModel_1.DateTime.DATE_MED_WITH_WEEKDAY)}</td>\
        </tr>`;
        }
        static drawAllEmailRows() {
            let rows = "";
            Emails.emails.forEach((item) => {
                rows += Emails.drawEmailRow(item);
            });
            return rows;
        }
        static returnToEmail() {
            return "[[Check Email|Billy Personal Email]]";
        }
        static drawEmailsPage() {
            return `
        <div class="email-site">\
            <div class="email-header-section">\
                <span>🐕 dmail.com</span>\
            </div>\
            <div>\
            <table>\
            <tr class="mail-row">\                
                <th class="mail-from" >From</th>\
                <th class="mail-title">Title</th>\
                <th class="mail-date">Date</th>\
            </tr>\
           ${Emails.drawAllEmailRows()}
            </table>\
            </div>\
        </div>\
        `;
        }
        static countUnreadMails() {
            let count = 0;
            Emails.emails.forEach((item) => {
                count += Emails.isEmailUnread(item) && !Emails.isReachable(item) ? 1 : 0;
            });
            return count;
        }
        static isReachable(email) {
            return email.date > TimeModel_1.TimeModel.now();
        }
    }
    Emails.billyEmail = "billyDaKid@dmail.com";
    Emails.stacyEmail = "princessStace@dmail.com";
    Emails.dayBeforeStart = TimeModel_1.TimeModel.getDate(-1);
    Emails.emails = [
        {
            date: TimeModel_1.TimeModel.getDate(-2),
            from: "deals@Sketchy.com",
            subject: "Enlarge your wang",
        },
        {
            date: Emails.dayBeforeStart,
            from: "SteveMalone@nigerianprince.com",
            subject: "re: Big Investment opportunity - Foreign money exchange",
        },
        {
            date: Emails.dayBeforeStart,
            from: Emails.stacyEmail,
            subject: "Try not to burn the house down while we're gone!",
            passage: "stacy-email-0",
            content: `Hey Billy,

            Thanks again for keeping an eye on the place. Try not to get too bored.
            
            Don't worry about the creaking noises around the library. That's just the friendly house Ghost, Steve👻!
            
            Ok, after getting up sick early, and clearing security quick, now we're just waiting for our plane to arrive. It's looking like they're behind schedule. This 👏 is 👏 so 👏 lame 😔
            
            Anyway, my mom mentioned the movie theater and library were a bit of a mess when we left, and she'd like you to get those nice and clean. Also, later in the week, she'd like you to give the grand hall a look. 🧹🧹🧹
            
            Toodles,
            
            Stace
            
            P.S. As we discussed, I'll try to send a mail about once a week, on Sundays.`,
        },
        {
            date: Emails.StaceyEmailDate(1),
            from: Emails.stacyEmail,
            subject: "✨In London✨",
            passage: "stacy-email-1",
            content: `Hi Billy,

            How has the first week been? I hope you haven't been too bored by yourself there.
            
            If it makes you feel better, getting to London sucked. Our first flight departure got delayed and arrived late, and we weren't able to catch our connection. Dad ended up having to reschedule a work meeting and was flipping mad, I felt sorry for the poor gate agent. Once we got settled in though, London was fun. I got this sweet shot while on our landing approach. #jetlife
            <<=SugarCube.getLib().Images.drawAction("london-flyover.jpg")>>
            
            Seeing Buckingham palace with mom was a lot of fun. The horses the guards ride are so majestic when you see them in person. Anyway, after Buckingham Palace, my dad really seemed to be excited about the British War Museum, but he was soooooo sloowwwwww 🐢💀 in looking at all the exhibits, so Mom and I dumped him there for a while to do some shopping! 🤑 We went to the Burberry store on Regent street. She got me this really gorg trenchcoat, which is handy for the rain. Which it seems to do a lot of here. Like, all the time.
            <<=SugarCube.getLib().Images.drawAction("burberry.jpg")>>
            
            While in London, we we've been going all over the place in the "tube" - we were totally talking like locals, having our bangers and mash, and then going to the loo, ha ha ha. We saw a play at a replica of Shakepeare's Globe Theater. Apparently, it was like really scandalous for women to act, so instead they would have had boys playing all the girl parts. Can you imagine? Actually, the show of Henry IV we saw, flipped things, it had an all female cast. It wasn't too shabby. Had a dessert of Sticky Toffee Pudding after the show. Mmm, soo good. Ok, maybe we're being a little basic, but it's been nice.
            
            So many amazing things here. My insta has a lot of pictures from it. My dad is getting a fancy old man midlife-crisis sports car for the next part of the trip. We're going to do road trip around Scotland to see castles, nature and stuff. 🥱
            
            By the way, my mom wasn't sure if she told you to keep an eye on the pool PH, and asked me to remind you. You've seen the pool, right? You can get to it at the door near the exercise area. Make sure to keep it between 7.2 and 7, using the pool supplies from the cabinet in the exercise area. It should normally be checked every few days. PLEASE CHECK IT NOW, LIKE ASAP!⚡ No one wants algae. Eww, so gross. Be sure to get some swim time and sun yourself Billy, it's the summer, you don't want to be all pasty.

            Stacy 😉
            \
            <<if SugarCube.getLib().Tasks.hasTask("check-emails")>>\
            <<=SugarCube.getLib().Tasks.removeTask("check-emails")>>\
            <</if>>\
            <<if(SugarCube.getLib().CoreUtils.visitedCount()==1)>>\
            <<=SugarCube.getLib().Tasks.addTask("need-to-clean-pool")>>\
            <</if>>`,
            realization: "You have a pool here!? Sheesh, I am just finding about this now?",
        },
        {
            date: Emails.StaceyEmailDate(2),
            from: Emails.stacyEmail,
            subject: "Stopping in Glasgow 🏰",
            passage: "stacy-email-2",
            content: `Hi Billy,

            Sigh, I've already started to miss London.
            
            On Tuesday we started the drive up doing stops at old timey bed and breakfasts and such. At one of the little places we've been staying at, would you believe they use creepy robots for maids? So weird, right?

            Speaking of technology, we stopped in Manchester, and saw their Museum of Science and Industry. Turns out that was like where the industrial revolution really got started. They mass produced textiles (Yay, clothes), made the first canals, they have one of the oldest continuously operating railway stations in the world! It looks like the station out of  Harry Potter... lol.

            Now we're in Glasgow, and have started to see the sights out here. 
            <<=SugarCube.getLib().Images.drawAction("glasgow-gallery.jpg")>>
            
            We did a couple nature walks, and we haven't even been to the real highlands yet. I totally didn't pack shoes for this sort of thing. ughh.👿🥾

            The food is similar to the stuff we saw at London restaraunts. I liked this one meat pie shop in town here, the crust was nice and flaky but yummy for a savory pie. So scrummy. 
            <<=SugarCube.getLib().Images.drawAction("scottish-meat-pie.jpg")>>
            
            Weather has been a bit rainy at times, so I've been learning some french on Duolingo to prepare for later part of trip.

            Anything interesting on your end Billy? Let me guess, playing some new video game for hours at a time? hahaha
            
            Stacy
            `,
        },
        {
            date: Emails.StaceyEmailDate(3),
            from: Emails.stacyEmail,
            subject: "Prisoner in Belfast ☘️",
            passage: "stacy-email-3",
            content: `Hi Billy,
            
            Ughh, I feel like a prisoner. My Dad caught me heading out to a club in this cute outfit, and grounded me for two days! Can you believe it? He asked the hotel staff to make sure I wouldn't leave the premises so "I can think about the consequences of my actions, as a responsible young woman." Can you imagine being so humiliated? Like, obviously not, right?! I'm an adult, not his little girl anymore. If a boy wanted to go out for fun, their parents wouldn't do anything. But no, its like I'm getting locked away in the tower! These sort of double standards are such bs it makes me so mad sometimes. 😡😡😡
            
            Well, who says a grounded girl needs to go out to entertain herself? After I got bored with my French practice, I cornered one these housekeeper robots, which was sent to essentially spy on me and make sure I didn't leave the building while I'm grounded. Really creepy, how lifelike they are, up close especially when you first see them. I hate how these things reinforce societal expectations and objectify women, like why don't they have men clean the rooms, right? So many guys only seem to have on thing on their mind, its so gross and disgusting. They could learn a thing from a nice boy like you, to be more respectful and realize that girls can like having boys around to just be friends without icky stuff getting in the mix.
            
            Anyway, this robot thing. I asked it a bunch of questions and it surprised me how sophisticated its answers were. The thing, it, her, I don't know.... Their chests move as if they are breathing. Not sure if you've seen their uniforms but they are kind of shiny. I guess it makes 🤖 seem more futuristic than giving them normal clothes. Like they don't get to choose their outfits, so couldn't they give it something a little more normal? Just another example of the patriarchy objectifying women and holding them to unreasonable standards. Just some other object for men to sexualize. Again, I'm so glad you're a good friend and not a 🐖 like that, Billy. The way movies describe robots, I would have expected its skin to be cold to the touch or something. Not like people can have sex with these robots or anything, though. This model is like a barbie doll down there, it is smooth plastic... The wikipedia page says so. Ha ha ha. 😉
            
            Otherwise, Ireland has been ok, we took a ferry from this place called Cairnryan to Belfast. They used to do a lot of shipping and shipbuilding here. Did you know they built the titanic here? We went to this fancy museum that talked about how it was built and what happened. It hits you that people like you or me could have been partying and voyaging on that ship at one moment, and the next it's sinking to the bottom of the Atlantic! I don't understand why they didn't bother putting more lifeboats and do more to to keep everyone safe.
            <<=SugarCube.getLib().Images.drawAction("titanic.jpg")>>
                     
            Also learned about the "troubles"... Mom really liked U2 and she had me listen to "Sunday Bloody Sunday", before we visited to the Irish Republican Museum. It's crazy, after fighting some war with the British long ago, the King of England made big parts of Ireland which didn't like him into a "plantation" that could be settled by his supporters from England and Scotland. Folks who didn't go along with things could have everything taken away from them. After Ireland got its independendence, Northern Ireland stayed with the England and the Irish were still discriminated against here. Things got really ugly in the 60s. It makes me so sad all the violence and how many innocent people got caught in the middle of that turmoil. Not something I remember hearing in school - kinda makes you wonder what else they don't teach us, but they can find time to get us to memorize stuff like when the Magna Carta was signed?
                 <<=SugarCube.getLib().Images.drawAction("irish-republican-museum.jpg")>>
            
            Sorry, the last few days have really gotten under my skin, I needed to vent. Thanks for being there. Next, we move on to Dublin for a bit, and then we go to Paris!!! 🥖

            Hugs,

            Stace 😉
            `,
        },
        {
            date: Emails.StaceyEmailDate(4),
            from: Emails.stacyEmail,
            subject: "Leaving Ireland☘️",
            passage: "stacy-email-4",
            content: `Heyy,

            Have you gotten some sun like I suggested? I hope so. After Belfast, we went up the coast to see the Giant's Causeway. It was a bit windy and cold out on the rocks, but wild seeing those hexagonal biscuits.
            <<=SugarCube.getLib().Images.drawAction("giant-causeway.jpg")>>

            We went to see the Jameson Distillery and a few others in town. Whiskey isn't really my thing, but my Dad really liked getting bottles of fancy whiskies.
            <<=SugarCube.getLib().Images.drawAction("jameson-distillery.jpg")>>

            Even to someone like me, the giant pot stills are kind of impressive looking with the shiny copper - you can tell these folks really take their drinks seriously.
            <<=SugarCube.getLib().Images.drawAction("distillery-inside.jpg")>>
        
            Giants and Whiskey aside, we did a little sightseeing at the old cathedrals, the national museum of Ireland and of course, found an old "chipper". The food was actually pretty greasy, but at least I got to try it, I guess.
            <<=SugarCube.getLib().Images.drawAction("leo-burdocks.jpg")>>

            We're getting ready for the next leg of the trip, in PARIS!

            Stacy 😉
            `,
        },
        {
            date: Emails.StaceyEmailDate(5),
            from: Emails.stacyEmail,
            subject: "Settled into Paris!🥐🥖",
            passage: "stacy-email-5",
            content: `Heyy,

            Three  days ago we arived in Paris. Everything here is so pretty, the boulevards, the cafes, the yummy macarons.
           
            You may have noticed my new pictures are a little nicer... My dad realized he may have been a bit of a jerk earlier in the trip, and got me a new SLR camera as a peace offering - let's see if he can stick with it this time... Anyway, I'm playing with all the settings now. Here's one shot of a street I took at nighttime. 
            <<=SugarCube.getLib().Images.drawAction("paris-night.jpg")>>
            
            Stuff like the coblestones and the balconies really tie it together. It just has so much more character than back home.
            <<=SugarCube.getLib().Images.drawAction("paris-street.jpg")>>
            <<=SugarCube.getLib().Images.drawAction("paris-arcade.jpg")>>
            <<=SugarCube.getLib().Images.drawAction("paris-macaron.jpg")>>  
            
            Obviously we went to the Louvre to see the Mona Lisa. I still say she has nothing on me.
            <<=SugarCube.getLib().Images.drawAction("paris-louvre.jpg")>>

            The new guesthouse we're staying at has more of these robot maids. I've been reading up more about them. I tried having a conversation with this one - something about them just seems weird. Like where does this go? 

            By the way, did you hear about the bombing of the Maristech Office block in Indianapolis? They said that the [[The Red Hands]] took reponsibility for that one as well. I cried all afternoon at the thought of all those innocent people and their familes. I'm sorry for getting all dark with that, it just makes me mad that they can't just talk these things out like normal adults. Like sure, some stuff is getting weird, but you can't go blowing people up just because you're upset.😔

            Stacy\
            <<if( SugarCube.getLib().CoreUtils.visitedCount("stacy-email-5")<=1 && !SugarCube.getLib().Tasks.hasTask("meet-stacy-as-drone"))>>\
            <<=SugarCube.getLib().Tasks.addTask("meet-stacy-as-drone")>>\            
            <</if>>\
            `,
            realization: "hmm... Is she talking about a Maristech Domestic Drone? I wonder if I might be able to operate a drone to meet her!?",
        },
        {
            date: Emails.StaceyEmailDate(6),
            from: Emails.stacyEmail,
            subject: "Ok, I want to live in Paris!🥐",
            passage: "stacy-email-6",
            content: `Heyy,

            This last week was nice. The Musée d'Orsay was an old train station along the Seine, that they turned into a museum of modern French art. So many paintings from Monet, Renoir and all those folks.
            <<=SugarCube.getLib().Images.drawAction("d-orsay.jpg")>>
            
            Luxembourg gardens were really pretty. It's not the same place, but seeing all the people out on the grass enjoying their afternoon, it reminded me of that big Seurat mural back home, "La Grand Jatte".

            We saw a dinner show at the Moulin Rouge Cabaret. I guess at the time it was a kind of scandalous place, but it seemed more like a slightly skimpy broadway show. When we were there, it was a lot of older groups. The dancers were all really pretty and all seem so confident, but I don't think I like the way it's all kind of made to make money off the gaze of the rich white male. From that I've been kind of curious - would a Cabaret make sense in a feminist world?
            <<=SugarCube.getLib().Images.drawAction("moulin-rouge.jpg")>>

            We took a little day trip by train from Gare de l'Est to the champagne region which was less than an hour to get to. They provided some tastings. My dad had us go to a whole bunch of scheduled spots. The places all seemed to be really fancy estates. It seemed like a really idylic area. At some places, the guides would point out areas where there was still damage to buildings from the fighting during the war. At first I was swallowing everything, but by the middle of the tastings, I was already feeling pretty buzzed, so I copied my Mom and started using the spit bucket. It's kind of sad to waste perfectly good wine, but we would have gotten drunk off our gourds otherwise.
            <<=SugarCube.getLib().Images.drawAction("champagne-field.jpg")>>            

            Did some other stuff too, and this just scratches the surface, but, this email is starting to get long. I hope you're having fun Billy...

            Stacy
            `,
        },
    ];
    class Laptop {
        static showEmails() {
            return Emails.drawEmailsPage();
        }
        static drawEmail() {
            const passageName = Core_1.CoreUtils.getPassageName();
            return Emails.drawEmail(passageName);
        }
        static returnToEmailsPage() {
            return Emails.returnToEmail();
        }
        static getEmailShortcutLink() {
            const count = Emails.countUnreadMails();
            let content = `<span class="jump-link">`;
            if (count > 0) {
                content += `<span class="unread">[[(✉You have unread messages)|Billy Personal Email]]</span>`;
            }
            else {
                content += `[[(✉No new messages)|Billy Personal Email]]`;
            }
            content += `</span>`;
            return content;
        }
    }
    exports.Laptop = Laptop;
});
