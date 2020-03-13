export default {
    name: "Periscope",
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
            value:"25"
          },
          {
            key:"fill",
            value:"rgba(255,255,255,0)"
          },
          {
            key:"stroke",
            value:"black"
          },
        ]
      },
      {
        type: "MovementBehavior",
      },
    ]
  }