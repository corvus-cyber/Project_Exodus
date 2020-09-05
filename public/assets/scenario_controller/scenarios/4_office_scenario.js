let scenario_4={
    id: 4,
    title: "",
    text: [
        "As you approach the door you begin to make out the characters on the tarnished plaque: Dr. Tucker",
        "You open the door and walk in to find yourself within an office room. Stacks of books, binders, and papers lay scattered across the floor. Wooden shelves stand along the walls of the room, weathered and worn. Each shelf is lined with jars of all shapes and sizes, each one filled with luminescent liquids and disembodied human parts.",
        "In the center of the room stands a desk that is completely cluttered. You can however make out a corded office phone sitting on the desk.",
        "On the left wall, there is a closet door. A faint green glow peeks through the crack underneath the doorway.",
        "What do you do?"
    ],
    options: [
        {
            id: 1,
            title: "Search the Top of the Desk",
            text: ["Other than the phone, there may be something useful on the desk. You begin sifting through the piles of papers and folders on the desk, opening the drawers in turn, trying to find anything useful.",
                    "On top of the desk lying face down is a small picture. In it, a man in a doctor’s coat has hoisted a little girl into the air, her face radiant with glee. In the corner of the picture, you make out what appears to be a large white dog. What’s odd about this photo is that the doctor's face has been burned away."
        ],
            actions:["selfDestruct"],
            toScenario: 3,
        },
        {
            id: 2,
            title: "Search the Drawers",
            text: ["In the top drawer, you find a ring of keys. You palm them quickly. They will probably come in handy later."],
            actions:["selfDestruct, getKey"],
            toScenario: 3
        },
        {
            id: 3,
            title: "Look Through the Journal",
            text: ["You decide to look through the journal to gain clues about why you are here. It appears to be some sort of logbook. The pages are worn and yellowed with age, although the latest appear to be freshly made.",
                    "Day 2: Subject 213 is still responding well to the solution. No visible changes.",
                    "Day 3: Prep work for operation complete. Subject ready for experiment. Graft 1-5 success. Subject shows promise for organ transfer.",
                    "This writing goes on for pages. It’s clear that you aren’t the first person trapped here. You still have no idea what this place is, but one thing is clear: you need to get the hell out."   ],
            actions:[""],
            toScenario: 0
        },
        {
            id: 4,
            title: "Leave the Room",
            text: [""],
            actions:[],
            toScenario: 1
        }]
};
export default {scenario_1};