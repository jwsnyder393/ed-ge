import Base from "../../engine/Base.js"
import SceneManager from "../SceneManager.js"
import Point from "../../engine/base/Point.js"
import FastBoat from "../prefabs/FastBoat.js"
import Input from "../../engine/base/Input.js"

export default class MissileBehavior extends Base.Behavior {
    speed = 8;
    start() {
        
    }
    update() {  
        this.gameObject.y -= this.speed;   
    }
}