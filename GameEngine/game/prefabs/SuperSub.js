export default {
    name: "SuperSub",
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
            value:"10"
          },
          {
            key:"fill",
            value:"grey"
          },
          {
            key:"stroke",
            value:"white"
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
            value: "10",
          },
        ]
      },
      {
        type: "SubBehavior",
      },
    ]
  }