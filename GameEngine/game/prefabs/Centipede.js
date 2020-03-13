import Base from "../../engine/Base.js";
import Components from "../../engine/Components.js"
//import CentipedeBehavior from "./../behaviors/CentipedeBehavior.js"

export default class Centipede extends Base.GameObject{
  constructor(x,y) {
    super(x,y)
    let rectangleComponent = new Components.RectangleComponent(32,32,"red", "orange");
    //let centipedeBehavior = new CentipedeBehavior();
    this.addComponent(rectangleComponent);
    //this.addComponent(centipedeBehavior);
  }

}