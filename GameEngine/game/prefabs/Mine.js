export default {
  name: "Mine",
  components:[
    {
      type:"CircleComponent",
      values:[
        {
          key:"radius",
          value:"7"
        },
        {
          key:"fill",
          value:"gray"
        },
        {
          key:"stroke",
          value:"gray"
        },
      ]
    },
    {
      type: "CircleCollider",
      values: [
        {
          key: "radius",
          value: "15",
        },
      ]
    },
    {
      type:"CollisionCircleBehavior",
    },
    {
      type: "MineBehavior",
    },
  ]
}