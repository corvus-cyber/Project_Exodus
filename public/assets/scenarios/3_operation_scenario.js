let scenario_3={
    id: 3,
    title: "Hallway",
    text: [
        "You find yourself in a long corridor, illuminated by several dim light bulbs lining the ceiling. Dark grey tiles stretch out in either direction. The portions of walls that aren’t rotted or peeling are covered in grotesque graffiti. The ceiling above is plastered with yellowed water stains. Several trays line the hallways along the walls. Bloody footprints form interweaving scarlet paths along the floor, including into the room behind you.",
        "Before you, a darkened hallway stretches before you. You can barely make out a door on the opposite end of the hallway. A broken exit sign hangs from the top of the doorway.",
        "own the hallway to your right stands a wooden door with a tarnished plaque that you can’t quite make out at this distance, although it looks like it might be an office of some sort. This hallway appears better lit than other parts of the facility you’ve seen.",
        "Down the hallway to your left is a door partly ajar that reads “Operation”. A cold, white light pours through the doorway You can hear whimpering coming from this direction...It almost sounds like...a dog?",
        "What do you do?"
    ],
    options: [
        {
            id: 1,
            title: "Open the Door Ahead of you",
            text: ["You approach the exit door. The door is locked, and you clearly don’t have the strength to force it. You’ll need to find the key."],
            killPlayer: false,
            hasKey: false
        },
        {
            id: 2,
            title: "Open the Door Ahead of you",
            text: ["(switch to ending)"],
            killPlayer: false,
            hasKey: true
        },
        {
            id: 3,
            title: "Enter the Operation Room",
            text: [""],
            killPlayer: false
        },
        {
            id: 4,
            title: "Enter the Office",
            text: [""],
            killPlayer: false
        }]
};