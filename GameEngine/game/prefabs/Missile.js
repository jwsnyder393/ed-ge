export default {
    name: "Missile",
    components:[
      {
        type:"CircleComponent",
        values:[
          {
            key:"radius",
            value:"2"
          },
          {
            key:"fill",
            value:"white"
          },
          {
            key:"stroke",
            value:"gray"
          },
        ]
      },
      {
        type: "MissileBehavior",
      },
      {
        type:"DotBehavior",
      },
      {
        type:"Point",
      },
    ]
  }