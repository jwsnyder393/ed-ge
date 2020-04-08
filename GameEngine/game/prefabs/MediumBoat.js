export default {
    name: "MediumBoat",
    components:[
      {
        type:"RectangleComponent",
        values:[
          {
            key:"width",
            value:"50"
          },
          {
            key:"height",
            value:"20"
          },
          {
            key:"fill",
            value:"yellow"
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
            value: "50",
          },
          {
            key: "height",
            value: "20",
          },
        ]
      },
      {
        type: "MediumBoatBehavior",
      },
    ]
  }