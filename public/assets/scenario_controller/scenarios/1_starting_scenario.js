let scenario_1={
    id: 1,
    title: "",
    text: [
        "The first thing you notice when you awaken is a deep, aching pain throughout your entire body. Your head throbs painfully, as though it were being squeezed in a vice grip. You look down and notice that all you are wearing is a soiled hospital gown, covered with stains from God knows what. You are lying on some kind of hospital bed that’s been stained with blood, some of it fresh.",
        "Slowly, you lift yourself to an upright sitting position. A soft, cold breeze whistles through the cracks of a boarded window behind you.",
        "A single flickering light faintly illuminates the room. The white paint on the walls is peeling, and the parts that aren’t are covered in graffiti. Pools of dark ichor cover the floor, faintly reflecting the light above. Several  syringes lie scattered across the floor, some of them partially filled with unknown liquids.",
        "You slowly slide off the bed onto your feet. The cold tiles beneath you send a shiver up your spine. You can’t remember anything about how you got here or who you even are. You quickly scan the room for anything of use. Beside you resting on a rusted metal table is what appears to be an open journal of some kind, as well as what seem to be several rolls of bandages. A solitary metal door stands across the room from you.",
        "What do you do?"
    ],
    options: [
        {
            id: 1,
            title: "Look down and Examine Yourself",
            text: ["You look down to better gauge your physical state, and it becomes instantly clear why you ache so much. Your arms and legs are covered in stitches surrounding patches of skin that are clearly not your own. Some of them are light, others are dark. One patch on your right arm appears to be rotten and decaying."],
            actions:[],
            toScenario: 0
        },
        {
            id: 2,
            title: "Grab the Bandages",
            text: ["It appears that some of your stitches are still seeping blood and plasma. You quickly grab the bandages on the table and wrap your wounds. Not the best job, but it’ll work for now."],
            actions:["selfDestruct",
            ],
            toScenario: 0
        },
        {
            id: 3,
            title: "Look Through the Journal",
            text: ["You decide to look through the journal to gain clues about why you are here. It appears to be some sort of logbook. The pages are worn and yellowed with age, although the latest appear to be freshly made.",
                    "Day 2: Subject 213 is still responding well to the solution. No visible changes.",
                    "Day 3: Prep work for operation complete. Subject ready for experiment. Graft 1-5 success. Subject shows promise for organ transfer.",
                    "This writing goes on for pages. It’s clear that you aren’t the first person trapped here. You still have no idea what this place is, but one thing is clear: you need to get the hell out."   ],
            actions:[],
            toScenario: 0
        },
        {
            id: 4,
            title: "Go Through the Door",
            text: [""],
            actions:[],
            toScenario: 1
        }]
};
export default {scenario_1};