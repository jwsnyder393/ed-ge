export default {
	name: "SceneOne",
	
	objects : [
  {
		name: "Background",
		location: {x:0, y:0},
    type:'Background',
  },
  {
		name: "ScoreText",
		location: {x:465, y:40},
    type:'ScoreText',
  },
  {
		name: "Timer",
		location: {x:150, y:40},
    type:'Timer',
  },
  {
    name: "Player",
    location: {x:280, y:465},
    type: 'Player',
  },
  {
    name: "Periscope",
    location: {x:280, y:107.5},
    type: 'Periscope',
  },
  ]
}