export default {
    name: "FastBoat",
    components:[
      {
        type:"RectangleComponent",
        values:[
          {
            key:"width",
            value:"40"
          },
          {
            key:"height",
            value:"15"
          },
          {
            key:"fill",
            value:"green"
          },
          {
            key:"stroke",
            value:"black"
          },
        ]
      },
      {
        type: "AABBCollider",
        values: [
          {
            key: "width",
            value: "40",
          },
          {
            key: "height",
            value: "15",
          },
        ]
      },
      {
        type: "FastBoatBehavior",
      },
    ]
  }