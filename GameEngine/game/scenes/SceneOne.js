export default {
	name: "SceneOne",
	
	objects : [
  /*{
    name:"Napster",
    type:'Napster',
    location:{x:0,y:0}
  },*/
  {
		name: "Background",
		location: {x:0, y:0},
		type:'Background',
  },
  
  {
    name: "Top Box",
    location: {x:0, y:0},
    type:'TopBox',
    children: [
      /*{
        name: "TopBoxDivider",
        location: {x:0, y:0},
        type: 'TopBoxDivider',
      },
      {
        name: "TopBoxDivider",
        location: {x:160, y:0},
        type: 'TopBoxDivider',
      },
      {
        name: "TopBoxDivider",
        location: {x:320, y:0},
        type: 'TopBoxDivider',
      },
      {
        name: "TopBoxDivider",
        location: {x:480, y:0},
        type: 'TopBoxDivider',
      },*/
      {
        name: "Countdown",
        location: {x: 60, y:60},
        type: 'Timer',
      },
      {
        name: "Score",
        location: {x:230, y:60},
        type: 'ScoreText',
      },
      {
        name: "Ready",
        location: {x:380, y:50},
        type: 'ReadySignal',
      },
      {
        name: "Counter Cirlce",
        location: {x:480, y:60},
        type: 'CounterCircle',
        children: [
          {
            name: "Counter",
            location: {x:-12, y:13},
            type: 'Counter',
          },
        ]
      },
      {
        name: "Reload",
        location: {x:530, y:50},
        type: 'ReloadSignal',
      },
    ]
  },
  {
    name: "Enemy Boat Field",
    location: {x:0, y:120},
    type: 'BoatField',
    children: [
      {
        name: "Fast Boat",
        location: {x:70, y:60},
        type: 'FastBoat',
      },
      {
        name: "Medium Boat",
        location: {x:260, y:60},
        type: 'MediumBoat',
      },
      {
        name: "Slow Boat",
        location: {x:150, y:60},
        type: 'SlowBoat',
      },
      {
        name: "SuperSub",
        location: {x: 0, y:-5},
        type: 'SuperSub',
      },
      {
        name: "Periscope",
        location: {x:0, y:-12.5},
        type: 'Periscope',
      },
    ]
  },
  {
    name: "Mine Field",
    location: {x:0, y:240},
    type: 'MineField',
    children: [
      {
        name: "Mine",
        location: {x: 60, y:50},
        type: 'Mine',
      }
    ]
  },
  {
    name: "Player Boat Field",
    location: {x:0, y:360},
    type: 'BoatField',
    children: [
      {
        name: "Player",
        location: {x:280, y:100},
        type: 'Player',
        children: [

        ],
      },
    ]
  },
  ]
}