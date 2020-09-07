let scenario_5={
    id: 4,
    title: "",
    text: [
        "It takes you a few moments to find the correct key, but you finally unlock the door. You open the door and step through. You find yourself in a room that is illuminated only by the pale moonlight shining through the windows on the far wall.",
        "After a moment, you realize that you are in some sort of waiting room, or what’s left of it. Faded magazines line the floor, aged couches with rips and stitches are strewn about the room, the ceiling seems to be caving in at one spot. Straight ahead is a glass door. Surely that has to be the exit.",
        "You hear a groaning ahead of you. You turn and gasp as a hulking mass emerges from the shadows, an ungodly abomination with body parts stitched all over it. Multiple arms protrude from its torso, its many gnarled fingers reach towards you. A mass of tubes are attached to its chest, transporting some sort of liquid. Metal rods protrude from its joints, causing the abomination to shamble awkwardly.",
        '“No One Leaves….” It groans as it begins to walk towards you, “Doctor’s orders.”',
        "What do you do?"
    ],
    options: [
        {
            id: 1,
            title: "Run for the Door",
            text: ["You need to get out of here. You run towards the door and begin trying keys frantically. Something large collides with you and fly into the wall, knocking the wind out of you. You cough, trying to get back on your feet as the monster approaches you. With curled fists, it begins slamming its fists into you, again and again...."],
            actions:["killPlayer"],
            toScenario: 4
        },
        {
            id: 2,
            title: "Defend Yourself",
            text: ["After looking around frantically for a weapon and finding none, you hold up your fists. You aren’t going to go down easily. When the monster shambles into striking range, you begin punching it with all your might. It feels like punching a brick wall. A wheezing laughter emanates from the monster’s throat as it grabs your head in its hands and with a swift motion, snaps your neck. ",
            ],
            actions:["killPlayer", "attackMon"],
            toScenario: 4
        },
        ]
};
export default {scenario_3};