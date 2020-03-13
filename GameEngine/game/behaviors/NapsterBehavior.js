import Base from "../../engine/Base.js"
import GameObjects from "../GameObjects.js"
import Components from "../../engine/Components.js";
import SceneManager from "../SceneManager.js";
import Point from "../../engine/base/Point.js";
import Missile from "../prefabs/Missile.js"
import Player from "../prefabs/Player.js"
import BoatField from "../prefabs/BoatField.js";

export default class NapsterBehavior extends Base.Behavior {
  
  start() {
    
  }
  update() {
    
    if (Base.Input.getKeyUp(' ')) {
      SceneManager.instantiate(Missile, new Point(0, 0), 0)
    }
  }
}
  