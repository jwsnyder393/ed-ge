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
          value:"purple"
        },
        {
          key:"stroke",
          value:"white"
        },
      ],
    },
    {
      type: "PlayerBehavior",
    },
  ]
}