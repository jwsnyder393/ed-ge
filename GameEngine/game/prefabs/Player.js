export default {
  name: "Player",
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
          value:"rgba(255,255,255,0)"
        },
        {
          key:"stroke",
          value:"rgba(255,255,255,0)"
        },
      ],
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
      type: "PlayerBehavior",
    },
  ]
}