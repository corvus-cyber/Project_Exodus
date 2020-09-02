let scenario_2={
    id: 2,
    title: "",
    text: [
        "You find yourself in a long corridor, illuminated by several dim light bulbs lining the ceiling. Dark grey tiles stretch out in either direction. The portions of walls that aren’t rotted or peeling are covered in grotesque graffiti. The ceiling above is plastered with yellowed water stains. Several trays line the hallways along the walls. Bloody footprints form interweaving scarlet paths along the floor, including into the room behind you.",
        "Before you, a darkened hallway stretches before you. You can barely make out a door on the opposite end of the hallway. A broken exit sign hangs from the top of the doorway.",
        "A single flickering light faintly illuminates the room. The white paint on the walls is peeling, and the parts that aren’t are covered in graffiti. Pools of dark ichor cover the floor, faintly reflecting the light above. Several  syringes lie scattered across the floor, some of them partially filled with unknown liquids.",
        "Down the hallway to your left is a door partly ajar that reads “Operation”. A cold, white light pours through the doorway You can hear whimpering coming from this direction...It almost sounds like...a dog?",
        "What do you do?"
    ],
    options: [
        {
            id: 1,
            title: "Open the Door Ahead of You",
            text: ["You approach the exit door. The door is locked, and you clearly don’t have the strength to force it. You’ll need to find the key."],
            actions:[],
            toScenario: 1
        },
        {
            id: 2,
            title: "Enter Operation Room",           
            text: [""],
            actions:["selfDestruct",
            ],
            toScenario: 1
        },
        {
            id: 3,
            title: "Enter the Office",
            text: [""],
            actions:[],
            toScenario: 1
        },
        {
            id: 4,
            title: "testscen2",
            text: [""],
            actions:[],
            toScenario: 1
        }]
};
export default {scenario_2};