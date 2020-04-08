import Base from "../../engine/Base.js"

export default class MineBehavior extends Base.Behavior {
    speed = 2;
    start() {
        
    }
    update() {  
        this.gameObject.x += this.speed;
    }
}