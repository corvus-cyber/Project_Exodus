let scenario_2={
    id: 2,
    title: "",
    text: [
        "You find yourself in a long corridor, illuminated by several dim light bulbs lining the ceiling. Dark grey tiles stretch out in either direction. The portions of walls that aren’t rotted or peeling are covered in grotesque graffiti. The ceiling above is plastered with yellowed water stains. Several trays line the hallways along the walls. Bloody footprints form interweaving scarlet paths along the floor, including into the room behind you.",
        "Before you, a darkened hallway stretches before you. You can barely make out a door on the opposite end of the hallway. A broken exit sign hangs from the top of the doorway.",
        "Down the hallway to your right stands a wooden door with a tarnished plaque that you can’t quite make out at this distance, although it looks like it might be an office of some sort. This hallway appears better lit than other parts of the facility you’ve seen.",
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
            actions:[            ],
            toScenario: 2
        },
        {
            id: 3,
            title: "Enter the Office",
            text: [""],
            actions:[],
            toScenario: 1
        },
        ]
};
export default {scenario_2};