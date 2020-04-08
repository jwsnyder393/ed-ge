import Base from "../../engine/Base.js"

export default class SlowBoatBehavior extends Base.Behavior {
    speed = 3;
    start() {
        
    }
    update() {  
        this.gameObject.x += this.speed;
    }
}