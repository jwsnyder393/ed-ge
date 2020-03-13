import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"

export default class Player extends Base.GameObject{
  constructor(x,y) {
    super(x,y)
    let rectangleComponent = new Components.RectangleComponent(25,15, "purple", "white");
    this.addComponent(rectangleComponent);
  }

}